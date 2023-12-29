import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  MastodonIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/serking-head.jpg'
import siteMeta from '@/data/siteMeta'
import { NextSeo } from 'next-seo';


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target='_blank'
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About | Serking de Orayom"
        description={siteMeta.description}
        canonical="https://www.serking.tech/about"
        openGraph={{
          url: 'https://www.serking.tech/about',
          images: [
            {
              url: `https://www.serking.tech/og.png`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            }
          ],
          siteName: 'serking.tech',
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi, I’m Serking. I’m a software developer focusing on web and mobile applications.
            </h1>
            <div className="mt-6 text-lg prose space-y-7 dark:prose-invert text-zinc-600 dark:text-zinc-400">

              <p>
                Hello, thanks for stopping by. I’m Serking and I’ve been doing technology related things since my early teenage years, though I only learned programming when I started college. Some highlights about me and my activities:
              </p>

              <p>As a kid, books and video games were my companions, shaping my imagination and fueling my curiosity. The love affair with literature and video gaming started early, creating a parallel universe where stories unfolded in the pages of countless books and games. It was more than a pastime; it was a lifelong love affair with video games and the written word.</p>

              <p>I was in my early teenage years when the world of computing opened its doors to me. My journey has been a whirlwind of exploration and innovation: picture a younger version of me, huddled in a local computer shop’s <Link href='https://en.wikipedia.org/wiki/Pisonet' target='_blank'><strong><em>pisonet</em></strong></Link>, learning the ropes by tinkering with PCs and indulging in a bit of digital mischief (<em>after playing <Link href='https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City' target='_blank'><strong><em>Grand Theft Auto: Vice City</em></strong></Link>, when my piso credits are low</em>). It was a wild introduction to computing technology, and I embraced it with the same fervor that defined my childhood adventures.</p>

              <p>Years passed and I found myself tinkering with smartphones and laptops, changing its stock ROM to custom ROMs and changing the OS installed, respectively. I had a lot of fun doing it, making me curious how software worked in general.</p>

              <p>It was then that I realized what career I wanted to pursue and so I took <em><strong>BS Information Technology</strong></em> in college—and that’s how the journey really started. Now, I am into building PCs and software development.</p>

              <p>These days, I spend most of my free time reading books, listening to music, playing video games or watching movies, TV series or anime.</p>

              <p>If time permits, I also hang out with my friends and family.</p>

              <p>I also have a dog named <strong>Yuko</strong>. A very good partner and companion he is.</p>

            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={siteMeta.author.twitter} icon={TwitterIcon}>
                Follow on X (Twitter)
              </SocialLink>
              <SocialLink href={siteMeta.author.instagram} icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href={siteMeta.author.github} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href={siteMeta.author.linkedin} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${siteMeta.author.email}`}
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                {siteMeta.author.email}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
