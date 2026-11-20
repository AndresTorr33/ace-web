// Tipos compartidos por los archivos de contenido de src/data/.
import type { ImageMetadata } from 'astro';
import type { IconName } from '../components/icons';

export type { IconName };

export type Link = { label: string; href: string };

export type Feature = { icon: IconName; title: string; text: string };

export type Step = { title: string; text: string };

export type Faq = { q: string; a: string };

// Sin `src` se muestra el marcador de PhotoSlot; al llegar la foto solo se agrega `src`.
export type Photo = { label: string; alt: string; src?: ImageMetadata };

export type FormField =
  | { name: string; label: string; type: 'text' | 'tel' | 'email'; required?: boolean }
  | { name: string; label: string; type: 'select' | 'radio'; options: string[]; required?: boolean };

export type FormConfig = {
  title: string;
  intro: string;
  submit: string;
  messageIntro: string; // primera línea del mensaje de WhatsApp
  fields: FormField[];
};

export type ProgramPage = {
  seo: { title: string; description: string };
  whatsappMessage: string;
  headerCta: Link;
  hero: { eyebrow: string; title: string; lead: string; ctaPrimary: Link; ctaSecondary: Link; media: Photo };
  beneficios: { title: string; items: Feature[] };
  requisitos: { title: string; intro: string; items: string[]; carreras?: string[] };
  trabajos: { title: string; intro: string; items: Feature[]; resumen: string };
  pasos: { title: string; intro: string; items: Step[] };
  galeria: { title: string; photos: Photo[] };
  padres: { eyebrow: string; title: string; items: string[]; cta: string };
  faq: Faq[];
  form: FormConfig;
};
