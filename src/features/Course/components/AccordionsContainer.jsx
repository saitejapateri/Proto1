import React,{useState} from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import MuiCustomAccordion from "../../../components/common/MuiCustomAccordion";

function AccordionsContainer({ topics, selectedTopic }) {
  const selectedUnit = useSelector((state) => state.unit.selectedUnitId);

  const [expandedAccordion,setExpandedAccordion] = useState(0);

  //handling accordion change
  const handleAccordionChange = (accordionIndex) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? accordionIndex : null);
  };


  //filtering topics based on the search value
  const filteredTopics = topics.filter((topic) =>
    topic.topic_name.toLowerCase().includes(selectedTopic.toLowerCase())
  );

  return (
    <Grid item md={4} sx={{ marginLeft: "3.5rem", marginTop: "1.5rem" }}>
      {filteredTopics.map((topic, index) => (
        <MuiCustomAccordion
          key={topic.topic_id}
          index={index}
          topic_name={topic.topic_name}
          materials={topic.materials}
          expanded={expandedAccordion === index}
          onChange = {handleAccordionChange(index)}
        />
      ))}
    </Grid>
  );
}

export default AccordionsContainer;
