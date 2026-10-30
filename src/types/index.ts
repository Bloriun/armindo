export type ProjectCategory = 'commercial' | 'beach' | 'rent';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  badge?: string;
  isNew?: boolean;
  status?: string;
  typeBadge: string;
  categories: ProjectCategory[];
  image: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
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
