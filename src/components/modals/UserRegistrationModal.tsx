import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import UserRegistrationForm from "../forms/UserRegistrationForm";

interface UserRegistrationModalProps {
  open: boolean;
  onClose: () => void;
}

const UserRegistrationModal: React.FC<UserRegistrationModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullWidth
      sx={{
        "& .MuiDialog-paperWidthFalse": {
          maxWidth: "70%",
        },
      }}
    >
      <DialogTitle>User Registration</DialogTitle>
      <DialogContent>
        <UserRegistrationForm onClose={onClose} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserRegistrationModal;
