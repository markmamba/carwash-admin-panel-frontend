import Button from "@mui/material/Button";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import * as React from "react";
import { useState } from "react";
import StaffRegistrationModal from "../components/modals/StaffRegistrationModal";
import ReportSearchBar from "../components/molecules/ReportSearchBar";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  contactNo: string;
  status: string;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First Name", flex: 1 },
  { field: "lastName", headerName: "Last Name", flex: 1 },
  { field: "role", headerName: "Role", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "contactNo", headerName: "Contact No.", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    renderCell: (params) => {
      const user = params.row;
      if (user.status === "Registered" && user.role === "Admin") {
        return (
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete(user)}
          >
            Delete
          </Button>
        );
      } else if (user.status === "Pending") {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleAccept(user)}
          >
            Accept
          </Button>
        );
      } else {
        return null; // Return nothing for other cases
      }
    },
  },
];

const rows = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    role: "SuperAdmin",
    email: "jdoe@gmail.com",
    contactNo: "09089567895",
    status: "Registered",
  },
  {
    id: 2,
    firstName: "Johnny",
    lastName: "Doe",
    role: "Admin",
    email: "jnydoe@gmail.com",
    contactNo: "09089567896",
    status: "Registered",
  },
  {
    id: 3,
    firstName: "Johnson",
    lastName: "Doe",
    role: "Admin",
    email: "jsondoe@gmail.com",
    contactNo: "09089567896",
    status: "Pending",
  },
];

const handleDelete = (userToDelete: User) => {
  // Filter out the user to be deleted
  // const updatedRows = userRows.filter((user) => user.id !== userToDelete.id);
  // setUserRows(updatedRows);
};

const handleAccept = (userToAccept: User) => {
  // Update the status of the user to "Accepted"
  // const updatedRows = userRows.map((user) =>
  //   user.id === userToAccept.id ? { ...user, status: "Accepted" } : user
  // );
  // setUserRows(updatedRows);
};

export default function User() {
  const [openModal, setOpenModal] = useState(false);
  const [userRows, setUserRows] = useState(rows);
  const [searchData, setSearchData] = useState<{
    date: Date | null;
    query: string;
  } | null>(null);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSearch = (data: { date: Date | null; query: string }) => {
    setSearchData(data);
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
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ReportSearchBar onSearch={handleSearch} showDatePicker={false} />
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenModal}
            >
              Add User
            </Button>
          </div>
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
