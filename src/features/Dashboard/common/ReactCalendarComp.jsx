import React, { useState, useEffect } from "react";
import { Typography, Stack } from "@mui/material";
import ReactCalendar from "../../../components/common/ReactCalendar/ReactCalendar";
import CalendarSkeleton from "../../../components/common/CalendarSkeleton";

function ReactCalendarComp() {
  const [timelap, setTimeLap] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimeLap(false);
    }, 100);
  });

  return (
    <Stack>
      <Typography
        sx={{
          color: "#2E3A59",
          fontFamily: "Poppins",
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "28px",
        }}
      >
      Calendar 
      </Typography>
      <Stack>{timelap ? <CalendarSkeleton /> : <ReactCalendar />}</Stack>
    </Stack>
  );
}

export default ReactCalendarComp;
