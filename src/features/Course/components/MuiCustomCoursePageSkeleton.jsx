import React from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton, Stack, Grid } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function MuiCustomCoursePageSkeleton() {
  //handling BackButtonClick
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate("/dashboard");
  };

  return (
    <Grid container md>
      <Grid item md={8} sx={{ marginTop: "2rem", marginLeft: "2rem" }}>
        <Stack direction="row" alignItems={"center"} sx={{ gap: "1rem" }}>
          <KeyboardBackspaceIcon
            sx={{ cursor: "pointer" }}
            onClick={handleBackButton}
          />
          <Skeleton width="80%" sx={{ height: "31.25px" }} />
          <Skeleton variant="rounded" width="5%" sx={{ fontSize: "0.5rem" }} />
        </Stack>
        <Skeleton
          variant="rounded"
          width="20%"
          sx={{
            fontSize: "0.25rem",
            marginTop: "1.2rem",
            marginLeft: "2.6rem",
          }}
        />
      </Grid>
      <Grid item md={10}>
        <Stack sx={{ marginLeft: "5.25rem", marginTop: "1rem" }}>
          <Skeleton animation="wave" height={25} width="80%" />
          <Skeleton animation="wave" height={25} width="90%" />
          <Skeleton animation="wave" height={25} width="100%" />
          <Skeleton animation="wave" height={25} width="60%" />
          <Skeleton animation="wave" height={25} width="80%" />
          <Skeleton animation="wave" height={25} width="90%" />
          <Skeleton animation="wave" height={25} width="90%" />
          <Skeleton animation="wave" height={25} width="80%" />
          <Skeleton animation="wave" height={25} width="80%" />
        </Stack>
      </Grid>
      <Grid item md={6} sx={{ marginLeft: "3.4rem" }}>
        <Skeleton animation="wave" height={25} width="15%" />
        <Stack direction="row" sx={{ gap: "1.5rem", marginTop: "0.5rem" }}>
          <Skeleton variant="rounded" width="30%" height={60} />
          <Skeleton variant="rounded" width="30%" height={60} />
          <Skeleton variant="rounded" width="30%" height={60} />
        </Stack>
        <Stack direction="row" sx={{ gap: "1rem", marginTop: "1rem" }}>
          <Skeleton animation="wave" height={35} width="20%" />
          <Skeleton animation="wave" height={35} width="10%" />
          <Skeleton animation="wave" height={35} width="20%" />
        </Stack>
        <Stack sx={{ gap: "1rem", marginTop: "1rem" }}>
          <Skeleton animation="wave" height={35} width="30%" />
          <Stack sx={{marginLeft : '2.5rem'}}>
          <Skeleton animation="wave" height={35} width="30%" />
          <Skeleton animation="wave" height={35} width="30%" />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default MuiCustomCoursePageSkeleton;
