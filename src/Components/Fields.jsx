import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

const Fields = ({Name,Email,index}) => {
  return (
      <div className="data_val">
       <p>{Name} </p>
        <p>{Email}</p>
        <Stack>
            <Button variant="contained" color="error">
              <DeleteIcon/>
            </Button>
            </Stack>
      </div>
  );
};

export default Fields;
