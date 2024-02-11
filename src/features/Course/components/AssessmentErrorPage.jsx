import React from "react";
import { Typography, Box, Link } from "@mui/material";
import errorLogo from "../../../images/errorlogo.svg";

function AssessmentErrorPage() {

    const handleReload = () => {
        window.location.reload();
    }

  return (
    <Box
      sx={{marginTop : '10%'}}
    >
      <img src={errorLogo} alt="" width="100px" height="100px" style={{marginLeft : '24.81rem'}} />
      <Typography
        sx={{
          fontSize: "40px",
          fontFamily: "Poppins",
          fontWeight: "400",
          color: "rgba(145, 158, 171, 1)",
          marginTop: "1.875rem",
          marginLeft : '11.87rem'
        }}
      >
        Error Loading Assessment
      </Typography>
      <Box sx={{marginTop : '2.75rem', fontFamily : 'Poppins', marginLeft : '25.75rem', fontWeight : '400', fontSize : '20px'}}>
        <Link href='#' onClick={handleReload}>Reload</Link>
      </Box>
    </Box>
  );
}

export default AssessmentErrorPage;
