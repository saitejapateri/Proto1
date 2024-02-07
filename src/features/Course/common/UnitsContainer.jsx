import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { unitActions } from "../../../store/index.js";
import { Box, Grid, Tab, Tabs, Stack, TextField } from "@mui/material";
import MuiCustomUnitsTab from "../../../components/common/MuiCustomUnitsTab.jsx";
import searchLogo from "../../../images/searchstatus.svg";
import palette from "../../../theme/palette.js";

function UnitsContainer({ units }) {
  const dispatch = useDispatch();
  const selectedUnit = useSelector((state) => state.unit.selectedUnitId);
  console.log(selectedUnit);

  const handleTab = (event, newValue) => {
    console.log(newValue);
    dispatch(unitActions.selectUnit(newValue));
  };

  return (
    <Grid item md={8} sx={{ marginLeft: "3.5rem", marginTop: "1.25rem" }}>
      <Stack direction="row" alignItems={"center"}>
        <Box>
          <Tabs value={selectedUnit} onChange={handleTab}>
            {units.map((unit) => (
              <Tab key={unit.id} label={unit.unit_name} sx={{ padding: 0 }} />
            ))}
          </Tabs>
        </Box>
        <Box>
        <TextField
          id="outlined-size-small"
          size="small"
          sx={{backgroundColor : palette.grey[100], border : 'none'}}
        />
        </Box>
      </Stack>
    </Grid>
  );
}

export default UnitsContainer;
