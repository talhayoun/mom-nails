import { Button } from "@mui/material";
import styles from "./StyledPinkButton.module.css"
const StyledPinkButton = (props) => {
    return (
        <Button
            onClick={props.onClick}
            className={styles.pinkButton}
            variant="contained"
            style={{
                backgroundColor: "#ffd8cb",
                color: "#151515",
                borderRadius: "25px",
                boxShadow: "none",
                width: "160px",
                padding: "11px 32px",
                fontFamily: "Fredoka, sans-serif",
                fontSize: "18px",
                marginTop: "30px",
                ...props.style,
            }}
        >
            {props.text}
        </Button>
    );
};


export default StyledPinkButton;