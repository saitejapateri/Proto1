import React, {useState} from "react";
import {useSelector} from 'react-redux';
import { Stack, Box, Typography } from "@mui/material";
import MuiCustomProfileMenu from "./MuiCustomProfileMenu";
import palette from "../../theme/palette.js"

function TopNavigation() {

  const {name, email, profileImg} = useSelector(state => state.profile)
  const [anchorEl, setAnchorEl] = useState(null);


  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <>
      <Box
        width={"100%"}
        height={"80px"}
        sx={{
          display: "flex",
          flexDirection: "row",
          borderBottom: `2px solid ${palette.grey[200]}`,
        }}
        bgcolor={palette.primary[0]}
        justifyContent={"space-between"}
      >
        <Stack direction="row">
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "32px",
              marginTop: "27px",
              marginLeft: "18px",
            }}
          >
            Good morning, {name?.split(" ")[0]} 👋
          </Typography>
        </Stack>
        <Stack sx={{ marginTop: "15px", marginRight: "40px" }}>
          <img
            src={profileImg}
            width={"50px"}
            height={"50px"}
            style={{ borderRadius: "50%", cursor : 'pointer'}}
            onClick={handleProfileClick}
          />
        </Stack>
      </Box>
      <MuiCustomProfileMenu anchorEl={anchorEl} handleClose={handleClose}/>
    </>
  );
}

export default TopNavigation;
