import type { IconType } from 'react-icons';

export type TechId = string;

export interface TechInfo {
  icon?: IconType;
  label: string;
  color: string;
}

// Data shapes used by the static data files in src/data.
export type DataProject = {
  id?: string;
  title: string;
  imageUrl: string;
  description?: string;
  stack?: string[];
  projectUrl?: string; // legacy
  liveUrl?: string | null;
  repoUrl?: string | null;
  category?: 'featured' | 'entry' | 'other';
  status?: 'complete' | 'wip' | 'planning' | 'archived';
  hidden?: boolean;
  isWork?: boolean;
  company?: string;
  companyUrl?: string;
};

export type DataExperience = {
  id: string;
  title: string;
  date: string;
  description: string;
  stack: string[];
  url?: string;
};
