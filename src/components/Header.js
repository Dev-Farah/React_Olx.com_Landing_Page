import * as React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

// Icons and Styles
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import Logo from '../images/olx.png';
import LogoBlack from '../images/olx-logo-black.png';
import SellBrdr from '../images/iconSellBorder.svg';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';

// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import { useTheme } from '@mui/material/styles';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


import LocationIcon from '../images/iconLocation.svg'
import CurrLocationIcon from '../images/iconCurrentLocation.svg'



function ResponsiveAppBar() {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(0, 1, 1, 1),
      // vertical padding + font size from searchIcon
      paddingRight: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));


  let [regions, setRegions] = useState([]);

  const handleChange = (event) => {
    setRegions(event.target.value);
  };



   regions = [
    { id: 3, icon: { LocationIcon }, label: "Azad Kashmir, Pakistan" },
    { id: 4, icon: { LocationIcon }, label: "Balochistan, Pakistan" },
    { id: 5, icon: { LocationIcon }, label: "Islamabad Capital Territory, Pakistan" },
    { id: 6, icon: { LocationIcon }, label: "Khyber Pakhtunkhwa, Pakistan" },
    { id: 7, icon: { LocationIcon }, label: "Northern Areas, Pakistan" },
    { id: 8, icon: { LocationIcon }, label: "Punjab, Pakistan" },
    { id: 9, icon: { LocationIcon }, label: "Sindh, Pakistan" },
  ]

  return (
    <>
      <AppBar position="static" sx={{ color: "gray", backgroundColor: "#f7f8f8" }}>
        <Toolbar sx={{ display: 'flex', flexWrap: "nowrap" }}>
          <a
            className="logo"
            href="../public/index.html"
          >
            <img
              src={Logo}
              alt="Logo"
              width="40px"
            />
          </a>

          <div style={{ display: 'flex', marginLeft: "20px", flexWrap: "wrap" }}>
            <Button style={{ display: 'flex', marginLeft: "20px", fontSize: "12px", color: "#3B3B3B" }}>
              <DirectionsCarOutlinedIcon sx={{ mx: 1, backgroundImage: "linear-gradient(lightgrey, #fff)", borderRadius: "50%" }} />
              <Typography variant="p">MOTORS</Typography>
            </Button>

            <Button style={{ display: 'flex', marginLeft: "20px", fontSize: "12px", color: "#3B3B3B" }}>
              <ApartmentOutlinedIcon sx={{ mx: 1, backgroundImage: "linear-gradient(lightgrey, #fff)", borderRadius: "50%" }} />
              <Typography variant="p">PROPERTY</Typography>
            </Button>
          </div>
        </Toolbar>

        <Toolbar sx={{ display: 'flex', mx: 1, flexWrap: "wrap", alignItems: 'center' }}>
          <a
            className="logo"
            href="../public/index.html"
          >
            <img
              src={LogoBlack}
              alt="Logo"
              width="60px"
            />
          </a>














          <TextField sx={{ mx: 2, minWidth: "25%", backgroundColor: "#fff" }}
            id="outlined-select"
            select
            label="Pakistan"
            value="#"
          onChange={handleChange}
          // helperText="Please select your currency"
          >
            <MenuItem style={{ color: "blue", fontWeight: "bold" }} value={0}>Use current location</MenuItem>
            <MenuItem value={1}>See ads in all Pakistan</MenuItem>
            <MenuItem disabled value={2}>CHOOSE REGION</MenuItem>

            {regions.map((option) => (
              <MenuItem key={option.id} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>




{/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type='text' }
            value={"values"}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl> */}















          <Search sx={{ color: "darkgray", width: "100px" }}>
            <StyledInputBase
              placeholder="Find Cars, Mobile Phones and more..."
              sx={{ backgroundColor: "#ffffff" }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>

          <Button
            variant="string"
            // noWrap
            // component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: '#000000',
              textDecoration: 'underline',
            }}
          >Login</Button>


          <Button style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: 0, width: "110px" }}>
            <img src={SellBrdr}
              alt="SellBtn" /><span className="sell"
                style={{ marginLeft: "-80%", fontWeight: "bold", color: "#000000" }}
              >+SELL</span>
          </Button>

        </Toolbar>

      </AppBar>
    </>
  );

};

export default ResponsiveAppBar;
