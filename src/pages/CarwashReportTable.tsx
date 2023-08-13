import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReportSearchBar from "../components/molecules/ReportSearchBar";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function createData(
  date: string,
  sales: number,
  rent: number,
  expense: number,
  expensePercentage: number,
  profitPercentage: number,
  totalProfit: number
) {
  return {
    date,
    sales,
    rent,
    expense,
    expensePercentage,
    profitPercentage,
    totalProfit,
  };
}

const rows = [
  createData("2023-07", 15000, 1500, 7800, 33.0, 67.0, 5000),
  createData("2023-06", 15000, 1500, 7800, 33.0, 67.0, 5000),
  createData("2023-05", 15000, 1500, 7800, 33.0, 67.0, 5000),
  createData("2023-04", 15000, 1500, 7800, 33.0, 67.0, 5000),
  createData("2023-03", 15000, 1500, 7800, 33.0, 67.0, 5000),
];

export default function CarwashTable() {
  const [searchData, setSearchData] = useState<{
    date: Date | null;
    query: string;
  } | null>(null);

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
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
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
          <Typography variant="h4" display="block" gutterBottom>
            Total: 5,000
          </Typography>
          <ReportSearchBar onSearch={handleSearch} showSearchField={false} />
        </div>
        <div style={{ marginTop: "2%" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Period</TableCell>
                  <TableCell align="right">Sales</TableCell>
                  <TableCell align="right">Rent</TableCell>
                  <TableCell align="right">Expense total</TableCell>
                  <TableCell align="right">Expense (%)</TableCell>
                  <TableCell align="right">Profit (%)</TableCell>
                  <TableCell align="right">Total Profit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.date}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.date}
                    </TableCell>
                    <TableCell align="right">{row.sales}</TableCell>
                    <TableCell align="right">{row.rent}</TableCell>
                    <TableCell align="right">{row.expense}</TableCell>
                    <TableCell align="right">{row.expensePercentage}</TableCell>
                    <TableCell align="right">{row.profitPercentage}</TableCell>
                    <TableCell align="right">{row.totalProfit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
