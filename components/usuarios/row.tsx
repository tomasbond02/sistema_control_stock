import { TableCell, TableRow, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

interface RowProps {
    orden: number;
    compra: string;
    contraseña: string;
    setRows: (val: any) => void;
}

const Row = ({ orden, compra, contraseña, setRows }: RowProps) => {
    const [showModify, setShowModify] = useState(false);

    function handleChange(e: any) {
        setRows((rows: any) => rows.map((row: any) => {
            return row.orden === orden ? { orden, compra: e.target.value } : row;
        }))
    }

    function passwordChange(e: any) {
        setRows((rows: any) => rows.map((row: any) => {
            return row.orden === orden ? { orden, contraseña: e.target.value } : row;
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
                {showModify ? <TextField inputProps={{style: {padding: '5px 0'}}} value={contraseña} onChange={passwordChange}></TextField> : contraseña}
            </TableCell>
            <TableCell align='right'>
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