import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomCheckbox from './CustomeCheckBox';
import { Grid } from '@mui/material';

const Role = () => {

     const [formData, setFormData] = useState({
       name: "",
       persmission: [
         "Update Order Status",
         "See Customers",
         "See Orders",
         "Create Roles",
         "Add Users",
       ],
     });

    // const Permissions = [
    //     "Update Order Status",
    //     "See Customers",
    //     , "See Orders",
    //     "Create Roles",
    //     "Add Users"
    // ]

  return (
    <Box sx={{padding:5,display:"flex",justifyContent:"center"}}>
      <form>
        {" "}
        <TextField
          label="Name"
          type="text"
          name="name"
          required
          fullWidth
          // onChange={handleChange}
        />
        <Typography sx={{ color: "gray" }}>Permissions</Typography>
        {formData.roles.map((role, index) => (
          <Grid item xs={4} key={index}>
            <CustomCheckbox
              checked={formData.roles.includes(role)}
              // onChange={handleToppingChange}
              value={role}
              label={role}
            />
          </Grid>
        ))}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ backgroundColor: "#FF9921", borderRadius: 10, padding: 2 }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default Role
