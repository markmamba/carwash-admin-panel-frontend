import Button from "@mui/material/Button";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import * as React from "react";
import { useState } from "react";
import StaffRegistrationModal from "../components/modals/StaffRegistrationModal";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First Name", flex: 1 },
  { field: "lastName", headerName: "Last Name", flex: 1 },
  { field: "contactNo", headerName: "Contact No.", flex: 1 },
  { field: "birthDate", headerName: "Birth Date", flex: 1 },
  { field: "notes", headerName: "Notes", flex: 1 },
];

const rows = [
  {
    id: 1,
    firstName: "Jebby",
    lastName: "Doe",
    contactNo: "09089567895",
    birthDate: "2023-01-05",
    notes: "Note yet paid 2023-07-06",
  },
  {
    id: 2,
    firstName: "Jeb",
    lastName: "Doe",
    contactNo: "09089567896",
    birthDate: "2023-01-06",
    notes: "Note yet paid 2023-07-07",
  },
  {
    id: 3,
    firstName: "Jay-r",
    lastName: "Doey",
    contactNo: "09089567896",
    birthDate: "2023-01-07",
    notes: "Note yet paid 2023-07-08",
  },
];

export default function Staff() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "80%",
            margin: "5% auto auto auto",
          }}
        >
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Add Staff
          </Button>
          <div
            style={{
              width: "100%",
            }}
          >
            <StaffRegistrationModal
              open={openModal}
              onClose={handleCloseModal}
            />
          </div>
        </div>
        <div style={{ width: "100%", height: "100%", overflow: "auto" }}>
          <DataGrid
            sx={{
              margin: "1% 10%",
              height: "auto",
              minHeight: "60%",
              fontSize: "16px",
            }}
            rows={rows}
            autoHeight
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </div>
    </div>
  );
}
