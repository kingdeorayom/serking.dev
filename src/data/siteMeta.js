
import logoAmazon from '@/images/logos/aws.svg'
import logoClarity from '@/images/logos/clarity.jpg'
import logoMicrosoft from '@/images/logos/azure.svg'
import logoXOR from '@/images/logos/xor.jpg'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoFleek from '@/images/logos/fleeksvg.svg'
import logoUblue from '@/images/logos/ublue.png'

import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'

const siteMeta = {
  title: "Serking de Orayom",
  description: "Serking de Orayom is a developer advocate, keynote speaker, author, and open source practitioner.",
  copyright: "Serking de Orayom, CC-BY-SA",
  author: {
    name: "Serking de Orayom",
    email: "kingdeorayom@gmail.com",
    twitter: "https://twitter.com/kingdeorayom",
    instagram: "https://instagram.com/kingdeorayom",
    github: "https://github.com/kingdeorayom",
    linkedin: "https://linkedin.com/in/kingdeorayom",
  },
  siteUrl: "https://serking.tech"
}
export const resume = [
  {
    company: 'Padtech Industries Corporation',
    title: 'RND Programmer I',
    logo: logoAmazon,
    start: '2022',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
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
export const projects = [
  {
    name: 'SALIKSIK: UPHSL Research Repository',
    description:
      'A web-based Institutional Repository for disseminating, archiving and preserving digital copies of academic papers of University of Perpetual Help System Laguna - Biñan Campus.',
    link: { href: 'https://saliksikuphsl.org', label: 'https://saliksikuphsl.org' },
    logo: logoVanilla,
  },
  {
    name: 'Auto Promo PH',
    description:
      'Streamline your car-buying experience with our Auto Promo PH.',
    link: { href: 'https://www.autopromo.ph', label: 'https://www.autopromo.ph' },
    logo: logoVanilla,
  },
  {
    name: 'Group Study Gallery',
    description:
      'An online gallery web application for my friends to view and reminisce the memories of our college days.',
    link: { href: 'https://github.com/kingdeorayom/group-study-gallery-web', label: 'https://github.com/kingdeorayom/group-study-gallery-web' },
    logo: logoVanilla,
  },
  {
    name: 'Group Study Secret Santa',
    description:
      'A Secret Santa generator I developed for use in one of my circle of friends exchange gift event.',
    link: { href: 'https://group-study-secret-santa.vercel.app', label: 'https://group-study-secret-santa.vercel.app' },
    logo: logoVanilla,
  },
  {
    name: 'Barangay Malaban Resident Information Management System',
    description:
      'Software project in college showcasing CRUD operations.',
    link: { href: '', label: 'github.com' },
    logo: logoVanilla,
  },
  {
    name: 'Passwordify',
    description:
      'Passwordify: Your Simple Solution for Secure Passwords. Effortlessly generate strong, secure passwords with ease. Discover the simplicity of better online security.',
    link: { href: 'https://passwordify-kingdeorayom.vercel.app', label: 'https://passwordify-kingdeorayom.vercel.app' },
    logo: logoVanilla,
  },
  {
    name: 'Jejemonizer',
    description:
      'Jejemonizer - The Jejemon Generator',
    link: { href: 'https://jejemonizer.vercel.app', label: 'https://jejemonizer.vercel.app' },
    logo: logoVanilla,
  },
  {
    name: 'Beshy Generator',
    description:
      'Pagod 🤸‍♀️ na 🤸‍♀️ ba 🤸‍♀️ ang 🤸‍♀️ beshy 🤸‍♀️ ko 🤸‍♀️ na 🤸‍♀️ yan? Cringe lol.',
    link: { href: 'https://beshy.vercel.app', label: 'https://beshy.vercel.app' },
    logo: logoVanilla,
  },
  {
    name: 'Shutdown Timer',
    description:
      'Made with C#, a handy tool for scheduling shutdown timer for Windows.',
    link: { href: 'https://github.com/kingdeorayom/shutdown-timer', label: 'https://github.com/kingdeorayom/shutdown-timer' },
    logo: logoVanilla,
  },


]


export default siteMeta;