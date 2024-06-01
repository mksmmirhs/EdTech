import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import getAxios from "../../utils/getAxios";
import SweetAlert from "../../utils/SweetAlert";

function CreateCourse() {
  // initial input format
  const inputFormat = {
    title: "",
    modules: [
      {
        id: 1,
        title: "",
        videoUrl: "",
      },
    ],
  };
  //   input state
  const [inputs, setInputs] = useState(inputFormat);

  // form module change
  const handleFormChange = (index, event) => {
    const { name, value } = event.target;
    setInputs((prevState) => {
      const modules = [...prevState.modules];
      modules[index] = { ...modules[index], [name]: value };
      return { ...prevState, modules };
    });
  };
  // add new module to form
  const handleAddModule = () => {
    setInputs((prevState) => ({
      ...prevState,
      modules: [
        ...prevState.modules,
        { id: prevState.modules.length + 1, title: "", videoUrl: "" },
      ],
    }));
  };
  // remove module from ui
  const handleRemoveModule = (index) => {
    setInputs((prevState) => {
      const modules = prevState.modules.filter((_, i) => i !== index);
      return { ...prevState, modules };
    });
  };

  //   form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // send data to backend
    getAxios
      .post("createcourse", inputs)
      .then((res) => {
        SweetAlert("Course saved", "success");
      })
      .catch((err) => {
        SweetAlert(err, "error");
      });
  };

  return (
    <Container sx={{ mt: { xs: 4, md: 16 }, boxShadow: 3, p: 4 }}>
      <Typography sx={{ mb: 2 }}>Create Course </Typography>
      <Box component="form" onSubmit={handleFormSubmit}>
        <Stack spacing={2}>
          <TextField
            required
            id="outlined-required"
            label="Title"
            name="title"
            value={inputs.title}
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
            sx={{ width: { xs: "100%" } }}
          />
          {/* module fields */}
          {inputs.modules.map((input, index) => {
            return (
              <Stack spacing={1} direction={"row"} key={index}>
                <Box flex={4}>
                  <Typography sx={{ mb: 2 }}>{`Module ${
                    index + 1
                  }`}</Typography>
                  <TextField
                    required
                    id="outlined-required"
                    label="Module Title"
                    name="title"
                    value={input.title}
                    sx={{ width: { xs: "100%" }, mb: 1 }}
                    onChange={(event) => handleFormChange(index, event)}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Video Url"
                    name="videoUrl"
                    value={input.videoUrl}
                    sx={{ width: { xs: "100%" } }}
                    onChange={(event) => handleFormChange(index, event)}
                  />
                </Box>
                {inputs.modules.length > 1 ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => handleRemoveModule(index)}
                    >
                      Remove
                    </Button>
                  </Box>
                ) : (
                  ""
                )}
              </Stack>
            );
          })}
          <Box>
            <Button variant="outlined" onClick={handleAddModule}>
              Add module
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

export default CreateCourse;
