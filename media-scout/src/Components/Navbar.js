import * as React from 'react';
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// eslint-disable-next-line no-unused-vars
import { spacing } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import { styled, alpha } from '@mui/material/styles';
// // import Grid from '@mui/material/Grid';
// // import StarIcon from '@mui/icons-material/StarBorder';
// import InputBase from '@mui/material/InputBase';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import GlobalStyles from '@mui/material/GlobalStyles';

const theme = createTheme({
  spacing: 8,
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2'
    }
  }
});
// Search icon
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}));

export default function PrimarySearchAppBar () {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const menuId = 'primary-search-account-menu';
  // Account menu button
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'grid' }}>
        <AppBar position="static">
          <Toolbar>
            {/* Hamburger button icon  */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Media Scout
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </Box>
    </ThemeProvider>
  );
}
// function Navbar () {
//   return (
//     <React.Fragment>
//       <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
//       <CssBaseline />
//       <AppBar
//         position="static"
//         color="default"
//         elevation={0}
//         sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
//       >
//         <Toolbar sx={{ flexWrap: 'wrap' }}>
//           <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
//             Media Scout
//           </Typography>
//           <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
//             Login
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </React.Fragment >
//   );
// }

// export default function createNavbar () {
//   return <Navbar />;
// }
