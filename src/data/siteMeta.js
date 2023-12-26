
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: { href: 'https://saliksikuphsl.org', label: 'https://saliksikuphsl.org' },
    logo: logoFleek,
  },
  {
    name: 'Auto Promo PH',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: { href: 'https://www.autopromo.ph', label: 'https://www.autopromo.ph' },
    logo: logoUblue,
  },
  {
    name: 'Group Study Gallery',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: { href: 'https://github.com/kingdeorayom/group-study-gallery-web', label: 'https://github.com/kingdeorayom/group-study-gallery-web' },
    logo: logoUblue,
  },
  {
    name: 'Group Study Secret Santa',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: { href: 'https://group-study-secret-santa.vercel.app', label: 'https://group-study-secret-santa.vercel.app' },
    logo: logoVanilla,
  },
  {
    name: 'Barangay Malaban Resident Information Management System',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: { href: '', label: 'github.com' },
    logo: logoCaptainhook,
  },
  {
    name: 'Passwordify',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: { href: 'https://passwordify-kingdeorayom.vercel.app', label: 'https://passwordify-kingdeorayom.vercel.app' },
    logo: logoGolang,
  },
  {
    name: 'Jejemonizer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: { href: 'https://jejemonizer.vercel.app', label: 'https://jejemonizer.vercel.app' },
    logo: logoCaptainhook,
  },
  {
    name: 'Beshy Generator',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: { href: 'https://beshy.vercel.app', label: 'https://beshy.vercel.app' },
    logo: logoCaptainhook,
  },
  {
    name: 'Shutdown Timer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: { href: 'https://github.com/kingdeorayom/shutdown-timer', label: 'https://github.com/kingdeorayom/shutdown-timer' },
    logo: logoKubernetes,
  },


]


export default siteMeta;