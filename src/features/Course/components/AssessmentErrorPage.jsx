import React from "react";
import { Typography, Box, Link } from "@mui/material";
import errorLogo from "../../../images/errorlogo.svg";

function AssessmentErrorPage() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Box sx={{ marginTop: "10%", justifyContent : 'center', alignItems : 'center'}}>
      <img
        src={errorLogo}
        alt=""
        width="100px"
        height="100px"
        style={{ marginLeft: "45%" }}
      />
      <Typography
        sx={{
          fontSize: "40px",
          fontFamily: "Poppins",
          fontWeight: "400",
          color: "rgba(145, 158, 171, 1)",
          marginTop: "1.875rem",
          fontSize: ['1rem', '1.25rem', '1.5rem'], 
          '@media screen and (min-width: 900px)': {
            fontSize: '1.25rem',
            marginLeft : '35%'
          },
          '@media screen and (min-width: 1200px)': {
            fontSize: '2.75rem',
            marginLeft : '25%'
          },
        }}
      >
        Error Loading Assessment
      </Typography>
      <Box
        sx={{
          marginTop: "2.75rem",
          fontFamily: "Poppins",
          marginLeft: "45%",
          fontWeight: "400",
          fontSize: "1.25rem",
        }}
      >
        <Link href="#" onClick={handleReload}>
          Reload
        </Link>
      </Box>
    </Box>
  );
}

export default AssessmentErrorPage;
