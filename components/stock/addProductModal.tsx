import { Box, Modal, Typography, TextField, Button } from '@mui/material'
import React from 'react'

const initialState = { producto: "", cantidad: 0 };

const AddProductModal = ({ setRows }: any) => {
    const [openModal, setOpenModal] = React.useState(false)
    const [newProduct, setNewProduct] = React.useState(initialState)

    function handleAdd() {
        if (newProduct.producto) {
            setRows((rows: any) => [...rows, newProduct])
            setNewProduct(initialState);
            handleClose();
        }
    }

    function handleClose() {
        setOpenModal(false)
    }

    function handleOpen() {
        setOpenModal(true)
    }

    return (
        <Box>
            <Button variant="text" onClick={handleOpen}>
                Agregar producto
            </Button>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Agregar producto
                    </Typography>
                    <TextField
                        id="porducto"
                        label="producto"
                        value={newProduct.producto}
                        onChange={(e) => setNewProduct({ cantidad: newProduct.cantidad, producto: e.target.value })}
                    />
                    <TextField
                        id="cantidad"
                        label="cantidad"
                        type='number'
                        value={newProduct.cantidad}
                        onChange={(e) => setNewProduct({ cantidad: Number(e.target.value), producto: newProduct.producto })}
                    />

                    <Button variant="text" onClick={handleAdd}>
                        Guardar
                    </Button>
                </Box>
            </Modal>
        </Box>
    )
}

export default AddProductModal