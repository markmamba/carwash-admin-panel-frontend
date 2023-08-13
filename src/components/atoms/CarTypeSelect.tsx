import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";

type CarTypeSelectProps = {
  onCarTypeChange: (selectedCarType: string) => void;
  selectedCarType: string; // Add this line
};

export default function CarTypeSelect(props: CarTypeSelectProps) {
  const { onCarTypeChange } = props;
  const [carType, setCarType] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedCarType = event.target.value as string;
    setCarType(selectedCarType);
    onCarTypeChange(selectedCarType);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="carType">Car Type</InputLabel>
      <Select
        required
        labelId="carType"
        id="carType"
        value={carType}
        label="Car Type"
        placeholder="Select vehicle"
        variant="standard"
        onChange={handleChange}
      >
        <MenuItem value="Car">Car</MenuItem>
        <MenuItem value="SUV">SUV</MenuItem>
        <MenuItem value="Jeepney">Jeepney</MenuItem>
        <MenuItem value="Van">Van</MenuItem>
        <MenuItem value="Motor">Motor</MenuItem>
        <MenuItem value="Bike">Bike</MenuItem>
        <MenuItem value="Aircon">Aircon</MenuItem>
        <MenuItem value="Others">Others</MenuItem>
      </Select>
    </FormControl>
  );
}
