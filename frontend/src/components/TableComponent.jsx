import React, { useState } from "react";
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
  Modal,
  Typography,
  Paper,
  Select,
  MenuItem,
} from "@mui/material";
import { Visibility, Delete, CheckCircle } from "@mui/icons-material";
import OrderDetailToppings from "./OrderDetailToppings";

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
  const [open, setOpen] = useState(false);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [status, setStatus] = useState({});
 const [selectedOrder, setSelectedOrder] = useState(null);

 const handleModalOpen = (order) => {
   setSelectedOrder(order);
   setOpen(true);
 };

 const handleModalClose = () => {
   setOpen(false);
   setSelectedOrder(null);
  };
  
  const handleOpen = (toppings) => {
    setSelectedToppings(toppings);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedToppings([]);
  };

  const handleStatusChange = (id, newStatus) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [id]: newStatus,
    }));
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Preparing":
        return { backgroundColor: "#055927", color: "white" };
      case "Ready":
        return { backgroundColor: "#fa8919", color: "white" };
      default:
        return {};
    }
  };

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
                  {row.name && <TableCell>{row.name}</TableCell>}
                  
                 { row.toppings && <TableCell style={{ color: "#fc9936" }} align="right">
                    <Tooltip title="View Toppings">
                      <IconButton
                        sx={{ color: "#fc9936" }}
                        onClick={() => handleModalOpen(row)}
                      >
                        <Visibility />
                      </IconButton>
                    </Tooltip>
                    Toppings
                  </TableCell>}
                  {row.quantity && (
                    <TableCell align="right">{row.quantity}</TableCell>
                  )}
                  {row.phone && (
                    <TableCell align="right">{row.phone}</TableCell>
                  )}
                  <TableCell align="right">
                    {new Date(row.created_date).toISOString().split("T")[0]}
                  </TableCell>

                { row.status &&  <TableCell align="right">
                    {status[row.id] === "Delivered" ||
                    row.status === "Delivered" ? (
                      <Typography sx={{ color: "green" }}>
                        <CheckCircle
                          style={{
                            verticalAlign: "middle",
                            marginRight: 4,
                            color: "green",
                          }}
                        />
                        Delivered
                      </Typography>
                    ) : (
                      <Select
                        style={{
                          ...getStatusStyle(status[row.id] || "Preparing"),
                          width: "100px",
                          height: "40px",
                        }}
                        value={status[row.id] || "Preparing"}
                        onChange={(e) =>
                          handleStatusChange(row.id, e.target.value)
                        }
                      >
                        <MenuItem value="Preparing">Preparing</MenuItem>
                        <MenuItem value="Ready">Ready</MenuItem>
                        <MenuItem value="Delivered">Delivered</MenuItem>
                      </Select>
                    )}
                  </TableCell>}
                  <TableCell align="right">
                    {onToggleStatus && (
                      <FormControlLabel
                        control={
                          <Switch
                            checked={row.isActive}
                            onChange={() => onToggleStatus(row)}
                            name="activeStatus"
                            color="primary"
                          />
                        }
                        label={row.isactive ? "Active" : "Inactive"}
                      />
                    )}
                    {onEdit && (
                      <Tooltip title="Edit">
                        <IconButton onClick={() => onEdit(row)}>
                          <Visibility />
                        </IconButton>
                      </Tooltip>
                    )}
                    {onDelete && (
                      <Tooltip title="Delete">
                        <IconButton onClick={() => onDelete(row)}>
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          {selectedOrder && (
            <OrderDetailToppings
              open={open}
              handleClose={handleModalClose}
              order={selectedOrder}
            />
          )}
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
