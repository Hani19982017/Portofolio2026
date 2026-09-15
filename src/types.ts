export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'wordpress' | 'shopify' | 'frontend' | 'ai';
  categoryLabel: string;
  description: string;
  fullDetails: string;
  technologies: string[];
  tools: string[];
  highlights: string[];
  clientType: string;
  role: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  employmentType: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  bulletPoints: string[];
  coreSkills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  grade: string;
  period: string;
  graduationProject: {
    title: string;
    grade: string;
    description: string;
    tools: string[];
    technologies: string[];
  };
}

export interface TrainingCourse {
  id: string;
  title: string;
  platform: string;
  duration: string;
  period: string;
  description: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  duration?: string;
  description?: string;
  type: 'course' | 'contest';
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}

export interface ContactDetails {
  name: string;
  title: string;
  location: string;
  phone1: string;
  phone2: string;
  email: string;
  linkedin: string;
  github: string;
}
