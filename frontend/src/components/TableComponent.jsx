import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Tooltip,
  Switch,
  FormControlLabel,
  Box,
  TablePagination,
} from "@mui/material";
import { Visibility, Delete } from "@mui/icons-material";

const TableComponent = ({
  data,
  columns,
  page,
  rowsPerPage,
  totalRows,
  handleChangePage,
  handleChangeRowsPerPage,
  onEdit,
  onDelete,
  onToggleStatus,
}) => {
    return (
    <Box>
      <TableContainer>
        <Table aria-label="reusable table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align || "left"}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id || row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">
                    {new Date(row.created_date).toISOString().split("T")[0]}
                  </TableCell>
                  <TableCell align="right">
                    <FormControlLabel
                      control={
                        <Switch
                          checked={row.isActive}
                          onChange={() => onToggleStatus(row)}
                          name="activeStatus"
                          color="primary"
                        />
                      }
                      label={row.isactive ? "Active" : "In Active"}
                    />
                    <Tooltip title="Edit">
                      <IconButton onClick={() => onEdit(row)}>
                        <Visibility />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => onDelete(row)}>
                        <Delete />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "flex-start", padding: 2 }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalRows}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
};

export default TableComponent;
