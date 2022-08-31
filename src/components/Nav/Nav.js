import React from "react";
import { Box } from "@mui/material";
import NavLinkStyle from "./NavLinkStyle";
import logo from "../../images/logo.png";
import Details from "./Details";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


const Nav = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <Box style={{ ...containerStyle, height: isDesktop ? '160px' : '230px' }} >
            <Details />
            <Box style={linksContainerStyle}>
                <img src={logo} style={{ height: "80px" }} />
            </Box>
        </Box>
    );
};

const containerStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: 'column',
    paddingBottom: "20px",
    gap: '10px',
};

const linksContainerStyle = {
    height: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: '70%',
    paddingTop: '10px'
};

export default Nav;
