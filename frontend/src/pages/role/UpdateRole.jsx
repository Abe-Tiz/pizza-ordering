import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const UpdateRole = ({ open, onClose, role, onUpdate }) => {
  const [roleName, setRoleName] = useState("");

  useEffect(() => {
    if (role) {
      setRoleName(role.name);
    }
  }, [role]);

  const handleUpdate = () => {
    if (role) {
      onUpdate({ ...role, name: roleName }); // Pass updated role data back to parent
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Update Role</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Role Name"
          type="text"
          fullWidth
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleUpdate} color="primary">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateRole;
