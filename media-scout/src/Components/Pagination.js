import React from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    dark: {
      main: '#121212'
    }
  }
});
export default function PaginationNum ({ setPage, numOfPages = 10 }) {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <Box sx={{ diplay: 'flex', alignItems: 'center', padding: '1em' }}>
      <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color='dark'
          variant='outlined'
        />
      </ThemeProvider>
    </Box>
  );
}
