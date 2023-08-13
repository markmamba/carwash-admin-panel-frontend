import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

type ExpenseCategorySelectProps = {
  onCategoryChange: (selectedCategory: string) => void;
  selectedCategory: string;
};

export default function StaffSelect(props: ExpenseCategorySelectProps) {
  const { onCategoryChange } = props;
  const [category, setCategory] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedCategory = event.target.value as string;
    setCategory(selectedCategory);
    onCategoryChange(selectedCategory);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Expense Category</InputLabel>
      <Select
        required
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
        label="Staff"
        placeholder="Select staff"
        variant="standard"
        onChange={handleChange}
      >
        <MenuItem value="Rio">Salary and Wages</MenuItem>
        <MenuItem value="JC">Rent</MenuItem>
        <MenuItem value="JR">Utilities</MenuItem>
        <MenuItem value="JR">Supplies</MenuItem>
        <MenuItem value="JR">Insurance</MenuItem>
        <MenuItem value="JR">Equipment</MenuItem>
        <MenuItem value="JR">Internet and Communication</MenuItem>
        <MenuItem value="JR">Transportation</MenuItem>
      </Select>
    </FormControl>
  );
}
