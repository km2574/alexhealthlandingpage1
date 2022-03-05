import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Alex_nav from '../Components/Alex_nav'
import Herosection from '../Components/Herosection'
import Feature from '../Components/Feature'
export default function Home() {
  return (
    <div>
      <Alex_nav/>
      <Herosection/>
      <Feature/>
    </div>
  )
}
