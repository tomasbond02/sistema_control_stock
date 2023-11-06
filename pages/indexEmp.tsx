import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import styles from '../styles/employedStyles.module.css'
import { Button, ButtonGroup } from '@mui/material'
import { useState } from 'react'
import BasicTable from '../components/ordenCompra/ordenCompraEmpleado'
import StockTable from '@/components/stock/stock'
import AddProductModal from '@/components/stock/addProductModal'

const Empleado: NextPage = () => {
  const router = useRouter()
  const [Component, setComponent] = useState<JSX.Element>()


  return (
    <div className={styles.general}>
      <h1>EMPLEADO</h1>
      <div className={styles.mainStyles}>
        <div >
          <ButtonGroup variant="text" className={styles.rightBar}>
            <Button onClick={() => setComponent(<BasicTable />)}>BUSCAR ORDEN DE COMPRA</Button>
            <Button onClick={() => setComponent(<StockTable />)}>CONSULTAR STOCK</Button>
            <Button
              onClick={() => {

              }}
            >REGISTRAR VENTA
            </Button>
            <Button
              onClick={() => {
                setComponent(<AddProductModal/>)
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
          {Component}
        </div>
      </div>
    </div>
  )
}

export default Empleado