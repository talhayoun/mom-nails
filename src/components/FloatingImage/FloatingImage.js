import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import DotsImage from "../../images/dots.png";
import faceFingers from "../../images/face-fingers.png";
import lakImage from "../../images/lak.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const items = [
    {
        image: DotsImage,
        imagesStyle: { position: "absolute", left: "45%", top: "20%" },
        imageTwo: faceFingers,
    },
    {
        text: "TEXT",
    },
];

const FloatingImage = (props) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <Box
            className={props.className}
            style={{ position: "relative", height: "100%", width: "100%" }}
        >
            <Carousel
                sx={{ height: "100%" }}
                navButtonsAlwaysInvisible={true}
                indicatorIconButtonProps={{ style: { display: "none" } }}
            >
                {items.map((currentItem, i) => {
                    return !currentItem.text ? (
                        <>
                            <img
                                src={DotsImage}
                                style={{
                                    position: "absolute",
                                    left: isDesktop ? "45%" : "5%",
                                    top: isDesktop ? "20%" : '30%',
                                }}
                            />
                            <img
                                src={faceFingers}
                                style={{
                                    position: "absolute",
                                    left: isDesktop ? "55%" : "15%",
                                    top: isDesktop ? "0" : "15%",
                                }}
                            />
                        </>
                    ) : (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                minHeight: "300px",
                                direction: "rtl",
                                padding: "50px",
                                gap: "10px",
                            }}
                        >
                            <Typography
                                style={{ fontFamily: "Fredoka, sans- serif" }}
                                variant={"h4"}
                            >
                                איכות, שירות, מקצועיות
                            </Typography>
                            <Typography
                                style={{ fontFamily: "Fredoka, sans- serif" }}
                                variant={"subtitle1"}
                            >
                                אצלנו קיים מגוון אופציות כגון טיפולי פדיקור ייחודים ורפואיים,
                                טיפוח ציפורניים ועיצובים מרהיבים.
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: "Fredoka, sans- serif",
                                    marginBottom: "50px",
                                }}
                                variant={"subtitle1"}
                            >
                                אצלנו את תצאי מרוצה והלק יחזיק לאורך זמן רב
                            </Typography>
                            <Typography
                                style={{ fontFamily: "Fredoka, sans- serif" }}
                                variant={"subtitle1"}
                            >
                                אצלנו קיים מגוון אופציות כגון טיפולי פדיקור ייחודים ורפואיים,
                                טיפוח ציפורניים ועיצובים מרהיבים.
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: "Fredoka, sans- serif",
                                    marginBottom: "20px",
                                }}
                                variant={"subtitle1"}
                            >
                                אצלנו את תצאי מרוצה והלק יחזיק לאורך זמן רב
                            </Typography>
                            <img src={lakImage} style={{ height: "350px" }} />
                        </div>
                    );
                })}
            </Carousel>
        </Box>
    );
};
export default FloatingImage;
