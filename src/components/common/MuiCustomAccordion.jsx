import React from "react";
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

function MuiCustomAccordion({ index, topic_name, materials }) {
  return (
    <Accordion
      square
      defaultExpanded={index === 0}
      sx={{ boxShadow: "none", backgroundColor: palette.primary[0] }}
    >
      <AccordionSummary sx={{ padding: 0 }}>
        {topic_name}
        <KeyboardArrowDownOutlinedIcon />
      </AccordionSummary>
      {materials.map((material) => (
        <AccordionDetails
          key={material.id}
          sx={{ padding: "0.2rem", alignItems: "center" }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ marginLeft: "1.5rem", gap: "5px" }}
          >
            <img src={documentImg} alt="" width="16px" height="16px" />
            {material.name}
          </Stack>
          <Button variant="text" endIcon={<ArrowForwardOutlinedIcon />}>
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
