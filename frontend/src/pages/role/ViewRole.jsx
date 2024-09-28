import {
  Box,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  TextField,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Switch,
  FormControlLabel,
} from "@mui/material";
import {
  Refresh,
  Search,
  GetApp,
  Sort,
  Fullscreen,
  Visibility,
  Delete,
} from "@mui/icons-material";
import React, { useState } from "react";
import Role from "../dashboard/Role"; // Adjust the import path as necessary
import UpdateRole from "./UpdateRole";
// import Role from './../dashboard/Role';

const initialRoles = [
  { name: "Kitchen Manager", createdAt: "8/14/24", status: "Active" },
  { name: "Cashier", createdAt: "8/14/24", status: "Active" },
  { name: "Branch Manager", createdAt: "8/14/24", status: "Active" },
];

const ViewRole = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [roles, setRoles] = useState(initialRoles); // State to manage roles
  const [selectedRole, setSelectedRole] = useState(null); // State to manage the selected role for updating

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleClickOpenUpdate = (role) => {
    setSelectedRole(role); // Set the selected role for editing
    setOpenUpdate(true); // Open the update modal
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const handleToggleStatus = (roleName) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.name === roleName
          ? {
              ...role,
              status: role.status === "Active" ? "Inactive" : "Active",
            }
          : role
      )
    );
  };

  const handleDeleteRole = (role) => {
    setRoles((prevRoles) => prevRoles.filter((r) => r.name !== role.name)); // Remove the role from the list
  };

  const handleUpdateRole = (updatedRole) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.name === updatedRole.name ? updatedRole : role
      )
    );
    setOpenUpdate(false); // Close the update modal after updating
  };

  return (
    <Box height="100vh">
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                {" "}
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#FF9921",color:"#FFFFFF" }}
                  onClick={handleClickOpenAdd}
                >
                  Add Role
                </Button>
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">
                {" "}
                <Tooltip title="Refresh">
                  <IconButton>
                    <Refresh />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Search">
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search"
                    sx={{ mx: 1 }}
                  />
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
              </TableCell>
              {/* <TableCell align="right">Actions</TableCell> */}
            </TableRow>
            <TableRow>
              <TableCell>Role Name</TableCell>
              <TableCell align="right">Created at</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.name}>
                <TableCell component="th" scope="row">
                  {role.name}
                </TableCell>
                <TableCell align="right">{role.createdAt}</TableCell>
                <TableCell align="right">
                  <Tooltip title="Toggle Status">
                    <FormControlLabel
                      control={
                        <Switch
                          checked={role.status === "Active"}
                          onChange={() => handleToggleStatus(role.name)}
                        />
                      }
                      label={role.status}
                    />
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton onClick={() => handleClickOpenUpdate(role)}>
                      <Visibility />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDeleteRole(role)}>
                      <Delete />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Role Modal */}
      <Dialog open={openAdd} onClose={handleCloseAdd} maxWidth="sm" fullWidth>
        <DialogTitle>Add Role</DialogTitle>
        <DialogContent>
          <Role />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdd} color="primary">
            Cancel
          </Button>
          <Button color="primary">Add</Button>
        </DialogActions>
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
