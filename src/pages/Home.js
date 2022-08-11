import { Box, Typography } from "@mui/material";
import Nav from "../components/Nav/Nav";
import Slideshow from "../components/slideshow/Slideshow";
import fingersImage from "../images/hands-background.png";
import feetImage from "../images/feets.png";
import backgroundImage from "../images/pink-background.jpg";
import ServicesImageText from "../components/IconText/ServicesImageText";
import FloatingImage from "../components/FloatingImage/FloatingImage";
import TransparentButton from "../components/Button/TransparentButton";
import { Carousel } from "3d-react-carousal";

import slide1 from "../images/slide1.jpeg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

let slides = [
    <img src={slide1} alt="1" style={{ height: "400px" }} />,
    <img src={slide2} alt="2" style={{ height: "400px" }} />,
    <img src={slide3} alt="3" style={{ height: "400px" }} />,
    <img src={slide1} alt="4" style={{ height: "400px" }} />,
    <img src={slide2} alt="5" style={{ height: "400px" }} />,
];

const slideShowImages = [fingersImage, feetImage];

const Home = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);

    return (
        <Box>
            <Nav />
            <Slideshow
                images={slideShowImages}
                imageBackgroundSrc={backgroundImage}
                containerStyles={slideShowContainerStyles}
                imageStyles={slideShowImageStyles}
                backgroundImageStyles={slideShowBackgroundStyles}
            />
            <Box
                style={{
                    height: "600px",
                    display: "flex",
                    alignItems: "center",
                    margin: isDesktop ? "40px 0px 20px 0px" : "0px 0px 30px 0px",
                    flexDirection: isDesktop ? "row" : "column",
                    height: isDesktop ? "600px" : "unset",
                }}
            >
                <FloatingImage showText={isShowMoreClicked} />

                <Box
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "30px",
                        textAlign: 'center'
                    }}
                >
                    <Typography
                        style={{ fontFamily: "Fredoka, sans- serif", direction: "rtl" }}
                        variant="h3"
                    >
                        למה הלקוחות שלנו בוחרים בי?
                    </Typography>
                    <Typography
                        style={{ fontFamily: "Fredoka, sans- serif" }}
                        variant="h6"
                    >
                        יש לנו מגוון רב של אופציות, הכל נעשה בצורה מדויקת
                    </Typography>
                    <Typography variant="subtitle1">
                        אצלנו תקבלי את הלק המקצועי ביותר, מבחינת איכות ונראות שמחזיק זמן רב
                    </Typography>
                    <TransparentButton
                        onClick={() => setIsShowMoreClicked(true)}
                        text="קבעי תור"
                    />
                </Box>
            </Box>
            <ServicesImageText />
            <Box style={{ margin: "50px 0px" }}>
                <Carousel slides={slides} autoplay={true} interval={3500} />
            </Box>
        </Box>
    );
};

const slideShowImageStyles = {
    maxWidth: "400px",
    maxHeight: "700px",
    position: "absolute",
    right: "20%",
    top: "15%",
    height: "85%",
    zIndex: "999",
};

const slideShowBackgroundStyles = {
    position: "absolute",
    top: 0,
    zIndex: "998",
    height: "100%",
};

const slideShowContainerStyles = { height: "70vh", position: "relative" };

export default Home;
