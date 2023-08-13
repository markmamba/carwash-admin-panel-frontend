import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CarTypeSelect from "../atoms/CarTypeSelect";
import Staff from "../atoms/StaffSelect";
import ServiceSelect from "../atoms/ServiceSelect";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { CardContent } from "@mui/material";

interface CarwashRegistrationFormProps {
  onClose: () => void;
}

const CarwashRegistrationForm: React.FC<CarwashRegistrationFormProps> = ({
  onClose,
}) => {
  const [formData, setFormData] = useState({
    plateNumber: "",
    carType: "",
    carName: "",
    serviceType: "",
    staff: "",
    date: "",
    remarks: "",
  });

  const handleCarTypeChange = (selectedCarType: string) => {
    setFormData((prevData) => ({
      ...prevData,
      carType: selectedCarType,
    }));
  };

  const handleStaffChange = (selectedStaff: string) => {
    setFormData((prevData) => ({
      ...prevData,
      staff: selectedStaff,
    }));
  };

  const handleServiceChange = (selectedService: string) => {
    setFormData((prevData) => ({
      ...prevData,
      service: selectedService,
    }));
  };

  const handleInputChange = (e: { target: { id: any; value: any } }) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Perform form submission logic, such as sending the data to a server
    console.log(formData);
    // Reset the form after submission
    setFormData({
      plateNumber: "",
      carType: "",
      carName: "",
      serviceType: "",
      staff: "",
      date: "",
      remarks: "",
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
        <Typography variant="h4">Carwash Registration Form</Typography>
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
            id="plateNumber"
            label="Plate No."
            placeholder="Enter Plate Number"
            variant="standard"
            value={formData.plateNumber}
            onChange={handleInputChange}
          />
          <CarTypeSelect
            onCarTypeChange={handleCarTypeChange}
            selectedCarType={formData.carType}
          />
          <TextField
            required
            id="carName"
            label="Vehicle Type"
            placeholder="Enter Brand Name"
            variant="standard"
            value={formData.carName}
            onChange={handleInputChange}
          />
          <ServiceSelect
            onServiceChange={handleServiceChange}
            selectedService={formData.serviceType}
          />
          <Staff
            onStaffChange={handleStaffChange}
            selectedStaff={formData.staff}
          />
          <TextField
            required
            id="date"
            label="Date"
            name="date"
            placeholder="Enter Date"
            variant="standard"
            value={formData.date}
            onChange={handleInputChange}
          />
          <TextField
            id="remarks"
            label="Remarks"
            multiline
            rows={4}
            name="remarks"
            placeholder="Enter remarks"
            variant="filled"
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

export default CarwashRegistrationForm;
