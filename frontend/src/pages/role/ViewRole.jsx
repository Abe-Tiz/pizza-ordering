import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
  IconButton,
} from "@mui/material";
import { Refresh, GetApp, Sort, Fullscreen } from "@mui/icons-material";
// import ReusableTable from "./ReusableTable"; // Import the reusable table component
import Role from "../dashboard/Role"; // Adjust the import path as necessary
import UpdateRole from "./UpdateRole";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoleRequest } from "../../redux/roleSlice";
import TableComponent from "../../components/TableComponent";

const ViewRole = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.role);

  useEffect(() => {
    dispatch(fetchRoleRequest());
  }, [dispatch]);

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleClickOpenUpdate = (role) => {
    setSelectedRole(role);
    setOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const handleToggleStatus = (role) => {
    console.log(`Toggling status for role: ${role.name}`);
  };

  const handleDeleteRole = (role) => {
    // Implement delete role logic
  };

  const handleUpdateRole = (updatedRole) => {
    // Implement update role logic
  };

  // Pagination handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  const rolesArray = Array.isArray(role) ? role : [];

  // Define table columns
  const columns = [
    { id: "name", label: "Role Name" },
    { id: "created_date", label: "Created at", align: "right" },
    { id: "actions", label: "Actions", align: "right" },
  ];

  return (
    <Box sx={{borderWidth:2,borderColor:"red"}}>
      <Box sx={{display:"flex",justifyContent:"space-between",padding:2}}>
        {/* button */}
        <Button
          variant="contained"
          sx={{ backgroundColor: "#FF9921", color: "#FFFFFF", mb: 2 }}
          onClick={handleClickOpenAdd}
        >
          Add Role
        </Button>

        <Box>
          {" "}
          <Tooltip title="Refresh">
            <IconButton>
              <Refresh />
            </IconButton>
          </Tooltip>
          <Tooltip title="Download">
            <IconButton>
              <GetApp />
            </IconButton>
          </Tooltip>
          <Tooltip title="Sort">
            <IconButton>
              <Sort />
            </IconButton>
          </Tooltip>
          <Tooltip title="Fullscreen">
            <IconButton>
              <Fullscreen />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <TableComponent
        data={rolesArray}
        columns={columns}
        page={page}
        rowsPerPage={rowsPerPage}
        totalRows={rolesArray.length}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        onEdit={handleClickOpenUpdate}
        onDelete={handleDeleteRole}
        onToggleStatus={handleToggleStatus}
      />

      {/* Add Role Modal */}
      <Dialog open={openAdd} onClose={handleCloseAdd} maxWidth="sm" fullWidth>
        <DialogTitle>Add Role</DialogTitle>
        <DialogContent>
          <Role onClose={handleCloseAdd} />
        </DialogContent>
      </Dialog>

      {/* Update Role Modal */}
      <UpdateRole
        open={openUpdate}
        onClose={handleCloseUpdate}
        role={selectedRole}
        onUpdate={handleUpdateRole}
      />
    </Box>
  );
};

export default ViewRole;
