import React from "react";
import {useSelector} from 'react-redux'
import LeftNavigation from "./components/common/LeftNavigation";
import { Outlet, useLocation } from "react-router-dom";
import { Grid, Stack } from "@mui/material";
import TopNavigation from "./components/common/TopNavigation";
import MuiCustomPdfModal from "./components/common/MuiCustomPdfModal"
import palette from "./theme/palette.js";

function Root() {

  const {isOpen,pdfUrl} = useSelector(state => state.pdf);

  const isLogin = localStorage.getItem("isLogin");
  const path = useLocation();
  const loginPage = path.pathname === "/" ? true : false;
  const isLoginPage = !loginPage && isLogin;

  return (
    // <Grid container bgcolor={palette.primary[0]}>
    //   {isLoginPage && (
    //     <Stack sx={{ width: "80px" }}>
    //       <LeftNavigation />
    //     </Stack>
    //   )}
    //   <Grid container item xs>
    //     {isLoginPage && (
    //       <Grid item xs={12} style={{ height: "80px" }}>
    //         <TopNavigation />
    //       </Grid>
    //     )}
    //     <Grid item xs={12}>
    //       <Outlet />
    //     </Grid>
    //   </Grid>
    // </Grid>
    <Stack direction='row' bgcolor={palette.primary[0]}>
      {isLoginPage && <Stack><LeftNavigation /></Stack>}
      <Stack sx={{width : '100%'}}>
        {isLoginPage && <TopNavigation />}
        {/* {isOpen ? <Outlet /> : <Outlet />} */}
        <Outlet />
      </Stack>
    </Stack>
  );
}

export default Root;
