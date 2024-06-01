import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import getAxios from "../../utils/getAxios";
import { AuthContext } from "../../AuthContext/AuthProvider";
import SweetAlert from "../../utils/SweetAlert";

function CreateAssessment() {
  const { setLoading } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const initialData = {
    courseId: 1,
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        correctOption: 1,
      },
    ],
  };
  const [inputs, setInputs] = useState(initialData);
  // get all coursed
  useEffect(() => {
    setLoading(true);
    // Fetch course data from API
    getAxios
      .get("courses")
      .then((response) => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching courses:", error);
      });
  }, []);

  // Handle course selection change
  const handleCourseChange = (event) => {
    const courseId = event.target.value;
    setSelectedCourseId(courseId);
    setInputs((prevState) => ({
      ...prevState,
      courseId: courseId,
    }));
  };
  // question form change
  const handleQuestionChange = (index, event) => {
    const { name, value } = event.target;
    setInputs((prevState) => {
      const questions = [...prevState.questions];
      questions[index] = { ...questions[index], [name]: value };
      return { ...prevState, questions };
    });
  };

  // option change
  const handleOptionChange = (qIndex, oIndex, event) => {
    const { value } = event.target;
    setInputs((prevState) => {
      const questions = [...prevState.questions];
      questions[qIndex].options[oIndex] = value;
      return { ...prevState, questions };
    });
  };

  // correct option change
  const handleCorrectOptionChange = (qIndex, event) => {
    const { value } = event.target;
    setInputs((prevState) => {
      const questions = [...prevState.questions];
      questions[qIndex].correctOption = value;
      return { ...prevState, questions };
    });
  };

  const handleAddQuestion = () => {
    setInputs((prevState) => ({
      ...prevState,
      questions: [
        ...prevState.questions,
        {
          id: prevState.questions.length + 1,
          question: "",
          options: ["", "", "", ""],
          correctOption: 1,
        },
      ],
    }));
  };

  const handleRemoveQuestion = (index) => {
    setInputs((prevState) => {
      const questions = prevState.questions.filter((_, i) => i !== index);
      return { ...prevState, questions };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    getAxios
      .post("createassessments", inputs)
      .then((res) => {
        SweetAlert("Assessment saved", "success");
        setInputs(initialData);
      })
      .catch((err) => {
        SweetAlert(err, "error");
      });
  };

  return (
    <Container sx={{ mt: { xs: 4, md: 8 }, boxShadow: 3, p: 4 }}>
      <Typography sx={{ mb: 2 }}>Create MCQ</Typography>
      <Box component="form" onSubmit={handleFormSubmit}>
        <Stack spacing={2}>
          {/* dynamic course select */}
          <FormControl fullWidth>
            <InputLabel id="course-select-label">Course</InputLabel>
            <Select
              labelId="course-select-label"
              value={selectedCourseId}
              label="Course"
              onChange={handleCourseChange}
            >
              {courses.map((course) => (
                <MenuItem key={course.id} value={course.id}>
                  {course.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* question fields */}
          {inputs.questions.map((question, qIndex) => (
            <Stack spacing={2} key={qIndex} sx={{ mt: 4 }}>
              <Typography sx={{ mb: 2 }}>{`Question ${
                qIndex + 1
              }:`}</Typography>
              <TextField
                required
                label="Question"
                name="question"
                value={question.question}
                onChange={(event) => handleQuestionChange(qIndex, event)}
                sx={{ width: { xs: "100%" } }}
              />
              {question.options.map((option, oIndex) => (
                <TextField
                  required
                  key={oIndex}
                  label={`Option ${oIndex + 1}`}
                  name={`option${oIndex}`}
                  value={option}
                  onChange={(event) =>
                    handleOptionChange(qIndex, oIndex, event)
                  }
                  sx={{ width: { xs: "100%" } }}
                />
              ))}
              <FormControl fullWidth>
                <InputLabel id={`correct-option-label-${qIndex}`}>
                  Correct Option
                </InputLabel>
                <Select
                  labelId={`correct-option-label-${qIndex}`}
                  value={question.correctOption}
                  label="Correct Option"
                  onChange={(event) => handleCorrectOptionChange(qIndex, event)}
                >
                  {question.options.map((option, oIndex) => (
                    <MenuItem key={oIndex} value={oIndex + 1}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                variant="outlined"
                onClick={() => handleRemoveQuestion(qIndex)}
              >
                Remove Question
              </Button>
            </Stack>
          ))}
          <Box>
            <Button variant="outlined" onClick={handleAddQuestion}>
              Add Question
            </Button>
          </Box>

          <Box flex={1}>
            <Button type="submit" sx={{ width: "25%" }} variant="contained">
              Submit
            </Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default CreateAssessment;
