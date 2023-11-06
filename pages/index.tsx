import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';


const Home: NextPage = () => {
  const router = useRouter()
  const [usuario, setUser] = useState('');
  const [contraseña, setPassword] = useState('');

  const userName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const passWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };


  return (
    <div className={styles.general}>
      <div className={styles.containerInicio}>
        <Image
        src="/logoRivera.jpg"
        width={200}
        height={200}
        alt="Picture of the author"
        />
        <TextField
          margin='normal'
          id="filled-required"
          label="Username"
          variant="filled"
          onChange={userName}
        />
        <TextField
          margin='normal'
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          onChange={passWord}
        />

      <Button variant="contained" endIcon={<SendIcon />}
      onClick={() => {
        if(usuario == "empleado" && contraseña == "empleado"){
          router.push("/indexEmp")
        }
        else if(usuario == "dueño" && contraseña == "dueño"){
          router.push("/indexAdmin")
        }
        else{
          alert("usuario o contraseña incorrecta")
        }
      }}
      >
        Enter
      </Button>
      </div>
    </div>
  )
}

export default Home