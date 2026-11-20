// Datos de la empresa y ajustes globales del sitio.
// Todo lo marcado con "PENDIENTE ACE" está anotado en PENDIENTES.md.
import type { Feature, Link } from './types';

export type EstadoConvocatoria = 'abierta' | 'pocos-cupos' | 'agotada';

export const site = {
  name: 'ACE Perú',
  legalName: 'American Cultural Experiences E.I.R.L.',
  ruc: '20517866963',
  url: 'https://aceworkandtravel.com',

  whatsapp: { number: '51949447940', display: '949 447 940' },
  email: 'info@aceworkandtravel.com',
  address: {
    street: 'Calle Bajada Balta 169', // PENDIENTE ACE: confirmar oficina/piso
    district: 'Miraflores',
    city: 'Lima',
  },

  social: {
    instagram: { handle: '@aceworkandtravel', url: 'https://www.instagram.com/aceworkandtravel/' },
    // PENDIENTE ACE: confirmar URLs de TikTok, Facebook y LinkedIn (vacío = no se muestra)
    tiktok: '',
    facebook: '',
    linkedin: '',
  },

  // PENDIENTE ACE: URL del Libro de Reclamaciones. Si está vacío, el enlace no se muestra.
  libroReclamacionesUrl: '',

  // Los scripts solo se cargan si el ID no está vacío. Al activarlos, actualizar la CSP en public/.htaccess.
  analytics: { metaPixelId: '', clarityId: '' },

  convocatoriaWT: {
    estado: 'abierta' as EstadoConvocatoria, // ← 'abierta' | 'pocos-cupos' | 'agotada'
    temporada: '2027-2028', // PENDIENTE ACE: confirmar
    // Edad: de 19 a 25, o cumplir 19 antes de esta fecha del año de la temporada.
    fechaCorteEdad: '1 de mayo',
    proximaEntrevista: '', // PENDIENTE ACE: fecha de la próxima entrevista de inglés
  },

  // Páginas del menú. Nosotros y Contacto son anclas y se arman en Header.astro.
  nav: [
    { label: 'Work & Travel', href: '/' },
    { label: 'Trainee & Internship', href: '/trainee-internship' },
    { label: 'Charlas', href: '/charlas' },
  ] satisfies Link[],

  tagline: 'Programa regulado por el Departamento de Estado de EE. UU. · Más de 18 años',

  // Sección "Nosotros / ¿Por qué ACE?" (W&T y T&I)
  nosotros: {
    intro:
      'ACE es una agencia peruana de intercambio cultural con más de 18 años de trayectoria. Representamos en el Perú a sponsors de EE. UU. que trabajan bajo la supervisión del Departamento de Estado, y te acompañamos en cada etapa del programa.',
    valores: [
      { icon: 'eye', title: 'Honestidad transparente', text: 'Lo que es el programa, lo que cuesta y lo que no podemos garantizar.' },
      { icon: 'shield', title: 'Calidad y respaldo', text: 'Cada etapa acompañada, documentada y respaldada por socios regulados.' },
      { icon: 'users', title: 'Cercanía', text: 'Asesoría 1 a 1. Respuesta consistente y rápida a participantes y familias.' },
    ] satisfies Feature[],
    esquema: ['Departamento de Estado', 'Sponsor en EE. UU.', 'ACE en Perú', 'Tú'],
  },
};

/** Enlace de WhatsApp con el mensaje ya escrito. */
export const whatsappUrl = (text: string) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;
