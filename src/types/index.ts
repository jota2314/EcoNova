import type { Language } from '@/lib/translations';

export interface City {
  slug: string;
  city: string;
  state: string;
  county?: string;
}

export interface ServiceLink {
  slug: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  baseUrl: string;
  phone: string;
}

export interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  zipCode?: string;
  homeAge?: string;
}

export interface LanguageConfig {
  code: Language;
  name: string;
  flag: string;
}

export interface MetadataOptions {
  title: string;
  description: string;
  slug: string;
}

export interface GTMEvent {
  event: string;
  form_id?: string;
  [key: string]: unknown;
}