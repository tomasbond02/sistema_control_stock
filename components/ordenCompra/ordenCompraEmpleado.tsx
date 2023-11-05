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
  const [showModif, setShowModif] = useState(false)
  const [rows, setRows] = useState([
    { orden: 1, compra: "1kg de chocolate" },
    { orden: 2, compra: "1/4 ddl" }
  ])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Orden de Compra</TableCell>
            <TableCell align="right">Compra</TableCell>
            <TableCell align="right">Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map((row: any, i: number) => (
              <Row key={i} compra={row.compra} orden={row.orden} setRows={setRows}></Row>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
