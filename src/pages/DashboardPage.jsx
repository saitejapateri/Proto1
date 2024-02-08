import React, { useEffect, useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import palette from "../theme/palette";
import { Grid, Box, Typography } from "@mui/material";
import MuiCustomAssessmentDetailsSkeleton from "../components/common/MuiCustomAssessmentDetailsSkeleton";
import AssessmentDetailCard from "../components/common/AssessmentDetailCard";
import RecentAssessmentSkeleton from "../components/common/RecentAssessmentSkeleton";
import RecentAssessments from "../features/Dashboard/common/RecentAssessments/RecentAssessments";
import MuiCustomAssessmentSkeleton from "../components/common/MuiCustomAssessmentSkeleton";
import MuiCustomTableWithSortandSelect from "../components/common/MuiCustomTableWithSortandSelect";
import MuiCustomProfileCard from "../components/common/MuiCustomProfileCard";
import ReactCalendarComp from "../features/Dashboard/common/ReactCalendarComp";
import LeaderBoardCard from "../components/common/LeaderBoardCard";
import MuiLeaderboardDrawar from "../components/common/MuiLeaderboardDrawar";
import Courses from "../features/Dashboard/common/Courses.jsx";
import ReactErrorBoundary from "../components/common/ReactErrorBoundary";
import ErrorPage from "../components/common/ErrorPage";
import { profileActions } from "../store";

function DashboardPage() {
  const [data, setData] = useState({});
  const [assessmentData, setAssessmentData] = useState({});
  const [drawerState, setDrawarState] = useState(false);
  const dispatch = useDispatch();

  //handling leaderboardDrawar component
  const handleDrawar = () => {
    setDrawarState((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dashboardResponse, assessmentsResponse] = await Promise.all([
          fetch(
            "https://stagingstudentpython.edwisely.com/reactProject/dashboardData"
          ),
          fetch(
            "https://stagingstudentpython.edwisely.com/reactProject/assessments"
          ),
        ]);

        const dashboardData = await dashboardResponse.json();
        const assessmentsDetails = await assessmentsResponse.json();

        setData(dashboardData);
        setAssessmentData(assessmentsDetails);
        setAssessments(assessmentsDetails.assessments);

        dispatch(
          profileActions.updateProfile({
            name: dashboardData.name,
            email: dashboardData.email,
            profileImg: dashboardData.profile_picture,
          })
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  const analyticsData = data.analytics;

  const [assessments, setAssessments] = useState(
    assessmentData.assessments || []
  );

  const sortHandler = (order, index) => {
    const sortedAssessmentsData = [...assessments];
    sortedAssessmentsData.sort((a, b) => {
      return order === "asc"
        ? a.percentage_scored - b.percentage_scored
        : b.percentage_scored - a.percentage_scored;
    });
    setAssessments(sortedAssessmentsData);
  };

  return (
    <>
      <Typography
        variant="h6"
        sx={{
          marginLeft: "18px",
          marginTop: "12px",
          marginBottom: "20px",
        }}
      >
        Dashboard
      </Typography>
      <Grid container>
        <Grid
          item
          xs
          sx={{
            marginLeft: "14px",
            display: "flex",
            gap: "24px",
            marginBottom: "28px",
            flexWrap: "wrap",
          }}
        >
          {!analyticsData ? (
            <MuiCustomAssessmentDetailsSkeleton />
          ) : (
            <>
              {Object.keys(analyticsData).map((analytics, index) => (
                <AssessmentDetailCard
                  key={index}
                  title={index}
                  icon={index}
                  iconBgColor={index}
                  contentMagnitude={analyticsData[analytics]}
                />
              ))}
            </>
          )}
        </Grid>

        {/*recent_assessment && assessments grid */}
        <Grid
          container
          item
          direction="row"
          sx={{ gap: "22px", marginLeft: "20px" }}
        >
          {/* left grid */}
          <Grid
            container
            item
            md={8.37}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Grid
              item
              md
              sx={{
                border: `1px solid ${palette.grey[100]}`,
                borderRadius: "10px",
                height: "352px",
                marginBottom: "1.31rem",
              }}
            >
              {!data ? (
                <RecentAssessmentSkeleton />
              ) : (
                <RecentAssessments
                  recent_assessments={data.recent_assessments}
                />
              )}
            </Grid>
            <Grid
              item
              md
              sx={{
                height: "535px",
                border: `1px solid ${palette.grey[100]}`,
                borderRadius: "10px",
              }}
            >
              {assessments === [] ? (
                <MuiCustomAssessmentSkeleton />
              ) : (
                <>
                  <ReactErrorBoundary error={<ErrorPage />}>
                    <MuiCustomTableWithSortandSelect
                      assessments={assessments}
                      sortHandler={sortHandler}
                      status={assessmentData.status}
                    />
                  </ReactErrorBoundary>
                </>
              )}
            </Grid>
          </Grid>

          {/* right grid */}
          <Grid
            container
            item
            md={2.99}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Grid md item sx={{ marginBottom: "30px" }}>
              <MuiCustomProfileCard
                name={data.name}
                profilePic={data.profile_picture}
                email={data.email}
              />
            </Grid>
            <Grid md item sx={{ marginBottom: "30px" }}>
              <ReactCalendarComp />
            </Grid>
            <Grid md item>
              <LeaderBoardCard data={data.leaderboard} onClick={handleDrawar} />
            </Grid>
          </Grid>
        </Grid>

        {/* course grid */}
        <Grid
          item
          md
          sx={{
            marginLeft: "1.25rem",
            marginTop: "1.25rem",
            marginBottom: "55px",
          }}
        >
          <Courses courses={data.courses} />
        </Grid>

        <MuiLeaderboardDrawar
          data={data.leaderboard}
          open={drawerState}
          onClose={handleDrawar}
        />
      </Grid>
    </>
  );
}

export default DashboardPage;
