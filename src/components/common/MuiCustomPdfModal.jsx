import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Typography, Box, Stack, Divider } from "@mui/material";
import { pdfActions } from "../../store";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import presentationLogo from '../../images/presentation.svg'
import Rotate90DegreesCcwIcon from "@mui/icons-material/Rotate90DegreesCcw";

const style = {
  position: "absolute",
  top: "80px",
  left: "80px",
  justifyContent: "center",
  width: "80%",
};

function MuiCustomPdfModal() {
  const { isOpen } = useSelector((state) => state.pdf);
  const dispatch = useDispatch();

  //onclose of pdf
  const handleClose = () => {
    dispatch(pdfActions.unSetPdf());
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      hideBackdrop
    >
      <Box sx={style} bgcolor="primary">
        <Box
          sx={{
            padding: "16px",
            width: "100%",
            height: "56px",
          }}
        >
          <Stack direction="row" alignItems={"center"} sx={{gap : '17rem'}}>
            <Stack direction='row' alignItems={'center'}>
              <ArrowBackIcon sx={{ marginRight: "2rem", cursor : 'pointer'}} onClick={handleClose} />
              <Typography variant="subtitle2">
                File Name
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent={"space-around"}>
              <Stack>
                <Typography>1 / 2</Typography>
              </Stack>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Stack
                direction="row"
                alignItems={"center"}
                justifyContent={"space-evenly"}
                sx={{ width: "179px" }}
              >
                <RemoveIcon sx={{cursor : 'pointer'}} />
                <Typography>100%</Typography>
                <AddIcon sx={{cursor : 'pointer'}}/>
              </Stack>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Stack direction="row" sx={{width : '112px'}} justifyContent={'space-evenly'}>
                <img src={presentationLogo} alt="" />
                <Rotate90DegreesCcwIcon />
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
}

export default MuiCustomPdfModal;
