import { useState, useEffect } from "react";
import { Container, Button, Box } from "@mui/material";
import QuestionCard from "./QuestionCard";
import ResultModal from "./ResultModal";

const Assessment = ({ assessment, setSelectedAssessment }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // shuffle the question array every time
    const shuffledQuestions = [...assessment.questions].sort(
      () => Math.random() - 0.5
    );
    setQuestions(shuffledQuestions);
  }, [assessment]);

  const handleOptionSelect = (questionId, optionIndex) => {
    setSelectedOptions((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleFinishAssessment = () => {
    let calculatedScore = 0;
    questions.forEach((question) => {
      if (selectedOptions[question.id] === question.correctOption) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setShowResult(true);
  };

  // Reset the assessment state
  const resetAssessment = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions({});
    setShowResult(false);
    setScore(0);
    const shuffledQuestions = [...assessment.questions].sort(
      () => Math.random() - 0.5
    );
    setQuestions(shuffledQuestions);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {showResult ? (
        <ResultModal
          score={score}
          total={questions.length}
          onClose={resetAssessment}
          setSelectedAssessment={setSelectedAssessment}
        />
      ) : (
        <Box>
          {questions.length > 0 && (
            <QuestionCard
              question={questions[currentQuestionIndex]}
              onSelectOption={handleOptionSelect}
              selectedOption={
                selectedOptions[questions[currentQuestionIndex].id]
              }
            />
          )}
          <Box sx={{ mt: 4 }}>
            {currentQuestionIndex < questions.length - 1 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNextQuestion}
              >
                Next
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleFinishAssessment}
              >
                Finish Assessment
              </Button>
            )}
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Assessment;
