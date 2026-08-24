export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone?: string;
  twitter?: string;
  website?: string;
}

export interface ProfileData {
  name: string;
  fullName: string;
  handle: string;
  title: string;
  headline: string;
  tagline: string;
  summary: string;
  extendedBio: string;
  location: string;
  phone: string;
  workAuthorization: string;
  availability: string;
  yearsOfExperience: number;
  socials: SocialLinks;
  resumeDownloadUrl?: string;
}

export interface StatItem {
  label: string;
  value: string;
  helper: string;
}

export interface CareerHighlight {
  id: string;
  metric: string;
  label: string;
  description: string;
  category: 'Scale' | 'Throughput' | 'Performance' | 'Efficiency' | 'Cloud' | 'Cost & ROI' | 'Leadership';
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    experienceYears?: number;
    highlight?: boolean;
    tags: string[];
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'Enterprise Cloud & AI' | 'Backend & Microservices' | 'Data & Security' | 'Enterprise Systems' | 'AI & LLM' | 'Java & Cloud' | 'Enterprise Backend' | 'Full-Stack' | 'Architecture & APIs' | 'Data Engineering';
  isFeatured?: boolean;
  featured?: boolean;
  repoName: string;
  githubUrl: string;
  liveUrl?: string;
  techStack: string[];
  architectureHighlights: string[];
  keyOutcomes?: string[];
  systemPattern?: string;
  image?: string;
}

export type Project = ProjectItem;

export interface ArchitectureLayerItem {
  id: string;
  layerNumber: number;
  title: string;
  category: string;
  iconName: string;
  summary: string;
  technologies: string[];
  enterprisePatterns: string[];
  deliverables: string[];
}

export type ArchitectureLayer = ArchitectureLayerItem;

export interface ArchitectureNode {
  id: string;
  label: string;
  type: 'client' | 'gateway' | 'service' | 'queue' | 'database' | 'ai' | 'cloud' | 'lakehouse';
  tech: string;
  role: string;
  details: string;
}

export interface ArchitectureFlowStep {
  from: string;
  to: string;
  protocol: string;
  description: string;
}

export interface ArchitectureBlueprint {
  id: string;
  title: string;
  subtitle: string;
  domain: string;
  problemStatement?: string;
  solutionSummary: string;
  patternsUsed?: string[];
  tradeoffs: {
    pros: string[];
    cons: string[];
  };
  nodes: ArchitectureNode[];
  dataFlow: ArchitectureFlowStep[];
  scaleCharacteristics: {
    throughput: string;
    latency: string;
    reliability?: string;
    dataVolume?: string;
    efficiency?: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  client?: string;
  projectTitle?: string;
  companyUrl?: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  overview: string;
  responsibilities?: string[];
  architectureAccomplishments: string[];
  techStack: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  badgeType: 'Gold' | 'Cyan' | 'Emerald' | 'Purple';
  credentialId?: string;
  verificationUrl?: string;
  highlights: string[];
  domainsCovered: string[];
}

export interface GitHubRepoItem {
  name: string;
  fullName: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  languageColor: string;
  topics: string[];
  updatedAt: string;
  isFeatured?: boolean;
  url: string;
}

export interface PortfolioContent {
  profile: ProfileData;
  stats: StatItem[];
  careerHighlights: CareerHighlight[];
  architectureLayers: ArchitectureLayerItem[];
  architecturalPillars: {
    title: string;
    tagline: string;
    description: string;
    icon: string;
  }[];
  blueprints: ArchitectureBlueprint[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  certifications: CertificationItem[];
  githubRepos: GitHubRepoItem[];
}
