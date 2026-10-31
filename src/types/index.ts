export type ProjectCategory = 'commercial' | 'beach' | 'rent';

export type ProjectSegment = 'obra' | 'oportunidade';

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  segment: ProjectSegment;
  badge?: string;
  isNew?: boolean;
  status?: string;
  typeBadge: string;
  categories: ProjectCategory[];
  image: string;
  imagePosition?: string;
  gallery?: string[];
  description: string;
  specs: ProjectSpec[];
  features: string[];
  whatsappMessage: string;
}

export interface PillarItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  whatsappMessage: string;
}
