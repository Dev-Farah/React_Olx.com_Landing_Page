import * as React from 'react';
import { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Tooltip } from '@mui/material';
import { Container, Box } from '@mui/system';
import { AppBar, Toolbar, Grid, TextField, Typography, Button } from '@mui/material';
import { MenuItem, Divider } from "@mui/material";
// For Search Input Field
import { Paper, IconButton } from '@mui/material';

// Icons and Styles
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Logo from '../images/olx.png';
import LogoBlack from '../images/olx-logo-black.png';
import SellBrdr from '../images/iconSellBorder.svg';
import banner from '../images/banner.jpg';


export function Main(props) {
  const [productList, setProductList] = useState([

    {
      id: 1,
      title: "1st Floor Shop For Sale In Roman Grove",
      price: "24, 673, 679",
      category: "property for sale",
      image: require("../images/1st Floor Shop For Sale In Roman Grove.jpg"),
      location: "Roman Grove, Islamabad",
      duration: "4 weeks ago",
      featured: true
    },

    {
      id: 2,
      title: "Quality Guitars Collection at Acoustica Guitar Shop",
      price: "16,500",
      category: "Musical Instruments",
      image: require("../images/Guitars collection.jpg"),
      location: "Ghauri Town, Islamabad",
      duration: "15 hours ago",
      featured: true
    },

    {
      id: 3,
      title: "I need a driver",
      price: "12,000 - 15,000",
      category: "Jobs",
      image: require("../images/I need a driver.webp"),
      location: "Quetta",
      duration: "13 hours ago",
      featured: true
    },

    {
      id: 4,
      title: "Holland lop pet Rabbit",
      price: "16, 000",
      category: "pets",
      image: require("../images/Holland lop pet Rabbit.webp"),
      location: "Thokar Niaz Baig, Lahore",
      duration: "5 days ago",
      featured: true
    },

    {
      id: 5,
      title: "Iphone 7 Plus Non PTA",
      price: "26, 500",
      category: "electronics",
      image: require("../images/Iphone 7 Plus Non PTA.webp"),
      location: "Gujranwala",
      duration: "15 hours ago",
      featured: false
    },

    {
      id: 6,
      title: "1 Kanal Prime Location near to main Gate Plot for sale",
      price: "15,900,000",
      category: "property for sale",
      image: require("../images/1 Kanal Prime Location.webp"),
      location: "Bahria Orchard, Lahore",
      duration: "1 week ago",
      featured: true
    },

    {
      id: 7,
      title: "Ninja 250cc used at Bullet 1 Motorsports",
      price: "380, 000",
      category: "vehicles",
      image: require("../images/Ninja 250cc Motorsports.jpg"),
      location: "McLeod Road, Lahore",
      duration: "4 weeks ago",
      featured: false
    },

    {
      id: 8,
      title: "Butterfly Koi Fish",
      price: "625",
      category: "pets",
      image: require("../images/Butterfly Koi Fish.webp"),
      location: "Dharampura, Lahore",
      duration: "13 hours ago",
      featured: false
    },

    {
      id: 9,
      title: "Mercedes, RollsRoyce, Prado, Audi, V8 Available for rent in Islamabad",
      price: "",
      category: "vehicles",
      image: require("../images/Car for rent.webp"),
      location: "G-10, Islamabad",
      duration: "2 weeks ago",
      featured: true
    },

    {
      id: 10,
      title: "AC/DC inverter / all type air conditioners",
      price: "8, 100",
      category: "electronics",
      image: require("../images/air conditioners.webp"),
      location: "Al Hamra Town, Lahore",
      duration: "3 weeks ago",
      featured: true
    },

    {
      id: 11,
      title: "10 Marla Brand New Spanish Design House For Sale Super Hot Location",
      price: "42, 000, 000",
      category: "property for sale",
      image: require("../images/10 Marla Brand New Spanish Design House.jpg"),
      location: "Johar Town Phase 1, Lahore",
      duration: "23 hours ago",
      featured: true
    },

    {
      id: 12,
      title: "IPhone 7 plus 128gb PTA approved",
      price: "125,000",
      category: "electronics",
      image: require("../images/IPhone 7 plus 128gb PTA approved.webp"),
      location: "Gujranwala",
      duration: "14 hours ago",
      featured: false
    },

    {
      id: 13,
      title: "Laptop HP Notebook 15 ef2127wm AMD Ryzen5 5500U 8GB RAM 256GB ROM",
      price: "99,999",
      category: "electronics",
      image: require("../images/Laptop HP Notebook 15 ef2127wm.webp"),
      location: "University Road, Karachi",
      duration: "1 hour ago",
      featured: false
    },
    
    {
      id: 14,
      title: "1 Kanal Luxury Upper Portion for Rent in Phase 6",
      price: "125,000",
      category: "property for rent",
      image: require("../images/1 Kanal Luxury Upper Portion.webp"),
      location: "DHA Phase 6, Lahore",
      duration: "3 weeks ago",
      featured: false
    },

    {
      id: 15,
      title: "Steel Series Ikari Laser Pro Gaming Mouse 3200dpi",
      price: "2,500",
      category: "electronics",
      image: require("../images/Gaming Mouse.webp"),
      location: "Gulberg 3, Lahore",
      duration: "13 hours ago",
      featured: true
    },


  ]);

  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterList, setFilterList] = useState([]);

  // Extracting all categories from main product Array
  let getCategories = () => {
    let li = productList.map((x) => x.category);
    li = [...new Set([...li])];
    setAllCategories([...li]);
  };

  // Render Item By DropDown
  let searchCategoryItem = (val) => {
    setSelectedCategory(val);
    let filteredList = productList.filter((x) => x.category == val);
    setFilterList([...filteredList]);
  };

  // Search Item By DropDown and Input
  let searchItem = (val) => {
    let filteredList = productList.filter(
      (x) =>
        x.category == selectedCategory &&
        x.title.toLowerCase().includes(val.toLowerCase())
    );
    setFilterList([...filteredList]);
  };

  // It will run when component initialize ...
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {/* -------------------------- Navigation Bar Starts -------------------------- */}
      <AppBar position="sticky" sx={{ color: "grey", backgroundColor: "#f7f8f8", boxShadow: "none" }}>

        {/* Navbar line 1 */}
        <Toolbar sx={{ display: 'flex', flexWrap: "nowrap" }}>

          {/* Brand Logo */}
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

          {/* Motor Option */}
          <Box style={{ display: 'flex', marginLeft: "20px", flexWrap: "wrap" }}>
            <Button sx={{ display: 'flex', marginLeft: "20px", fontSize: "12px", color: "#3B3B3B" }}>
              <DirectionsCarOutlinedIcon sx={{ mx: 1, p: 0.2, backgroundImage: "linear-gradient(lightgrey, #fff)", borderRadius: "50%", '&:hover': { color: "#3a77ff" } }} />
              <Typography variant="p" sx={{ '&:hover': { color: "#3a77ff" } }}>MOTORS</Typography>
            </Button>

            {/* Property Option */}
            <Button sx={{ display: 'flex', marginLeft: "20px", fontSize: "12px", color: "#3B3B3B" }}>
              <ApartmentOutlinedIcon sx={{ mx: 1, p: 0.2, backgroundImage: "linear-gradient(lightgrey, #fff)", borderRadius: "50%", '&:hover': { color: "#3a77ff" } }} />
              <Typography variant="p" sx={{ '&:hover': { color: "#3a77ff" } }}>PROPERTY</Typography>
            </Button>
          </Box>
        </Toolbar>
        {/* Navbar line 1 Ends */}


        {/* Navbar line 2 Starts */}
        <Toolbar sx={{ display: 'flex', pb: 1, flexWrap: "wrap", justifyContent: "center", alignItems: 'center' }}>

          {/* Brand Logo (Black) */}
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


          {/* Categories Dropdown */}
          <TextField sx={{ mx: 2, minWidth: "25%", backgroundColor: "#fff", textTransform: "capitalize" }}
            id="outlined-select"
            select
            label="Categories"
            // variant='standard'
            onChange={(e) => searchCategoryItem(e.target.value)}
            value={selectedCategory}
          >
            <MenuItem value="" sx={{ color: "darkgrey" }}>None</MenuItem>
            <Divider />

            {allCategories.map((e) => (
              <MenuItem key={e.id} value={e} sx={{ textTransform: "capitalize"}}>
                {e}
              </MenuItem>
            ))}
          </TextField>


          {/* Search Input Field */}
          <Paper
            // component="form"
            sx={{ display: 'flex', alignItems: 'center', width: 650 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Find Cars, Mobile Phones and more..."
              inputProps={{ 'aria-label': 'Find Cars, Mobile Phones and more...' }}
              onChange={(e) => searchItem(e.target.value)}
            />
            <Box sx={{ backgroundColor: "#002f34" }}>
              <IconButton type="button" sx={{ p: '15px' }} aria-label="search">
                <SearchIcon sx={{ color: "#ffffff" }} />
              </IconButton>
            </Box>
          </Paper>


          {/* Login Button */}
          <Button
            variant="string"
            sx={{
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: '#000000',
              textDecoration: 'underline',
            }}
          >Login</Button>


          {/* Sell Button */}
          <Button sx={{ display: "flex", alignItems: "center", justifyContent: "center", margin: 0, width: "110px" }}>
            <img src={SellBrdr}
              alt="SellBtn" /><span className="sell"
                style={{ marginLeft: "-80%", fontWeight: "bold", color: "#000000" }}
              >+SELL</span>
          </Button>

        </Toolbar>
        {/* Navbar line 2 Ends */}

      </AppBar>
      {/* -------------------------- Navigation Bar Ends -------------------------- */}



      {/* Banner */}
      <Container>
        <img
          style={{ width: "100%", margin: "25px 0" }}
          src={banner} alt="banner" />
      </Container>


      {/* Filtering Cards */}
      <Grid container sx={{ justifyContent: "center", alignItems: "flex-start", p: 2, pb: 5 }}>
        {filterList.map((e, i) => (
          <Grid item xl={3} lg={3} md={3} sm={6} xs={12} m={1}
            key={i}
          >
            <Card
              sx={{ maxWidth: 290 }}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={e.image}
                  width="100%"
                  alt={e.title}
                />
              </Box>
              <CardContent>
                <Tooltip title={e.title}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                    <Typography
                      sx={{ height: 60, overflow: "hidden" }}
                      variant="subtitle1"
                    >
                      {e.title.slice(0, 25) + (e.title.length > 25 ? "..." : "")}
                    </Typography>

                    <FavoriteBorderIcon />
                  </Box>
                </Tooltip>

                <Typography gutterBottom variant="h6" component="div">
                  {`Rs ${e.price}`}
                </Typography>

                <Typography sx={{ fontSize: 12 }} color="text.secondary" mt={2}>
                  {e.location} • {e.duration}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* <br />
      <hr /> */}
      {/* <br /> */}


      {/* Products Heading */}
      <Container styled={{ padding: 0 }}>
        <Typography variant="h5" >Fresh recommendations</Typography>
      </Container>

      {/* Mapping All Cards */}
      <Grid container sx={{ justifyContent: "center", alignItems: "flex-start", p: 2, pb: 5 }}>

        {productList.map((e, i) => (
          <Grid item xl={3} lg={3} md={3} sm={6} xs={12} m={1}
            key={i}
          >
            <Card
              sx={{ maxWidth: 290 }}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {/* <img src={e.image} width="100%" height="180px" alt={e.title} /> */}
                <CardMedia
                  component="img"
                  height="180"
                  image={e.image}
                  width="100%"
                  alt={e.title}
                // objectFit="contain"
                />
              </Box>
              <CardContent>
                <Tooltip title={e.title}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                    <Typography
                      sx={{ height: 60, overflow: "hidden" }}
                      variant="subtitle1"
                    >
                      {e.title.slice(0, 25) + (e.title.length > 25 ? "..." : "")}
                    </Typography>

                    <FavoriteBorderIcon />
                  </Box>
                </Tooltip>

                <Typography gutterBottom variant="h6" component="div">
                  {`Rs ${e.price}`}
                </Typography>

                <Typography sx={{ fontSize: 12 }} color="text.secondary" mt={2}>
                  {e.location} • {e.duration}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {/* All Cards Ends*/}

      </Grid>
    </>
  );
}