import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DeleteModal = (props: {
  setOpen: Function;
  open: boolean;
  handleDelete: Function;
}) => {
  const { setOpen, open, handleDelete } = props;
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Voce realmente deseja deletar esse quarto?
        </Typography>
        <Button onClick={() => handleDelete()}>Sim</Button>
        <Button onClick={handleClose}>Nao</Button>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
