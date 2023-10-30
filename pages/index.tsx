import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TextField from '@mui/material/TextField';
import IconLabelButtons from '@/comoponents/buton';


const Home: NextPage = () => {
  const router = useRouter()
  return (
    <div className={styles.general}>
      <div className={styles.containerInicio}>
        <Image
        src="/logoRivera.jpeg"
        width={100}
        height={100}
        alt="Picture of the author"
        />
        <TextField
        helperText="Please enter your username"
        id="demo-helper-text-aligned"
        label="USERNAME"
        />
        <TextField
          helperText=" Please enter your password  "
          id="demo-helper-text-aligned-no-helper"
          label="PASSWORD"
        />

        <IconLabelButtons/>
      </div>
    </div>
  )
}

export default Home

