'use client'

import { createContext, useContext, useMemo, useState } from 'react'

export type Lang = 'es' | 'en'

type Dict = typeof dictionary

export const dictionary = {
  es: {
    nav: {
      services: 'Servicios',
      shop: 'Tienda',
      social: 'Redes',
      contact: 'Contacto',
    },
    cta: { shop: 'Ver tienda', work: 'Trabaja con nosotros' },
    hero: {
      badge: 'Café · Contenido · Comunidad',
      title: 'Around the Cup',
      subtitle:
        'Creamos contenido que enamora, seleccionamos café de especialidad y construimos comunidad alrededor de cada taza.',
      primary: 'Explorar la tienda',
      secondary: 'Ver servicios',
    },
    services: {
      title: 'Creación de contenido',
      subtitle:
        'Producción audiovisual y estrategia de marca para cafeterías, tostadores y marcas que viven el café.',
      items: [
        {
          title: 'Fotografía & video',
          body: 'Sesiones de producto y reels que capturan el aroma de tu marca.',
        },
        {
          title: 'Gestión de redes',
          body: 'Calendarios, copywriting y comunidad para Instagram y TikTok.',
        },
        {
          title: 'Estrategia de marca',
          body: 'Identidad, tono y dirección creativa centrada en tu historia.',
        },
        {
          title: 'Campañas virales',
          body: 'Conceptos pensados para crecer y conectar con tu audiencia.',
        },
      ],
    },
    shop: {
      title: 'Tienda de café',
      subtitle:
        'Granos de especialidad y accesorios seleccionados para tu ritual diario.',
      buy: 'Comprar',
      products: [
        {
          name: 'Granos de origen',
          desc: 'Tueste medio · notas a chocolate y caramelo',
          price: '$18',
          tag: 'Más vendido',
        },
        {
          name: 'Taza de cerámica',
          desc: 'Hecha a mano · 300ml',
          price: '$22',
          tag: 'Nuevo',
        },
        {
          name: 'Pour-over kit',
          desc: 'Dripper + carafe de vidrio',
          price: '$45',
          tag: '',
        },
        {
          name: 'Set de regalo',
          desc: 'Café + taza + accesorios',
          price: '$60',
          tag: 'Edición limitada',
        },
      ],
    },
    social: {
      title: 'Síguenos',
      subtitle:
        'Detrás de cámaras, recetas y la comunidad que vive alrededor de la taza.',
      instagram: 'Ver en Instagram',
      tiktok: 'Ver en TikTok',
      follow: 'Seguir',
    },
    contact: {
      title: 'Trabajemos juntos',
      subtitle:
        'Cuéntanos sobre tu marca o proyecto y te respondemos en menos de 24 horas.',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntanos qué necesitas...',
      send: 'Enviar mensaje',
      success: '¡Gracias! Te contactaremos pronto.',
    },
    footer: { rights: 'Todos los derechos reservados.' },
  },
  en: {
    nav: {
      services: 'Services',
      shop: 'Shop',
      social: 'Social',
      contact: 'Contact',
    },
    cta: { shop: 'Visit shop', work: 'Work with us' },
    hero: {
      badge: 'Coffee · Content · Community',
      title: 'Around the Cup',
      subtitle:
        'We craft content people love, source specialty coffee, and build community around every single cup.',
      primary: 'Explore the shop',
      secondary: 'See services',
    },
    services: {
      title: 'Content creation',
      subtitle:
        'Audiovisual production and brand strategy for cafés, roasters and brands that live coffee.',
      items: [
        {
          title: 'Photo & video',
          body: 'Product shoots and reels that capture your brand\u2019s aroma.',
        },
        {
          title: 'Social management',
          body: 'Calendars, copywriting and community for Instagram and TikTok.',
        },
        {
          title: 'Brand strategy',
          body: 'Identity, voice and creative direction built around your story.',
        },
        {
          title: 'Viral campaigns',
          body: 'Concepts designed to grow and connect with your audience.',
        },
      ],
    },
    shop: {
      title: 'Coffee shop',
      subtitle:
        'Specialty beans and curated gear for your daily ritual.',
      buy: 'Buy',
      products: [
        {
          name: 'Single origin beans',
          desc: 'Medium roast · chocolate & caramel notes',
          price: '$18',
          tag: 'Best seller',
        },
        {
          name: 'Ceramic mug',
          desc: 'Handmade · 300ml',
          price: '$22',
          tag: 'New',
        },
        {
          name: 'Pour-over kit',
          desc: 'Dripper + glass carafe',
          price: '$45',
          tag: '',
        },
        {
          name: 'Gift set',
          desc: 'Coffee + mug + accessories',
          price: '$60',
          tag: 'Limited edition',
        },
      ],
    },
    social: {
      title: 'Follow us',
      subtitle:
        'Behind the scenes, recipes and the community living around the cup.',
      instagram: 'View on Instagram',
      tiktok: 'View on TikTok',
      follow: 'Follow',
    },
    contact: {
      title: 'Let\u2019s work together',
      subtitle:
        'Tell us about your brand or project and we\u2019ll reply within 24 hours.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      messagePlaceholder: 'Tell us what you need...',
      send: 'Send message',
      success: 'Thanks! We\u2019ll be in touch soon.',
    },
    footer: { rights: 'All rights reserved.' },
  },
} as const

type I18nContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: Dict[Lang]
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  const value = useMemo(
    () => ({ lang, setLang, t: dictionary[lang] }),
    [lang],
  )
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
