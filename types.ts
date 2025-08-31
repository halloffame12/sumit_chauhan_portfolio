export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Data' | 'AI' | 'Tools';
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  problem: string;
  solution: string;
  role?: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  institution: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  tags: string[];
  content: string; // Markdown or simple text
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  credentialUrl?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}