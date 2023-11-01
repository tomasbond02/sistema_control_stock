import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import styles from '../styles/employedStyles.module.css'
import { Button, ButtonGroup } from '@mui/material'
import { useState } from 'react'
import EnhancedTable from '../components/ordenCompraEmpleado'


const Empleado: NextPage = () => {
    const router = useRouter()
    const [showTable,setShowTable] = useState(false)

    return (
      <div className={styles.general}>
        <h1>EMPLEADO</h1>
        <div className={styles.mainStyles}>
          <div >
            <ButtonGroup variant="text" className={styles.rightBar}>
              <Button 
                onClick={() => {
                  setShowTable(!showTable)
                  console.log(showTable)
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
                {showTable && <EnhancedTable/>}
            </div>
        </div>
      </div>
    )
  }
  
  export default Empleado