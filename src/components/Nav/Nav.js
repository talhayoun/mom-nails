import React from "react";
import { Box } from "@mui/material";
import NavLinkStyle from "./NavLinkStyle";
import logo from "../../images/logo.png";
import Details from "./Details";

const Nav = () => {
    return (
        <Box style={containerStyle}>
            <Details />
            <Box style={linksContainerStyle}>
                {/* <NavLinkStyle title="Home" path="/" /> */}
                {/* <NavLinkStyle title="Home" path="/" /> */}
                <img src={logo} style={{ height: "80px" }} />
                {/* <NavLinkStyle title="Home" path="/" /> */}
                {/* <NavLinkStyle title="Home" path="/" /> */}
            </Box>
        </Box>
    );
};

const containerStyle = {
    height: "160px",
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
