import React from "react";
import { Modal, Typography, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '80%',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function MuiCustomPdfModal({ pdfPopper, handleClose, url }) {
  return (
    <Modal
      open={pdfPopper}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <iframe
          title="PDF Viewer"
          src={url}
          width="100%"
          height="500px"
          frameBorder="0"
        ></iframe>
      </Box>
    </Modal>
  );
}

export default MuiCustomPdfModal;
