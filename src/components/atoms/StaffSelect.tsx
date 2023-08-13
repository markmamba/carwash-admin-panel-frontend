import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

type StaffSelectProps = {
  onStaffChange: (selectedStaff: string) => void;
  selectedStaff: string;
};

export default function StaffSelect(props: StaffSelectProps) {
  const { onStaffChange } = props;
  const [staff, setStaff] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedStaff = event.target.value as string;
    setStaff(selectedStaff);
    onStaffChange(selectedStaff);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Staff</InputLabel>
      <Select
        required
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={staff}
        label="Staff"
        placeholder="Select staff"
        variant="standard"
        onChange={handleChange}
      >
        <MenuItem value="Rio">Rio Vidal</MenuItem>
        <MenuItem value="JC">Jeycie Cornel</MenuItem>
        <MenuItem value="JR">JR Soria</MenuItem>
      </Select>
    </FormControl>
  );
}
