import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

const CustomCheckbox = ({ checked, onChange, value, label }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          value={value}
          sx={{
            "&.Mui-checked": {
              color: "#f67f07",  
              "&:hover": {
                backgroundColor: "rgba(255, 0, 0, 0.08)", 
              },
            },
          }}
        />
      }
      label={label}
    />
  );
};

export default CustomCheckbox;
