import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+'
};

export default function InputWithIcon () {
  const value = 3.5;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100vh', // Optional, to center vertically
        textAlign: 'center' // Aligns children to center horizontally
      }}
    >
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Box sx={{ m: 3 }}>
          <Rating
            name="text-feedback"
            value={value}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            helperText={labels[value]}
          />
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ height: '50px' }}>
              <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
        User name
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { mt: 1, width: '40ch' }
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="outlined-multiline-flexible"
                label="Review"
                multiline
                maxRows={10}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
