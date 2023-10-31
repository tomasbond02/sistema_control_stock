import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/employedStyles.module.css'
import { Button, ButtonGroup } from '@mui/material'


const Admin: NextPage = () => {
    const router = useRouter()
    return (
      <div className={styles.general}>
        <h1>DUEÑO</h1>
        <div className={styles.mainStyles}>
          <div >
            <ButtonGroup variant="text" className={styles.rightBar}>
              <Button 
                onClick={() => {
                  
                }}
                >BUSCAR ORDEN DE COMPRA
              </Button> 
              <Button
                onClick={() => {
                  
                }}
                >CONSULTAR STOCK
              </Button>
              <Button
                onClick={() => {
                  
                }}
                >REGISTRAR VENTA
              </Button>
              <Button
                onClick={() => {
                  
                }}
                >REGISTRAR MERCADERIA
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
              <h2>hola</h2>
            </div>
        </div>
      </div>
    )
  }
  
  export default Admin