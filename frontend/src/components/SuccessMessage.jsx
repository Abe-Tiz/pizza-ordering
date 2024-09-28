import { Box, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import React from 'react'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SuccessMessage = ({ open, onClose }) => {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 3,
          }}
        >
          <DialogTitle>
            <Box
              sx={{
                background: "#c4ffe5",
                width: 130,
                borderRadius: 30,
                height: 130,
              }}
            >
              <CheckCircleIcon
                sx={{
                  color: "green",
                  marginRight: 1,
                  padding: 2,
                  fontSize: 100,
                  alignSelf: "center",
                }}
              />{" "}
            </Box>
          </DialogTitle>
          <DialogContent>
            <Typography sx={{ color: "green", fontSize: 20 }}>
              Your order has been successfully completed!
            </Typography>
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
};

export default SuccessMessage
