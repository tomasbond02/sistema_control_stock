import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Admin: NextPage = () => {
    const router = useRouter()
    return (
      <div className={styles.general}>
        <p>admin</p>
      </div>
    )
  }
  
  export default Admin