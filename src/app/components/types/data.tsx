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