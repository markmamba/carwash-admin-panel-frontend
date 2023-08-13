import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

type ServiceSelectProps = {
  onServiceChange: (selectedService: string) => void;
  selectedService: string;
};

export default function ServiceSelect(props: ServiceSelectProps) {
  const { onServiceChange } = props;
  const [service, setService] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedStaff = event.target.value as string;
    setService(selectedStaff);
    onServiceChange(selectedStaff);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Service</InputLabel>
      <Select
        required
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={service}
        label="Service"
        placeholder="Select service"
        variant="standard"
        onChange={handleChange}
      >
        <MenuItem value="carwash">Carwash</MenuItem>
        <MenuItem value="seatcover">Seat Cover Removal</MenuItem>
        <MenuItem value="engine">Engine Wash</MenuItem>
      </Select>
    </FormControl>
  );
}
