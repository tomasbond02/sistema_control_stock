import { TableCell, TableRow, Button, TextField } from '@mui/material'
import React from 'react'

interface RowProps {
    cantidad: number;
    producto: string;
    setRows: (val: any) => void;
}

const Row = ({ cantidad, producto, setRows }: RowProps) => {

    function handleChange(n: number) {
        setRows((rows: any) => rows.map((row: any) => {
            return row.producto === producto ? { producto, cantidad: row.cantidad + n } : row;
        }))
    }

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                {producto}
            </TableCell>
            <TableCell align='right'>
            <Button onClick={() => handleChange(1)}>+</Button>
            {cantidad}
            <Button onClick={() => handleChange(-1)}>-</Button>                
            </TableCell>
        </TableRow>
    )
}

export default Row