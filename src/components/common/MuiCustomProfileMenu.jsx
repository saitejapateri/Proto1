import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, MenuItem, Stack, Typography, Box, Badge } from "@mui/material";
import logoutImg from "../../images/logout.svg";
import palette from "../../theme/palette";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import editLogo from '../../images/edit.svg'
import { Avatar } from "@mui/material";

function MuiCustomProfileMenu({ anchorEl, handleClose }) {
  const { name, email, profileImg } = useSelector((state) => state.profile);

  const navigate = useNavigate();

  //handling logout
  const handleLogout = () => {
    navigate("/");
  };

  const commonStyles = {
    width: "215px",
    paddingLeft: "1rem",
    display: "flex",
    flexDirection: "column",
    backgroundColor: palette.grey[100],
  };

  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
      <MenuItem sx={{ ...commonStyles }} autoFocus={false}>
        <Stack>
          <Box sx={{margin : 'auto'}}>
            <Badge
              overlap="circular"
              size = "small"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent={
                <Avatar
                  sx={{
                    backgroundColor: palette.primary[0],
                    width : '15px',
                    height : '15px'
                  }}
                >
                  <img src={editLogo}/>
                </Avatar>
              }
            >
              <img
                src={profileImg}
                alt="profile-picture"
                width="50px"
                height="50px"
                style={{ borderRadius: "50%", margin: "auto" }}
              />
            </Badge>
          </Box>
          <Typography variant="body5" sx={{ marginTop: "10px" }}>
            {name}
          </Typography>
          <Typography color={palette.grey[600]}>{email}</Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            marginTop: "5px",
            backgroundColor: palette.primary[0],
            width: "100%",
            height: "45px",
            borderRadius: "10px",
            padding: "5px",
          }}
          alignItems={"center"}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "35px",
              gap: "9px",
              paddingLeft: "13px",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: palette.grey[200],
              },
            }}
            onClick={handleLogout}
          >
            <img src={logoutImg} alt="" />
            <Typography>Logout</Typography>
          </Box>
        </Stack>
      </MenuItem>
    </Menu>
  );
}

export default MuiCustomProfileMenu;
