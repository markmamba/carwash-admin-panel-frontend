import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { CardContent } from "@mui/material";
import CarTypeSelect from "../atoms/CarTypeSelect";

interface ServiceRegistrationFormProps {
  onClose: () => void;
}

const ServiceRegistrationForm: React.FC<ServiceRegistrationFormProps> = ({
  onClose,
}) => {
  const [formData, setFormData] = useState({
    serviceName: "",
    carType: "",
    price: "",
    details: "",
    remarks: "",
  });

  const handleInputChange = (e: { target: { id: any; value: any } }) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleCarTypeChange = (selectedCarType: string) => {
    setFormData((prevData) => ({
      ...prevData,
      carType: selectedCarType,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Perform form submission logic, such as sending the data to a server
    console.log(formData);
    // Reset the form after submission
    setFormData({
      serviceName: "",
      carType: "",
      price: "",
      details: "",
      remarks: "",
    });
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
        <Typography variant="h4">Service Registration Form</Typography>
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
            id="serviceName"
            label="Service"
            placeholder="Enter Service"
            variant="standard"
            value={formData.serviceName}
            onChange={handleInputChange}
          />
          <CarTypeSelect
            onCarTypeChange={handleCarTypeChange}
            selectedCarType={formData.carType}
          />
          <TextField
            required
            id="price"
            label="Price"
            placeholder="Enter Service Price"
            variant="standard"
            value={formData.price}
            onChange={handleInputChange}
            inputProps={{
              pattern: "[0-9]*", // Only accept numeric values
            }}
          />
          <TextField
            sx={{
              width: "100%",
            }}
            id="details"
            aria-label="Details"
            minRows={4}
            placeholder="Enter Service Details"
            value={formData.details}
            onChange={handleInputChange}
          />

          <TextField
            sx={{
              width: "100%",
            }}
            id="remarks"
            aria-label="Remarks"
            minRows={4}
            placeholder="Enter comments or notes"
            value={formData.remarks}
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
  );
};

export default ServiceRegistrationForm;
