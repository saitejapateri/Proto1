import React from "react";
import {useSelector} from 'react-redux'
import { Grid } from "@mui/material";
import MuiCustomAccordion from "../../../components/common/MuiCustomAccordion";

function AccordionsContainer({ topics }) {

    console.log(topics)
    const selectedUnit = useSelector(state => state.unit.selectedUnitId);

  return (
    <Grid
      item
      md={5}
      sx={{ marginLeft: "3.5rem", marginTop: "1.5rem" }}
    >
        {
            topics.map((topic,index) => (
                <MuiCustomAccordion key={topic.topic_id} index={index} topic_name={topic.topic_name} materials={topic.materials}/>
            ))
        }
    </Grid>
  );
}

export default AccordionsContainer;
