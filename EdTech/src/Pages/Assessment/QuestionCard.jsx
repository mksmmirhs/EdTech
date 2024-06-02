import {
  Card,
  CardContent,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const QuestionCard = ({ question, onSelectOption, selectedOption }) => {
  const handleChange = (event) => {
    onSelectOption(question.id, parseInt(event.target.value));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {question.question}
        </Typography>
        <RadioGroup
          value={selectedOption !== undefined ? selectedOption : ""}
          onChange={handleChange}
        >
          {question.options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={index}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
