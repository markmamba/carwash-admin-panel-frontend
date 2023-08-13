import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CarwashRegistrationForm from "../forms/CarwashRegistrationForm";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

interface CarwashRegistrationModalProps {
  open: boolean;
  onClose: () => void;
}

const CarwashRegistrationModal: React.FC<CarwashRegistrationModalProps> = ({
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
      <DialogTitle>Carwash Registration</DialogTitle>
      <DialogContent>
        <CarwashRegistrationForm onClose={onClose} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CarwashRegistrationModal;
