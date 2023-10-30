import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


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
          margin='normal'
          required
          id="filled-required"
          label="Required"
          variant="filled"
        />
        <TextField
          margin='normal'
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />

      <Button variant="contained" endIcon={<SendIcon />}
      onClick={() => router.push('/indexEmp')}
      >
        Send
      </Button>
      </div>
    </div>
  )
}

export default Home

