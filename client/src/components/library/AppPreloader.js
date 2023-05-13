import { Box, CircularProgress } from "@mui/material";

function AppPreloader({ message }){
  return(
    <Box height="100%" display="flex" justifyContent="center" alignItems="center">
      <div style={{ textAlign: 'center' }}>
        <CircularProgress />
        <h4>{message}</h4>
      </div>
    </Box>
  )
}

export default AppPreloader;