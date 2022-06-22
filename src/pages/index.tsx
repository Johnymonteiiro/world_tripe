import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/header'
import { Banner } from '../components/banner';
import { Main } from './main';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>World Trip</title>
      </Head>
      <Header />
      <Banner />
      <Main />
     </div>
  )
}

export default Home
