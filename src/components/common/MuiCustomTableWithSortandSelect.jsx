import React, { useEffect, createRef, useState } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  Paper,
  Skeleton,
  Stack,
  Pagination,
  Typography,
  Box,
} from "@mui/material";
import MuiCustomTableHeaderRowWithSortandSelect from "./MuiCustomTableHeaderRowWithSortandSelect";
import MuiCustomStudentTableRow from "./MuiCustomStudentTableRow";
import palette from "../../theme/palette";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AssessmentErrorPage from "../../features/Course/components/AssessmentErrorPage";

const HeaderArr = [
  { label: "Subject", isSortable: false, isSelectable: false },
  { label: "Time Spent", isSortable: false, isSelectable: false },
  { label: "Submission Type", isSortable: false, isSelectable: false },
  { label: "Internet Speed", isSortable: false, isSelectable: false },
  { label: "Mark", isSortable: true, isSelectable: false },
  { label: "Status", isSortable: false, isSelectable: false },
];

const MuiCustomTableWithSortandSelect = (props) => {
  const {
    // HeaderArr,
    // tableData,
    assessments,
    status,
    viewStudentResult,
    sortHandler,
    selectHandler,
    loading_reportData,
    currentPageforTablepaginaton,
    // tablePaginationHandler,
    filtered_studentAssessmentList,
    submissionTypesToShowinStudentTable,
  } = props;

  const [startingIndex, setStartingIndex] = useState(0);
  const [semester, setSemester] = useState(1);

  //filtering assessment data based on selected semester
  const filteredAssessments = assessments?.filter(
    (assessment) => assessment.semester === semester
  );

  //handling Semester
  const handleSemester = (arrow) => {
    if (arrow === "right" && semester < 3) {
      setSemester((prevState) => prevState + 1);
    } else if (arrow === "left" && semester != 1) {
      setSemester((prevState) => prevState - 1);
    }
  };

  const tablePaginationHandler = (event, value) => {
    console.log(value);
    setStartingIndex((value - 1) * 8);
  };

  return (
    <>
      <Paper
        sx={{
          boxShadow: "none",
          // marginTop: "1.5rem",
          // height: "535px",
          padding: "0.875rem",
        }}
      >
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography variant="h5">Assessments</Typography>
          <Stack
            direction="row"
            alignItems={"normal"}
            sx={{ cursor: "pointer" }}
          >
            <KeyboardArrowLeftIcon onClick={() => handleSemester("left")} />
            <Typography variant="button" sx={{ fontWeight: "400" }}>
              Semester 0{semester}{" "}
            </Typography>
            <KeyboardArrowRightIcon onClick={() => handleSemester("right")} />
          </Stack>
        </Stack>
        {status === 200 ? (
          <>
            <Table
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                margin: "0px",
                padding: "0px",
                width: "100%",
              }}
              aria-label="sticky table"
            >
              <TableHead
                sx={{
                  // position: "",
                  // top: "162px",
                  zIndex: 100,
                  // background: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <MuiCustomTableHeaderRowWithSortandSelect
                  headerArray={HeaderArr}
                  sortHandler={sortHandler}
                  selectHandler={selectHandler}
                />
              </TableHead>
              <TableBody
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                {filteredAssessments
                  ?.slice(startingIndex, startingIndex + 8)
                  .map((stu, i) => (
                    <MuiCustomStudentTableRow
                      key={i}
                      stu={stu}
                      viewStudentResult={viewStudentResult}
                    />
                  ))}
              </TableBody>
            </Table>{" "}
          </>
        ) : (
          <AssessmentErrorPage />
        )}
      </Paper>

      {status === 200 && (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          // sx={{ marginTop: "1rem" }}
        >
          <Pagination
            count={Math.ceil(filteredAssessments?.length / 8)}
            page={currentPageforTablepaginaton}
            onChange={tablePaginationHandler}
            color="primary"
            sx={{ fontFamily: "Poppins", fontWeight: "300", fontSize: "12px" }}
          />
        </Stack>
      )}
    </>
  );
};

export default MuiCustomTableWithSortandSelect;
