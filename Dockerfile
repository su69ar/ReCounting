# Use official Node.js image as base
FROM node:24-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Install SWC musl binary for Alpine
RUN npm install @next/swc-linux-x64-musl

# Build arguments for environment variables
ARG LEAD_WEBHOOK_URL
ARG LEAD_WEBHOOK_SECRET
ARG INSTAGRAM_ACCESS_TOKEN
ARG INSTAGRAM_ACCOUNT_ID
ARG INSTAGRAM_REFRESH_SECRET
ARG EMAIL_USER
ARG EMAIL_APP_PASSWORD
ARG EMAIL_FROM
ARG ADMIN_EMAIL

# Set environment variables at build time
ENV LEAD_WEBHOOK_URL=${LEAD_WEBHOOK_URL}
ENV LEAD_WEBHOOK_SECRET=${LEAD_WEBHOOK_SECRET}
ENV INSTAGRAM_ACCESS_TOKEN=${INSTAGRAM_ACCESS_TOKEN}
ENV INSTAGRAM_ACCOUNT_ID=${INSTAGRAM_ACCOUNT_ID}
ENV INSTAGRAM_REFRESH_SECRET=${INSTAGRAM_REFRESH_SECRET}
ENV EMAIL_USER=${EMAIL_USER}
ENV EMAIL_APP_PASSWORD=${EMAIL_APP_PASSWORD}
ENV EMAIL_FROM=${EMAIL_FROM}
ENV ADMIN_EMAIL=${ADMIN_EMAIL}

# Build the application (use webpack instead of turbopack for Alpine)
RUN NEXT_PRIVATE_SKIP_TURBO=1 npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3103

ENV PORT=3103
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
