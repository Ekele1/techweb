export interface Testimonial {
  name: string;
  position: string;
  feedback: string;
}

export interface Project {
  id: number;
  name: string;
  image: string;
  title: string;
  subtitle: string;
  date: string;
  client: string;
  location: string;
  description: string;
  keyObjectives: string[];
  scopeOfWork: string[];
  tools?: string[];
  outcome?: string;
  testimonial: Testimonial;
}

export type ServicePhase = {
  phase: string;
  description: string;
  tools: string[];
};

export type ServiceBenefit = {
  title: string;
  description: string;
  icon: string;
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServiceOverview = {
  description: string;
  highlights: string[];
};

export type ServiceData = {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  overview: ServiceOverview;
  process: ServicePhase[];
  benefits: ServiceBenefit[];
  useCases: string[];
  faqs: ServiceFAQ[];
};