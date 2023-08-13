import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CarwashRegistrationModal from "../components/modals/CarwashRegistrationModal";
import { useState } from "react";
import Button from "@mui/material/Button";
import ListSearchBar from "../components/molecules/ListSearchBar";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "type", headerName: "Vehicle", flex: 1 },
  { field: "name", headerName: "Brand name", flex: 1 },
  { field: "plateNo", headerName: "Plate No.", flex: 1 },
  { field: "service", headerName: "Service", flex: 1 },
  { field: "staff", headerName: "Staff", flex: 1 },
  { field: "paymentStatus", headerName: "Payment Status", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 },
  { field: "remarks", headerName: "Remarks", flex: 1 },
];

const rows = [
  {
    id: 1,
    type: "Car",
    plateNo: "AVX-963",
    service: "Carwash",
    staff: "Jeb Doe",
    paymentStatus: "Unpaid",
    date: "2023-05-04",
  },
  {
    id: 2,
    type: "Car",
    plateNo: "AVX-964",
    service: "Carwash",
    staff: "Jebby Doe",
    paymentStatus: "Unpaid",
    date: "2023-05-05",
  },
  {
    id: 3,
    type: "Car",
    plateNo: "AVX-965",
    service: "Carwash",
    staff: "JR Doe",
    paymentStatus: "Unpaid",
    date: "2023-05-06",
  },
];

export default function CarwashReportList() {
  const [openModal, setOpenModal] = useState(false);
  const [searchData, setSearchData] = useState<{
    startDate: Date | null;
    endDate: Date | null;
    query: string;
  } | null>(null);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSearch = (data: {
    startDate: Date | null;
    endDate: Date | null;
    query: string;
  }) => {
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex", // Add flex display
              alignItems: "center", // Align items vertically in the same row
              justifyContent: "space-between", // Space between the button and the search bar
            }}
          >
            <ListSearchBar onSearch={handleSearch} />
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenModal}
            >
              Add
            </Button>
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            <CarwashRegistrationModal
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
