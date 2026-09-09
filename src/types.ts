export interface ProjectMetric {
  value: string;
  label: string;
}

export interface CaseStudyData {
  problem: string;
  whatIDid: string[];
  approach: string[];
  outcome: string[];
  whatILearned: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  period?: string;
  location?: string;
  metrics: ProjectMetric[];
  description: string;
  image: string;
  caseStudy: CaseStudyData;
  companyUrl?: string;
}

export interface TimelineExperience {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  category?: string;
  period: string;
  location: string;
  isPrimary: boolean;
  image?: string;
  tags?: string[];
  highlights: string[];
  metrics?: {
    value: string;
    num?: number;
    prefix?: string;
    suffix?: string;
    label: string;
  }[];
  caseStudy?: CaseStudyData;
}

export interface Achievement {
  id: string;
  rank: string;
  title: string;
  subtitle: string;
  highlight?: string;
}

export type CursorMode = 'default' | 'pointer' | 'view' | 'explore' | 'open' | 'copy';
