import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Radio,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MuiColumnChart from "../../../../components/common/MuiColumnChart";
import RecentAssessmentSkeleton from "./RecentAssessmentSkeleton";
import palette from "../../../../theme/palette";

function RecentAssessments({ recent_assessments }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState("Web Technologies");
  const [rotationAngle, setRotationAngle] = useState(0);

  //handling subjects dropdown
  const handleSubjectsDropdown = (event) => {
    setAnchorEl(event.currentTarget);
    setRotationAngle(180);
  };

  //handle null close
  const handleClose = () => {
    setAnchorEl(null);
    setRotationAngle(0);
  }

  //handling subject close
  const handleCloseSubject = (event) => {
    setSelectedSubject(event ? event : selectedSubject);
    setAnchorEl(null);
    setRotationAngle(0);
  };

  return (
    <Stack>
      {!recent_assessments ? (
        <RecentAssessmentSkeleton />
      ) : (
        <>
          <Stack direction="row" justifyContent={"space-between"}>
            <Typography
              variant="h5"
              sx={{ marginLeft: "1.43rem", marginTop: "1rem" }}
            >
              {recent_assessments?.title}
            </Typography>
            <List
              component="ul"
              sx={{
                display: "flex",
                gap: "1.125rem",
                marginRight: "1.125rem",
                alignItems: "center",
              }}
            >
              <ListItem disablePadding>
                <CircleOutlinedIcon
                  style={{ backgroundColor: "blue", borderRadius: "50%" }}
                  sx={{
                    fontSize: "0.5rem",
                    marginRight: "0.3rem",
                    color: palette.primary.main,
                  }}
                />
                <Typography variant="subtitle2" sx={{ fontWeight: "400" }}>
                  Attempted
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <CircleOutlinedIcon
                  style={{ backgroundColor: "red", borderRadius: "50%" }}
                  sx={{
                    fontSize: "0.5rem",
                    marginRight: "0.3rem",
                    color: palette.error.main,
                  }}
                />
                <Typography variant="subtitle2" sx={{ fontWeight: "400" }}>
                  Unattempted
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <Button
                  variant="text"
                  disableRipple
                  disableElevation
                  disableFocusRipple
                  disabled
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {selectedSubject}
                </Button>
                <KeyboardArrowDownIcon
                  onClick={handleSubjectsDropdown}
                  sx={{
                    cursor: "pointer",
                    color: palette.grey[400],
                    transform: `rotate(${rotationAngle}deg)`,
                    transition: "transform 0.3s",
                  }}
                />
              </ListItem>
            </List>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {recent_assessments?.subjects.map((subject, index) => (
                <MenuItem
                  key={index}
                  onClick={() => handleCloseSubject(subject.name)}
                  sx={{ padding : '0 0.843rem' }}
                >
                  <ListItemIcon>
                    <Radio checked={subject.name === selectedSubject} sx={{color : palette.common.black}}/>
                  </ListItemIcon>
                  <Typography variant="body1" sx={{fontWeight : '400'}}>{subject.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Stack>
          <Stack>
            {recent_assessments?.subjects.map(
              (subject, index) =>
                selectedSubject === subject.name && (
                  <MuiColumnChart
                    key={index}
                    series={[
                      {
                        name: subject.name,
                        data: subject.tests.map((test) => test.percentage),
                      },
                    ]}
                    categories={subject.tests.map((test) => test.name)}
                  />
                )
            )}
          </Stack>
        </>
      )}
    </Stack>
  );
}

export default RecentAssessments;
