import { TableCell, TableRow, Button, TextField } from '@mui/material'
import React from 'react'

interface RowProps {
    cantidad: number;
    producto: string;
}

const Row = ({ cantidad, producto }: RowProps) => {

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                {producto}
            </TableCell>
            <TableCell align='right'>
            {cantidad}
            </TableCell>
        </TableRow>
    )
}

export default Row