import Button from "@mui/material/Button";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import * as React from "react";
import { useState } from "react";
import ExpenseRegistrationModal from "../components/modals/ExpenseRegistrationModal";
import ReportSearchBar from "../components/molecules/ReportSearchBar";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "date", headerName: "Date", flex: 1 },
  { field: "category", headerName: "Category", flex: 1 },
  { field: "details", headerName: "Details", flex: 1 },
  { field: "amount", headerName: "Amount", flex: 1 },
  { field: "remarks", headerName: "Remarks", flex: 1 },
];

const rows = [
  {
    id: 1,
    date: "2023-07-01",
    category: "Equipment",
    details: "Vacuum Repair",
    amount: 2000,
    remarks: "Paid to the repairman",
  },
  {
    id: 2,
    date: "2023-07-05",
    category: "Internet and Communication",
    details: "PLDT",
    amount: 2000,
    remarks: "July Internet",
  },
  {
    id: 3,
    date: "2023-07-22",
    category: "Rent",
    details: "Rent",
    amount: 2000,
    remarks: "Paid to the owner",
  },
];

export default function Expense() {
  const [openModal, setOpenModal] = useState(false);
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
            display: "flex", // Add flex display
            alignItems: "center", // Align items vertically in the same row
            justifyContent: "space-between", // Space between the button and the search bar
          }}
        >
          <ReportSearchBar onSearch={handleSearch} />
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Add Expense
          </Button>
        </div>
        <div style={{ width: "100%" }}>
          <ExpenseRegistrationModal
            open={openModal}
            onClose={handleCloseModal}
          />
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
