import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

type UserStatusSelectProps = {
  onStatusChange: (selectedStatus: string) => void;
  selectedStatus: string;
};

export default function UserStatusSelect(props: UserStatusSelectProps) {
  const { onStatusChange } = props;
  const [status, setStatus] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedStatus = event.target.value as string;
    setStatus(selectedStatus);
    onStatusChange(selectedStatus);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="statusSelect">Status</InputLabel>
      <Select
        required
        labelId="statusSelect"
        id="statusSelect"
        value={status}
        label="Status"
        placeholder="Select status"
        variant="standard"
        onChange={handleChange}
      >
        <MenuItem value="registered">Registered</MenuItem>
        <MenuItem value="pending">Pending</MenuItem>
        <MenuItem value="deleted">Deleted</MenuItem>
      </Select>
    </FormControl>
  );
}
