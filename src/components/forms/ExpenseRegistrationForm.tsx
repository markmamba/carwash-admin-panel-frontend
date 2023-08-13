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
import ExpenseCategorySelect from "../atoms/ExpenseCategorySelect";

interface ExpenseRegistrationFormProps {
  onClose: () => void;
}

const ExpenseRegistrationForm: React.FC<ExpenseRegistrationFormProps> = ({
  onClose,
}) => {
  const [formData, setFormData] = useState({
    date: "",
    category: "",
    details: "",
    amount: "",
    remarks: "",
  });

  const handleInputChange = (e: { target: { id: any; value: any } }) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleDateChange = (date: any) => {
    setFormData((prevData) => ({
      ...prevData,
      date: date,
    }));
  };

  const handleCategoryChange = (selectedCategory: string) => {
    setFormData((prevData) => ({
      ...prevData,
      category: selectedCategory,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Perform form submission logic, such as sending the data to a server
    console.log(formData);
    // Reset the form after submission
    setFormData({
      date: "",
      category: "",
      details: "",
      amount: "",
      remarks: "",
    });
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
          <Typography variant="h4">Expense Registration Form</Typography>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              marginTop: "3%",
            }}
          >
            <DatePicker
              label="Date"
              value={formData.date || null}
              onChange={handleDateChange}
            />
            <ExpenseCategorySelect
              onCategoryChange={handleCategoryChange}
              selectedCategory={formData.category}
            />
            <TextField
              required
              id="details"
              label="Details"
              placeholder="Enter Expense Details"
              variant="standard"
              value={formData.details}
              onChange={handleInputChange}
            />
            <TextField
              required
              id="amount"
              label="Amount"
              name="amount"
              placeholder="Enter Amount"
              variant="standard"
              value={formData.amount}
              onChange={handleInputChange}
              inputProps={{
                pattern: "[0-9]*", // Only accept numeric values
              }}
            />
            <TextField
              sx={{
                width: "100%",
              }}
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
    </LocalizationProvider>
  );
};

export default ExpenseRegistrationForm;
