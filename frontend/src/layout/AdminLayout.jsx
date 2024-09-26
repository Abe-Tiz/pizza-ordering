import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <Box>
      admin Page

      <Box>
        <Outlet />
      </Box>
    </Box>
  )
}

export default AdminLayout
