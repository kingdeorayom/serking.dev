import padtechLogo from '@/images/logos/padtech.png'
import uphslLogo from '@/images/logos/uphsl.png'
import sociovLogo from '@/images/logos/sociov.png'

import logoClarity from '@/images/logos/clarity.jpg'
import logoMicrosoft from '@/images/logos/azure.svg'
import logoXOR from '@/images/logos/xor.jpg'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoFleek from '@/images/logos/fleeksvg.svg'
import logoUblue from '@/images/logos/ublue.png'

import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'

import beshynator from '@/images/logos/beshynator.png'
import jejemonizer from '@/images/logos/jejemonizer.png'
import autopromoph from '@/images/logos/autopromoph.png'
import saliksikuphsl from '@/images/logos/saliksikuphsl.png'
import gssecretsanta from '@/images/logos/gssecretsanta.png'
import passwordify from '@/images/logos/passwordify.svg'

const siteMeta = {
  title: 'Serking de Orayom',
  description: 'Software developer, game enthusiast, and avid reader.',
  copyright: 'Serking de Orayom, CC-BY-SA',
  author: {
    name: 'Serking de Orayom',
    email: 'kingdeorayom@gmail.com',
    twitter: 'https://twitter.com/kingdeorayom',
    instagram: 'https://instagram.com/kingdeorayom',
    github: 'https://github.com/kingdeorayom',
    linkedin: 'https://linkedin.com/in/kingdeorayom',
  },
  siteUrl: 'https://www.serking.tech',
}
export const resume = [
  {
    company: 'Padtech Industries Corporation',
    title: 'RND Programmer I',
    logo: padtechLogo,
    start: '2022',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Sociov Innovations, Inc.',
    title: 'Front End Developer (Internship)',
    logo: sociovLogo,
    start: 'Aug 2021',
    end: 'Dec 2021',
  },
  // {
  //   company: 'Microsoft',
  //   title: 'Principal Cloud Developer Advocate',
  //   logo: logoMicrosoft,
  //   start: '2017',
  //   end: '2022',
  // },
  // {
  //   company: 'XOR Data Exchange',
  //   title: 'CIO',
  //   logo: logoXOR,
  //   start: '2014',
  //   end: '2016',
  // },
  // {
  //   company: 'Clarity Services, Inc.',
  //   title: 'COO',
  //   logo: logoClarity,
  //   start: '2008',
  //   end: '2014',
  // },
]
export const education = [
  {
    school: 'University of Perpetual Help System Laguna',
    course: 'BS Information Technology',
    logo: uphslLogo,
    start: '2018',
    end: '2022',
  },
  {
    school: 'University of Perpetual Help System Laguna',
    course: 'Computer Systems Servicing NC II',
    logo: uphslLogo,
    start: '2016',
    end: '2018',
  },
]
export const projects = [
  {
    name: 'SALIKSIK: UPHSL Research Repository',
    description:
      'A web-based Institutional Repository for disseminating, archiving and preserving digital copies of academic papers of University of Perpetual Help System Laguna - Biñan Campus.',
    link: {
      href: 'https://saliksikuphsl.org',
      label: 'https://saliksikuphsl.org',
    },
    logo: saliksikuphsl,
  },
  {
    name: 'Auto Promo PH',
    description:
      'Streamline your car-buying experience with our Auto Promo PH.',
    link: {
      href: 'https://www.autopromo.ph',
      label: 'https://www.autopromo.ph',
    },
    logo: autopromoph,
  },
  {
    name: 'Group Study Gallery',
    description:
      'An online gallery web application for my friends to view and reminisce the memories of our college days.',
    link: {
      href: 'https://github.com/kingdeorayom/group-study-gallery-web',
      label: 'https://github.com/kingdeorayom/group-study-gallery-web',
    },
    logo: logoClarity,
  },
  {
    name: 'Group Study Secret Santa',
    description:
      'A Secret Santa generator I developed for use in one of my circle of friends exchange gift event.',
    link: {
      href: 'https://group-study-secret-santa.vercel.app',
      label: 'https://group-study-secret-santa.vercel.app',
    },
    logo: gssecretsanta,
  },
  {
    name: 'Barangay Malaban Resident Information Management System',
    description: 'Software project in college showcasing CRUD operations.',
    link: { href: '', label: 'github.com' },
    logo: logoXOR,
  },
  {
    name: 'Passwordify',
    description:
      'Passwordify: Your Simple Solution for Secure Passwords. Effortlessly generate strong, secure passwords with ease. Discover the simplicity of better online security.',
    link: {
      href: 'https://passwordify-kingdeorayom.vercel.app',
      label: 'https://passwordify-kingdeorayom.vercel.app',
    },
    logo: passwordify,
  },
  {
    name: 'Jejemonizer',
    description: 'Jejemonizer - The Jejemon Generator',
    link: {
      href: 'https://jejemonizer.vercel.app',
      label: 'https://jejemonizer.vercel.app',
    },
    logo: jejemonizer,
  },
  {
    name: 'Beshy Generator',
    description:
      'Pagod 🤸‍♀️ na 🤸‍♀️ ba 🤸‍♀️ ang 🤸‍♀️ beshy 🤸‍♀️ ko 🤸‍♀️ na 🤸‍♀️ yan? Cringe lol.',
    link: {
      href: 'https://beshy.vercel.app',
      label: 'https://beshy.vercel.app',
    },
    logo: beshynator,
  },
  {
    name: 'Shutdown Timer',
    description:
      'Made with C#, a handy tool for scheduling shutdown timer for Windows.',
    link: {
      href: 'https://github.com/kingdeorayom/shutdown-timer',
      label: 'https://github.com/kingdeorayom/shutdown-timer',
    },
    logo: logoFleek,
  },
]

export default siteMeta
