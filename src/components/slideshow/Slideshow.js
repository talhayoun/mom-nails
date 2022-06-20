import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import StyledPinkButton from "../Button/StyledPinkButton";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Slideshow = (props) => {
    const {
        containerStyles,
        imageStyles,
        backgroundImageStyles,
        images,
        imageBackgroundSrc,
    } = props;
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    const [image, setImage] = useState(images[0]);
    const imageIndex = useRef(0);

    useEffect(() => {
        let interval = setInterval(() => {
            const nextIndex = images.length == imageIndex.current + 1 ? 0 : imageIndex.current + 1;

            imageIndex.current = nextIndex;

            setImage(images[imageIndex.current]);
        }, 6000);

        return () => {
            clearInterval(interval)
        }
    }, []);
    return (
        <Box
            style={{
                minWidth: "300px",
                minHeight: "300px",
                ...containerStyles,
            }}
            className='slideshow-container'
        >
            <img className="fadeInUp" src={image} style={{ width: "100%", ...imageStyles, display: isDesktop ? "block" : "none" }} />
            <img
                className="backgroundImage"
                src={imageBackgroundSrc}
                style={{ width: "100%", ...backgroundImageStyles }}
            />
            <Box
                style={{
                    zIndex: "999",
                    position: "absolute",
                    top: isDesktop ? "30%" : '25%',
                    left: "20%",
                    display: "flex",
                    flexDirection: "column",
                    direction: "rtl",
                    gap: "15px",
                    paddingRight: isDesktop ? "0px" : '30px',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography
                    style={{
                        fontSize: "40px",
                        fontFamily: "Fredoka, sans- serif",
                    }}
                >
                    הקוסמטיקה של איריס חיון
                </Typography>
                <hr
                    style={{
                        width: "100px",
                        borderColor: "#ffd8cb",
                        borderWidth: "2px",
                        borderStyle: "solid",
                        marginRight: "initial",
                    }}
                />
                <Typography
                    style={{
                        color: "#9b9b9b",
                        fontFamily: "Miriam Libre, sans-serif",
                        fontSize: "20px",
                    }}
                    textAlign="right"
                >
                    אצלנו תמצאי את כל סוגי הלק, איכות ועיצוב וצורות לק ברמה <br />
                    הגבוה ביותר
                </Typography>
                <StyledPinkButton text="קביעת תור" />
            </Box>
        </Box>
    );
};

export default Slideshow;
