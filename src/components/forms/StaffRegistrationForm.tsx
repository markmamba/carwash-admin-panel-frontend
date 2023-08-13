import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { CardContent } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface StaffRegistrationFormProps {
  onClose: () => void;
}

const StaffRegistrationForm: React.FC<StaffRegistrationFormProps> = ({
  onClose,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNo: "",
    birthDate: null,
    notes: "",
  });
  //   const [selectedBirthDate, setSelectedBirthDate] = useState(null);

  const handleInputChange = (e: { target: { id: any; value: any } }) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  // const blue = {
  //   100: "#DAECFF",
  //   200: "#b6daff",
  //   400: "#3399FF",
  //   500: "#007FFF",
  //   600: "#0072E5",
  //   900: "#003A75",
  // };

  // const grey = {
  //   50: "#f6f8fa",
  //   100: "#eaeef2",
  //   200: "#d0d7de",
  //   300: "#afb8c1",
  //   400: "#8c959f",
  //   500: "#6e7781",
  //   600: "#57606a",
  //   700: "#424a53",
  //   800: "#32383f",
  //   900: "#24292f",
  // };

  // const StyledTextarea = styled(TextareaAutosize)(
  //   ({ theme }) => `
  //   width: 320px;
  //   font-family: IBM Plex Sans, sans-serif;
  //   font-size: 0.875rem;
  //   font-weight: 400;
  //   line-height: 1.5;
  //   padding: 12px;
  //   border-radius: 12px 12px 0 12px;
  //   color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  //   background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  //   border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  //   box-shadow: 0px 2px 2px ${
  //     theme.palette.mode === "dark" ? grey[900] : grey[50]
  //   };

  //   &:hover {
  //     border-color: ${blue[400]};
  //   }

  //   &:focus {
  //     border-color: ${blue[400]};
  //     box-shadow: 0 0 0 3px ${
  //       theme.palette.mode === "dark" ? blue[500] : blue[200]
  //     };
  //   }

  //   // firefox
  //   &:focus-visible {
  //     outline: 0;
  //   }
  // `
  // );

  const handleBirthDateChange = (date: any) => {
    setFormData((prevData) => ({
      ...prevData,
      birthDate: date,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Perform form submission logic, such as sending the data to a server
    console.log(formData);
    // Reset the form after submission
    setFormData({
      firstName: "",
      lastName: "",
      contactNo: "",
      birthDate: null,
      notes: "",
    });
    // navigate("/carwash-list");
    onClose();
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          backgroundColor: "#F1F6F9",
        }}
      >
        <Card sx={{ width: "40%", padding: "3%", margin: "5% auto" }}>
          <Typography variant="h4">Staff Registration Form</Typography>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              marginTop: "3%",
            }}
          >
            <TextField
              required
              id="firstName"
              label="Firstname"
              placeholder="Enter Firstname"
              variant="standard"
              value={formData.firstName}
              onChange={handleInputChange}
            />

            <TextField
              required
              id="lastName"
              label="Lastname"
              placeholder="Enter Lastname"
              variant="standard"
              value={formData.lastName}
              onChange={handleInputChange}
            />

            <TextField
              required
              id="contactNo"
              label="Contact No."
              name="contactNo"
              placeholder="Enter Contact No."
              variant="standard"
              value={formData.contactNo}
              onChange={handleInputChange}
              inputProps={{
                pattern: "[0-9]*", // Only accept numeric values
              }}
            />
            <DatePicker
              label="Birth Date"
              value={formData.birthDate || null}
              onChange={handleBirthDateChange}
            />
            <TextField
              sx={{
                width: "100%",
              }}
              aria-label="Notes"
              minRows={4}
              placeholder="Enter comments or notes"
              value={formData.notes}
              onChange={handleInputChange}
            />

            <Button
              variant="contained"
              sx={{ height: "auto", width: "30%", alignSelf: "center" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </Box>
    </LocalizationProvider>
  );
};

export default StaffRegistrationForm;
