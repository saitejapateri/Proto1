import React from "react";
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import documentImg from "../../images/document.svg";
import palette from "../../theme/palette";
import {pdfActions} from '../../store/index.js'

function MuiCustomAccordion({ index, topic_name, materials }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePdfClick = (url,name) => {
    dispatch(pdfActions.setPdf({
      isOpen : true,
      pdfUrl : url,
      pdfName : name
    }))
    navigate(`/pdf`);
    window.scrollTo(0,0);
  }


  return (
    <Accordion
      square
      defaultExpanded={index === 0}
      sx={{ boxShadow: "none", backgroundColor: palette.primary[0] }}
    >
      <AccordionSummary sx={{ padding: 0 }}>
        <Typography variant='subtitle2' sx={{color : palette.grey[400]}}>
          {topic_name}
        </Typography>
        <KeyboardArrowDownOutlinedIcon sx={{color : palette.grey[400]}} />
      </AccordionSummary>
      {materials.map((material) => (
        <AccordionDetails
          key={material.id}
          sx={{ padding: "0.2rem", alignItems: "center", display : 'flex', justifyContent : 'space-between'}}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ marginLeft: "1.5rem", gap: "5px" }}
          >
            <img src={documentImg} alt="" width="16px" height="16px" />
            {material.name}
          </Stack>
          <Button variant="text" endIcon={<ArrowForwardOutlinedIcon />} onClick={()=>handlePdfClick(material.url,material.name)}>
            <Typography variant="button" sx={{ fontWeight: "400" }}>
              Start
            </Typography>
          </Button>
        </AccordionDetails>
      ))}
    </Accordion>
  );
}

export default MuiCustomAccordion;
