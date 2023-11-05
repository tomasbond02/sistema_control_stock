import { TableCell, TableRow, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

interface RowProps {
    orden: number;
    compra: string;
    setRows: (val: any) => void;
}

const Row = ({ orden, compra, setRows }: RowProps) => {
    const [showModify, setShowModify] = useState(false);

    function handleChange(e: any) {
        setRows((rows: any) => rows.map((row: any) => {
            return row.orden === orden ? { orden, compra: e.target.value } : row;
        }))
    }

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                {orden}
            </TableCell>
            <TableCell align="right">
                {showModify ? <TextField inputProps={{style: {padding: '5px 0'}}} value={compra} onChange={handleChange}></TextField> : compra}
            </TableCell>
            <TableCell align='right'>
            <Button onClick={() => alert("Orden enviada")}>Enviar</Button>
                {
                    showModify
                        ? <Button onClick={() => setShowModify(false)}>Guardar</Button>
                        : <Button onClick={() => setShowModify(true)}>Modificar</Button>
                }
            </TableCell>
        </TableRow>
    )
}

export default Row