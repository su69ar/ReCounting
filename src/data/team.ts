// Team data for the /team page and Person JSON-LD.
// Real team members + credentials should be filled in by the founder.
// Empty/unverified members are commented out to avoid fabricating credentials.

export type TeamMember = {
  slug: string;
  name: string;
  jobTitle: string;
  bio: string;
  image?: string;
  email?: string;
  linkedin?: string;
  credentials: string[];
  expertise: string[];
};

// TODO(founder): Fill in real names, credentials, photos.
// The structure below is a placeholder so the page renders.
// Replace each TODO with verified information before going live with the /team page.
export const team: TeamMember[] = [
  {
    slug: "founder-principal",
    name: "TODO: Founder name",
    jobTitle: "Founder and Principal Accountant",
    bio: "TODO: Short bio (2-3 sentences) covering years of experience, the kinds of clients you've supported, and what you bring to ReCounting. Include any sectors of focus.",
    image: undefined, // TODO: /team/founder-headshot.jpg once provided
    email: undefined,
    linkedin: undefined,
    credentials: [
      // Examples: "BKP (Bersertifikat Konsultan Pajak) — Brevet A & B",
      //          "Member, IAI (Ikatan Akuntan Indonesia)",
      //          "USKP (Ujian Sertifikasi Konsultan Pajak) certified",
    ],
    expertise: [
      // Examples: "PT PMA accounting",
      //          "Indonesian tax compliance",
      //          "Expat tax filings",
    ],
  },
  // Add more team members here once data is verified.
];
