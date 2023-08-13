import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { CardContent } from "@mui/material";
import RoleSelect from "../atoms/RoleSelect";
import UserStatusSelect from "../atoms/UserStatusSelect";

interface UserRegistrationFormProps {
  onClose: () => void;
}

const UserRegistrationForm: React.FC<UserRegistrationFormProps> = ({
  onClose,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    contactNo: "",
    status: "",
  });

  const handleInputChange = (e: { target: { id: any; value: any } }) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleRoleChange = (selectedRole: string) => {
    setFormData((prevData) => ({
      ...prevData,
      role: selectedRole,
    }));
  };

  const handleStatusChange = (selectedStatus: string) => {
    setFormData((prevData) => ({
      ...prevData,
      status: selectedStatus,
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
      role: "",
      email: "",
      contactNo: "",
      status: "",
    });
    // navigate("/carwash-list");
    onClose();
  };
  return (
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
        <Typography variant="h4">User Registration Form</Typography>
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

          <RoleSelect
            onRoleChange={handleRoleChange}
            selectedRole={formData.role}
          />

          <TextField
            required
            id="email"
            label="Email"
            placeholder="Enter Email address"
            variant="standard"
            value={formData.email}
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

          <UserStatusSelect
            onStatusChange={handleStatusChange}
            selectedStatus={formData.status}
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
  );
};

export default UserRegistrationForm;
