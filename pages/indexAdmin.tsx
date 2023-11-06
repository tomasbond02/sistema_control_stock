import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/employedStyles.module.css'
import { Button, ButtonGroup } from '@mui/material'
import { useState } from 'react'
import BasicTable from '../components/usuarios/usuarios'
import Reportes from '@/components/reportes/reporte'



const Admin: NextPage = () => {
    const router = useRouter()
    const [Component, setComponent] = useState<JSX.Element>()

    return (
      <div className={styles.general}>
        <h1>DUEÑO</h1>
        <div className={styles.mainStyles}>
          <div >
            <ButtonGroup variant="text" className={styles.rightBar}>
              <Button 
                onClick={() => setComponent(<BasicTable />)}>USUARIOS</Button> 
              <Button
                onClick={() => {
                  setComponent(<Reportes />)
                }}
                >REPORTES
              </Button>
              <Button
                onClick={() => {
                  router.push('/')
                }}
                >CERRAR SESIÓN
              </Button>
            </ButtonGroup>
          </div>
            <div>
              {Component}
            </div>
        </div>
      </div>
    )
  }
  
  export default Admin