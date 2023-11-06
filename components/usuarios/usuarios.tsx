import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Row from './row';


export default function BasicTable() {
  const [rows, setRows] = useState([
    { orden: 1, compra: "dueño", contraseña: "*****" },
    { orden: 2, compra: "empleado", contraseña: "********" }
  ])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Usuarios</TableCell>
            <TableCell align="right">usuario</TableCell>
            <TableCell align="right">contraseña</TableCell>
            <TableCell align="right">Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map((row: any, i: number) => (
              <Row key={i} compra={row.compra} orden={row.orden} contraseña={row.contraseña} setRows={setRows}></Row>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}