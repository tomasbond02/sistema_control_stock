import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



const Home: NextPage = () => {
  const router = useRouter()
  return (
    <div className={styles.general}>
      <p>hola</p>
    </div>
  )
}

export default Home
