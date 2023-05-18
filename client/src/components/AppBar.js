import {Avatar, Box, Button, Container, IconButton, Menu, MenuItem, AppBar as MuiAppBar, Toolbar, Tooltip, Typography} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signout } from '../store/actions/authActions';
import ProgressBar from './library/ProgressBar';
function AppBar(){
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const closeMenu = () => {
    setAnchorEl(null);
  }
  const logout = () => {
    dispatch( signout() );
    closeMenu();
  }

  return(
    <MuiAppBar>
      <Container maxWidth="lg">
        <Toolbar>
          <AdbIcon sx={{display: 'flex', mr: 1}} />
          <Typography
            variant="h6"
            component={Link}
            to="/admin/dashboard"
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RateMe
          </Typography>
          <Box textAlign="right" flexGrow={1}>
              <Button 
                component={Link}
                to="/admin/departments"
                sx={{ color: '#fff', my:2 }}
                >
                Departments
              </Button>
          </Box>

          <Box>
            <Tooltip title="Open Settings">
              <IconButton onClick={openMenu}>
                <Avatar alt="Profile picture" src='' />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={closeMenu}
            >
              <MenuItem component={Link} to="/admin/account-settings" onClick={closeMenu}>
                <Typography textAlign="center">Account Settings</Typography>
              </MenuItem>
              <MenuItem onClick={logout}>
                <Typography textAlign="center">Sign Out</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <ProgressBar />
    </MuiAppBar>
  )
}

export default AppBar;