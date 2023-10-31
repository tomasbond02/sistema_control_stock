import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/employedStyles.module.css'
import { Button, ButtonGroup } from '@mui/material'
import modifOrdCompra from '../comoponents/modificarOrdenCompra'

const Empleado: NextPage = () => {
    const router = useRouter()
    var busOrdCom = false
    return (
      <div className={styles.general}>
        <h1>EMPLEADO</h1>
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
                  busOrdCom = true
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
            
            </div>
        </div>
      </div>
    )
  }
  
  export default Empleado