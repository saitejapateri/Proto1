import React from "react";
// import { useSelector } from 'react-redux'
import {
  TableRow,
  TableCell,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import { RightArrowIcon } from '../../../../assets/Svg/RightArrowIcon'
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import palette from "../../theme/palette";

function secondsToMinutes(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  if (remainingSeconds > 0)
    return `${minutes} minutes ${remainingSeconds} seconds`;
  return `${minutes} minutes`;
}

function getInternetQuality(speed) {
  if (speed >= 1 && speed <= 3) return "Poor";
  else if (speed >= 4 && speed <= 7) return "Average";
  else return "Excellent";
}

const commonStyles = {
  fontFamily : 'Poppins',
  fontWegiht : '400',
  fontSize : '14px'
}

const dataStyling = {
  textAlign: 'start',
  // fontFamily: poppinsFont.fontFamily,
  fontSize: {
    // md: pxToRem(10),
    // lg: pxToRem(14)
  },
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: 'normal',
  textTransform: 'capitalize',
}

const tableCellStylings = {
  // padding: '0px',
  // margin: '0px',
  height: '50px',
  minWidth: {
    md: '60px',
    lg: '100px',
    xl : '150px'
  },
}

const MuiCustomStudentTableRow = ({ key, stu, viewStudentResult }) => {
  const theme = useTheme();
  // const { currentSectionTab } = useSelector((state) => state.assessment)
  // const transformData = (data) => {
  //   return {
  //     subject: data.subject,
  //     semester: data.semester,
  //     total_timespent: data.total_timespent || "N/A",
  //     submission_type: data.submission_type || "N/A",
  //     internet_speed: data.internet_speed || "N/A",
  //     percentage_scored: data.percentage_scored || "N/A",
  //   };
  // };
  // const transformedStu = transformData(stu);

  return (
    <TableRow
      // onClick={() => {
      //   viewStudentResult(stu);
      // }}
      key={key}
      sx={{
        cursor: "pointer",
        // height : '30px',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        background:
          stu.submission_type === "not attempted"
            ? theme.palette.warning[200]
            : "",
        "&:hover": {
          background:
            stu.submission_type === "not attempted"
              ? theme.palette.warning[300]
              : theme.palette.grey[100], // Set your desired background color
        }
      }}
    >
      <TableCell
        scope="row"
        sx={{ border: "none", borderRadius: "6px 0 0 6px", ...tableCellStylings}}
      >
        <Typography
          variant="body1"
          sx={{
            ...commonStyles,
            color: theme.palette.grey[900],
          }}
        >
          {stu.subject}
        </Typography>
      </TableCell>
      <TableCell scope="row" sx={{ border: "none", ...tableCellStylings}}>
        <Typography variant="body1" sx={{ ...commonStyles,color: theme.palette.grey[900], textAlign : 'center'}}>
          {stu.total_timespent===null ? 0 : stu.total_timespent}Min
        </Typography>
      </TableCell>
      <TableCell scope="row" sx={{ border: "none", ...tableCellStylings}}>
        <Typography
          variant="body1"
          sx={{
            ...commonStyles,
            color:
              stu.submission_type === 3
                ? theme.palette.success[700]
                : stu.submission_type === 1
                ? theme.palette.info[700]
                : stu.submission_type === 4
                ? theme.palette.error[700]
                : stu.submission_type === 2
                ? theme.palette.warning[700]
                : theme.palette.error[800],
          }}
        >
          {stu.submission_type === 1
            ? "Timeout"
            : stu.submission_type === 2
            ? "Interrupted"
            : stu.submission_type === 3
            ? "On Submit"
            : "Tabswitch"}
        </Typography>
      </TableCell>
      <TableCell scope="row" sx={{ border: "none" }}>
        <Typography variant="body1" sx={{...commonStyles, color: theme.palette.grey[900], textAlign : 'end'}}>
          {getInternetQuality(stu.internet_speed)}
        </Typography>
      </TableCell>
      <TableCell
        scope="row"
        sx={{ border: "none", borderRadius: "0 6px 6px 0", ...tableCellStylings}}
      >
        <Stack
          direction="row"
          // justifyContent="flex-end"
          alignItems="center"
        >
          <Typography variant="body1" sx={{...commonStyles, color: theme.palette.grey[900], ...tableCellStylings, textAlign : 'center'}}>
            {stu.percentage_scored === null ? 0 : stu.percentage_scored}%
          </Typography>
        </Stack>
      </TableCell>
      <TableCell scope="row" sx={{ border: "none", ...tableCellStylings}}>
        <Typography variant="body1" sx={{...commonStyles, color: theme.palette.grey[900], textAlign : 'center'}}>
          {stu.attempted === 0 ? "not attempted" : "attempted"}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default MuiCustomStudentTableRow;
