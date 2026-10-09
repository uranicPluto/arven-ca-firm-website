export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  tagline: string;
  iconName: string;
  categoryPillar: string;
  items: {
    title: string;
    description: string;
    deliverables?: string[];
  }[];
  overview: string;
  whoIsItFor: string[];
  commonChallenges: string[];
  ourApproach: { step: string; title: string; desc: string }[];
  deliverablesList: string[];
  faqs: { question: string; answer: string }[];
  relatedServiceIds: string[];
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  iconName: string;
  keyChallenges: string[];
  specializedSolutions: string[];
  applicableServices: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  credentials: string;
  experience: string;
  image: string;
  bio: string;
  specializations: string[];
  email: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  content: string[];
}

export interface SimpleTestimonial {
  id: string;
  quote: string;
  author: string;
  designation: string;
  location: string;
}
