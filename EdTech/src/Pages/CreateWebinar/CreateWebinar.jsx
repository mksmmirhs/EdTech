import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import SweetAlert from "../../utils/SweetAlert";
import convertToISODate from "../../utils/convertToISODate";
import getAxios from "../../utils/getAxios";

function CreateWebinar() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const title = data.get("title");
    const date1 = convertToISODate(data.get("day1"));
    const date2 = convertToISODate(data.get("day2"));
    const date3 = convertToISODate(data.get("day3"));
    // show message if password is not provided
    if (!date1 || !date2 || !date3) {
      SweetAlert("Please provide all the time slots", "error");
      return;
    }
    const payload = {
      title,
      slots: [date1, date2, date3],
      status: "pending",
    };
    // send data to backend
    getAxios
      .post("createwebinar", payload)
      .then((res) => {
        SweetAlert("Webinar saved", "success");
      })
      .catch((err) => {
        SweetAlert(err, "error");
      });
  };
  return (
    <Container sx={{ mt: { xs: 4, md: 16 }, boxShadow: 3, p: 4 }}>
      <Typography sx={{ mb: 2 }}>Create Webinar </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            required
            id="outlined-required"
            label="Title"
            name="title"
            sx={{ width: { xs: "100%" } }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker label="Slot 1" name="day1" />
            </DemoContainer>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker label="Slot 2" name="day2" />
            </DemoContainer>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker label="Slot 3" name="day3" />
            </DemoContainer>
          </LocalizationProvider>
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

export default CreateWebinar;
