import { Fullscreen, GetApp, Refresh, Sort } from '@mui/icons-material';
import { Box, IconButton, Tooltip } from '@mui/material';
import React from 'react'

const TableHeaderComponent = () => {
  return (
    <>
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
    </>
  );
}

export default TableHeaderComponent
