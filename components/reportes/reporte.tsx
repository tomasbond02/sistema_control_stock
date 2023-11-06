import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import { Button, ButtonGroup } from '@mui/material'
import { useState } from 'react'

const Reportes: NextPage = () => {
  const router = useRouter()
  const [Component, setComponent] = useState<JSX.Element>()


  return (
    <div>
      <h1>visualizar reportes</h1>
      <ButtonGroup variant="text">
              <Button 
                onClick={() => alert("Reporte enviado a su mail")}>REPORTES DE VENTAS</Button> 
              <Button
                onClick={() => {
                    alert("Reporte enviado a su mail")
                }}
                >REPORTES DE STOCK
              </Button>
              <Button
                onClick={() => {
                    alert("Reporte enviado a su mail")
                }}
                >REPORTE DE MERCADERIA EN MAL ESTADO
              </Button>
            </ButtonGroup>
    </div>
  )
}

export default Reportes