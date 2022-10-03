import React from 'react';
import { Box, Grid, Typography, List, ListSubheader, ListItemText, ListItemIcon, } from '@mui/material';
import olxMobile from '../images/olxMobileApp.webp'
import iconAppStore from '../images/iconAppStore.svg'
import iconGooglePlay from '../images/iconGooglePlay.svg'
import iconAppGallery from '../images/iconAppGallery.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {

    return (
        <>
            <footer style={{ margin: 0 }}>
                <Grid container m={0} sx={{ flexWrap: "wrap", backgroundColor: "#F7F8F8",  color:"#002f34" }}>
                    <Grid item lg={4}>
                        <img src={olxMobile} width="100%" alt="Olx Mobile App" />
                    </Grid>
                    <Grid item my={5} px={5} lg={4} borderRight={"2px solid #002f3433"}>
                        <Typography variant="h4" fontWeight="bold">
                            TRY THE OLX APP
                        </Typography>
                        <br />
                        <Typography variant="body1">
                            Buy, sell and find just about anything using the App on your mobile.
                        </Typography>
                    </Grid>
                    <Grid item py={5} pl={5} lg={4}>
                        <Typography variant="body2" fontWeight="bold">
                            GET YOUR APP TODAY
                        </Typography>
                        <br />
                        <a href=""><img src={iconAppStore} mx={5} width={120} alt="App Store" /></a>
                        <a href=""><img src={iconGooglePlay} mx={5} width={120} alt="Google Play" /></a>
                        <a href=""><img src={iconAppGallery} mx={5} width={120} alt="App Gallery" /></a>
                    </Grid>
                </Grid>


                <Grid container sx={{ display: "flex", borderTop: "2px solid lightgrey", backgroundColor: "#EBEEEF" }} m={0}>

                    <Grid item sx={{ display: "flex", justifyContent: "space-between" }} flexWrap="wrap" pt={1} pb={3} px={5} lg={8} md={8} sm={12} xs={12}>
                        <List
                            subheader={<ListSubheader fontWeight="bold" sx={{ bgcolor: 'transparent', padding: 0, fontSize: "14px", color: "#002F34" }}
                            >POPULAR CATEGORIES</ListSubheader>}
                        >
                            <ListItemText><a href="">Cars</a></ListItemText>
                            <ListItemText><a href="">Flats for rent</a></ListItemText>
                            <ListItemText><a href="">Mobile Phones</a></ListItemText>
                            <ListItemText><a href="">Jobs</a></ListItemText>
                        </List>
                        <List
                            subheader={<ListSubheader fontWeight="bold" sx={{ bgcolor: 'transparent', padding: 0, fontSize: "14px", color: "#002F34" }}
                            >TRENDING SEARCHES</ListSubheader>}
                        >
                            <ListItemText><a href="">Bikes</a></ListItemText>
                            <ListItemText><a href="">Watches</a></ListItemText>
                            <ListItemText><a href="">Books</a></ListItemText>
                            <ListItemText><a href="">Dogs</a></ListItemText>
                        </List>
                        <List
                            subheader={<ListSubheader fontWeight="bold" sx={{ bgcolor: 'transparent', padding: 0, fontSize: "14px", color: "#002F34" }}
                            >ABOUT US</ListSubheader>}
                        >
                            <ListItemText><a href="">About EMPG</a></ListItemText>
                            <ListItemText><a href="">OLX Blog</a></ListItemText>
                            <ListItemText><a href="">Contact Us</a></ListItemText>
                            <ListItemText><a href="">OLX for Businesses</a></ListItemText>
                        </List>
                        <List
                            subheader={<ListSubheader fontWeight="bold" sx={{ bgcolor: 'transparent', padding: 0, fontSize: "14px", color: "#002F34" }}
                            >OLX</ListSubheader>}
                        >
                            <ListItemText><a href="">Help</a></ListItemText>
                            <ListItemText><a href="">Sitemap</a></ListItemText>
                            <ListItemText><a href="">Terms of use</a></ListItemText>
                            <ListItemText><a href="">Privacy Policy</a></ListItemText>
                        </List>
                    </Grid>

                    <Grid item
                        lg={1} md={1} sm={0}
                    >
                    </Grid>

                    <Grid item p={2} lg={1} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                        <Box>
                            <Typography variant="p"
                                sx={{ fontSize: "14px", color: "#002F34" }}
                                pt={1}
                                fontWeight={"bold"}>
                                FOLLOW US
                            </Typography>
                            <List
                                // m={0} p={0}
                                sx={{ display: "flex", fontSize: "14px", color: "#002F34" }}
                            >
                                <ListItemIcon><a href="">{<FacebookIcon />}</a></ListItemIcon>
                                <ListItemIcon><a href="">{<TwitterIcon />}</a></ListItemIcon>
                                <ListItemIcon><a href="">{<PlayArrowIcon />}</a></ListItemIcon>
                                <ListItemIcon><a href="">{<InstagramIcon />}</a></ListItemIcon>
                            </List>
                        </Box>
                        <Box
                            mb={3}
                            sx={{ display: "flex", justifyContent: "space-between" }}
                        >
                            <a href=""><img width="90" src={iconAppStore} alt="App Store" /></a>
                            <a href=""><img width="90" src={iconGooglePlay} alt="Google Play" /></a>
                            <a href=""><img width="90" src={iconAppGallery} alt="App Gallery" /></a>
                        </Box>
                    </Grid>

                </Grid>

                <Box m={0} py={1} px={2}
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        color: "#ffffff",
                        backgroundColor: "#002F34"
                    }}
                >
                    <Typography variant="caption"
                        fontWeight={"bold"}>
                        Free Classifieds in Pakistan
                    </Typography>
                    <Typography variant="caption"
                        m={0} p={1}>
                        . &copy; 2006-2022 OLX
                    </Typography>
                </Box>
            </footer>
        </>
    )
}