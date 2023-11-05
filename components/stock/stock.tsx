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
import { Box } from '@mui/material';
import AddProductModal from './addProductModal';

export default function StockTable() {
  const [rows, setRows] = useState([
    { producto: "Chocolate", cantidad: 10 },
    { producto: "Vainilla", cantidad: 20 }
  ])

  return (
    <Box>
      <Box>
        <AddProductModal setRows={setRows} />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="stock table">
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell align="right">Cantidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map((row: any, i: number) => (
                <Row key={i} producto={row.producto} cantidad={row.cantidad} setRows={setRows}></Row>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
