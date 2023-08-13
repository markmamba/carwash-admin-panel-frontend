import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

type RoleSelectProps = {
  onRoleChange: (selectedRole: string) => void;
  selectedRole: string;
};

export default function RoleSelect(props: RoleSelectProps) {
  const { onRoleChange } = props;
  const [role, setRole] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedRole = event.target.value as string;
    setRole(selectedRole);
    onRoleChange(selectedRole);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="roleSelect">Role</InputLabel>
      <Select
        required
        labelId="roleSelect"
        id="roleSelect"
        value={role}
        label="Role"
        placeholder="Select role"
        variant="standard"
        onChange={handleChange}
      >
        <MenuItem value="superadmin">SuperAdmin</MenuItem>
        <MenuItem value="admin">Admin</MenuItem>
        <MenuItem value="viewer">Viewer</MenuItem>
      </Select>
    </FormControl>
  );
}
