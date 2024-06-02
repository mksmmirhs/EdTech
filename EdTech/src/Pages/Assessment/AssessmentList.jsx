import { useContext, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import Assessment from "./Assessment";
import { AuthContext } from "../../AuthContext/AuthProvider";

const AssessmentList = () => {
  const { assessments, courses } = useContext(AuthContext);
  const [selectedAssessment, setSelectedAssessment] = useState(null);

  const handleSelectAssessment = (assessment) => {
    setSelectedAssessment(assessment);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {selectedAssessment ? (
        <Assessment
          assessment={selectedAssessment}
          setSelectedAssessment={setSelectedAssessment}
        />
      ) : (
        <Grid container spacing={4}>
          {assessments.map((assessment) => (
            <Grid item key={assessment.id} xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5">
                    Assessment for{" "}
                    {courses.find((course) => course.id === assessment.courseId)
                      ?.title || "Unknown Course"}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleSelectAssessment(assessment)}
                  >
                    Take Assessment
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default AssessmentList;
