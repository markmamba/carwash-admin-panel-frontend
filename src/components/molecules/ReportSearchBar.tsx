import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface ReportSearchBarProps {
  onSearch: (data: { date: Date | null; query: string }) => void;
  showDatePicker?: boolean;
  showSearchField?: boolean;
}

const ReportSearchBar: React.FC<ReportSearchBarProps> = ({
  onSearch,
  showDatePicker = true,
  showSearchField = true,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    console.log("Selected month and year: ", date);
  };

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const searchData = {
      date: selectedDate,
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
            label="Select Year and Month"
            value={selectedDate}
            onChange={handleDateChange}
            slotProps={{ textField: { size: "small" } }}
          />
        </LocalizationProvider>
      )}
      {showSearchField && (
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      )}
      <Button variant="outlined" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default ReportSearchBar;
