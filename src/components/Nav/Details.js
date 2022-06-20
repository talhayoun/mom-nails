import { Box, Typography } from "@mui/material";
import styles from "./Details.module.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Details = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <Box
            className={styles.container}
            style={{
                padding: isDesktop ? styles.container.padding : "5px",
                flexDirection: isDesktop ? "row" : "column",
                gap: isDesktop ? styles.container.gap : "20px"
            }}
        >
            <Typography variant="subtitle2">
                <span style={{ fontWeight: "bold", paddingLeft: "10px" }}>
                    מספר טלפון:
                </span>
                054-800-0915
            </Typography>
            <Typography variant="subtitle2">
                <span style={{ fontWeight: "bold", paddingLeft: "10px" }}>
                    שעות עבודה:
                </span>
                א'-ו', 10:00 - 18:00
            </Typography>
        </Box>
    );
};

export default Details;
