import Button from "@mui/material/Button";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import * as React from "react";
import { useState } from "react";
import ServiceRegistrationModal from "../components/modals/ServiceRegistrationModal";
import ReportSearchBar from "../components/molecules/ReportSearchBar";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "serviceName", headerName: "Service", flex: 1 },
  { field: "carType", headerName: "Car Type", flex: 1 },
  { field: "price", headerName: "Service Price", flex: 1 },
  { field: "details", headerName: "Service Details", flex: 1 },
  { field: "remarks", headerName: "Remarks", flex: 1 },
];

const rows = [
  {
    id: 1,
    serviceName: "Carwash",
    carType: "Car",
    price: 120,
    details: "Enter details here......",
    remarks: "Enter Remarks here......",
  },
  {
    id: 2,
    serviceName: "Carwash",
    carType: "SUV",
    price: 130,
    details: "Enter details here......",
    remarks: "Enter Remarks here......",
  },
  {
    id: 3,
    serviceName: "Carwash",
    carType: "Jeepney",
    price: 130,
    details: "Enter details here......",
    remarks: "Enter Remarks here......",
  },
];

export default function Service() {
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
          <ReportSearchBar onSearch={handleSearch} showDatePicker={false} />
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Add Service
          </Button>
        </div>
        <div style={{ width: "100%" }}>
          <ServiceRegistrationModal
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
