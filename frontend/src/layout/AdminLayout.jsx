import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../pages/dashboard/AdminHeader";
import Dashboard from "../pages/dashboard/AdminSider";
import AdminSider from "../pages/dashboard/AdminSider";

const AdminLayout = () => {
  return (
    <Box
      sx={{
        minWidth: "100vw",
        backgroundColor: "#F8F8F8",
        // padding:2,
        display: "flex",
        flex:1
      }}
    >
      <AdminSider />
      <Box sx={{flex:2}}>
        <AdminHeader title="Dashboard" />
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            Width: "100vw",
            // maxHeight: "100vh",
            margin: 3,
            height:"100vh"
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
