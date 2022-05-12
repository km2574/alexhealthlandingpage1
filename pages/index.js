import Head from 'next/head'
import Alex_nav from '../Components/Alex_nav'
import Herosection from '../Components/Herosection'
import Feature from '../Components/Feature'
import Cta from '../Components/Cta'
import IntroAlex from '../Components/IntroAlex'
import Tie_ups from '../Components/Tie_ups'
import Packages from '../Components/Packages'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Health </title>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <Alex_nav />
      <Herosection />
      <Tie_ups />
      <Packages />
      <Feature />
      <Cta />
      <IntroAlex />

    </div>
  )
}
