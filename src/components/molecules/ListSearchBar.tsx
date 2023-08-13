import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface ListSearchBarProps {
  onSearch: (data: {
    startDate: Date | null;
    endDate: Date | null;
    query: string;
  }) => void;
  showDatePicker?: boolean;
}

const ListSearchBar: React.FC<ListSearchBarProps> = ({
  onSearch,
  showDatePicker = true,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const searchData = {
      startDate,
      endDate,
      query: searchQuery,
    };
    onSearch(searchData);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {showDatePicker && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            views={["year", "month"]}
            label="Start Date"
            value={startDate}
            onChange={handleStartDateChange}
            slotProps={{ textField: { size: "small" } }}
          />
          <DatePicker
            views={["year", "month"]}
            label="End Date"
            value={endDate}
            onChange={handleEndDateChange}
            slotProps={{ textField: { size: "small" } }}
          />
        </LocalizationProvider>
      )}
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Button variant="outlined" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default ListSearchBar;
