import { Box, Button, IconButton, Popover, Typography } from  "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import { useDispatch } from "react-redux";
import { deleteDepartment } from "../../store/actions/departmentActions";

function DeleteDepartment({ departmentId, name }){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteDept = () => {
    dispatch( deleteDepartment(departmentId) );
  }

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton onClick={handleClick}> <DeleteIcon/> </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Typography sx={{ p: 2 }}>All department data including employees and their rating will be deleted. Do you want to delete <b>{name}</b> department?</Typography>
        <Box textAlign="center" pb={2}>
          <Button onClick={handleClose}>Close</Button>
          <Button sx={{ ml: 2 }} variant="contained" color="error" onClick={deleteDept} >Delete</Button>
        </Box>
      </Popover>
    </>
  )
}

export default DeleteDepartment;