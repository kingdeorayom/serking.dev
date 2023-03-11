import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import HomeLayout from '@/layouts/HomeLayout'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <HomeLayout>
      <Hero />
    </HomeLayout>
  )
}

Home.getLayout = function (page) {
  return <HomeLayout>{page}</HomeLayout>
}
