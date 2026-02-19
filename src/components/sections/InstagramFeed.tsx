"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { motionTokens, prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { InstagramMedia } from "@/app/api/instagram/route";

type InstagramFeedProps = {
  initialPosts?: InstagramMedia[];
  limit?: number;
  className?: string;
};

export function InstagramFeed({
  initialPosts,
  limit = 6,
  className,
}: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramMedia[]>(initialPosts || []);
  const [loading, setLoading] = useState(!initialPosts);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialPosts) return;

    async function fetchPosts() {
      try {
        const res = await fetch(`/api/instagram?limit=${limit}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || 'Failed to fetch posts');
        }

        setPosts(data.posts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load Instagram posts');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [initialPosts, limit]);

  useGSAP(() => {
    if (!containerRef.current || prefersReducedMotion() || posts.length === 0) return;

    const items = containerRef.current.querySelectorAll(".ig-post");

    ScrollTrigger.batch(items, {
      start: "top 85%",
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          {
            y: motionTokens.distance.md,
            autoAlpha: 0,
            scale: 0.9,
          },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: motionTokens.duration.slow,
            stagger: {
              each: 0.08,
              from: "start",
            },
            ease: motionTokens.ease.enter,
          }
        );
      },
    });
  }, { scope: containerRef, dependencies: [posts] });

  if (loading) {
    return <InstagramFeedSkeleton />;
  }

  if (error) {
    return (
      <div className="text-center py-12 text-neutral-500">
        <p>{error}</p>
        <p className="text-sm mt-2">Pastikan Instagram Graph API sudah dikonfigurasi.</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12 text-neutral-500">
        <p>Belum ada post Instagram.</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={cn("w-full", className)}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {posts.slice(0, limit).map((post, index) => (
          <InstagramPost
            key={post.id}
            post={post}
            featured={index === 0}
          />
        ))}
      </div>
    </div>
  );
}

type InstagramPostProps = {
  post: InstagramMedia;
  featured?: boolean;
};

function InstagramPost({ post, featured = false }: InstagramPostProps) {
  const postRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (prefersReducedMotion() || !postRef.current) return;

    const tl = gsap.timeline();

    tl.to(imageRef.current, {
      scale: 1.08,
      duration: 0.5,
      ease: "power2.out",
    }, 0);

    tl.to(overlayRef.current, {
      autoAlpha: 1,
      duration: 0.3,
    }, 0);

    if (post.caption && captionRef.current) {
      tl.fromTo(captionRef.current,
        { y: 10, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.3, delay: 0.1 },
        0.1
      );
    }
  }, [post.caption]);

  const handleMouseLeave = useCallback(() => {
    if (prefersReducedMotion() || !postRef.current) return;

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(overlayRef.current, {
      autoAlpha: 0,
      duration: 0.2,
    });
  }, []);

  const mediaUrl = post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url;
  const isCarousel = post.media_type === 'CAROUSEL_ALBUM';

  return (
    <a
      ref={postRef}
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "ig-post group relative block overflow-hidden rounded-xl bg-neutral-100",
        featured && "md:col-span-2 md:row-span-2",
        "aspect-square"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <img
        ref={imageRef}
        src={mediaUrl || ''}
        alt={post.caption?.slice(0, 50) || 'Instagram post'}
        className="h-full w-full object-cover"
      />

      {/* Media type indicator */}
      {(isCarousel || post.media_type === 'VIDEO') && (
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full p-1.5">
          {isCarousel ? (
            <CarouselIcon />
          ) : (
            <VideoIcon />
          )}
        </div>
      )}

      {/* Hover overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0"
      >
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {post.caption && (
            <p
              ref={captionRef}
              className="text-white text-sm md:text-base line-clamp-3 leading-relaxed"
            >
              {post.caption}
            </p>
          )}
          <span className="inline-flex items-center gap-1.5 mt-2 text-white/80 text-xs">
            <InstagramIcon />
            <span>Lihat di Instagram</span>
          </span>
        </div>
      </div>
    </a>
  );
}

function InstagramFeedSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "aspect-square rounded-xl bg-neutral-200 animate-pulse",
            i === 0 && "md:col-span-2 md:row-span-2"
          )}
        />
      ))}
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function CarouselIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="M22 10v4" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default InstagramFeed;
