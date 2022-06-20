import { Button } from "@mui/material";
import styles from "./TransparentButton.module.css"
const TransparentButton = (props) => {
    return (
        <Button
            onClick={props.onClick}
            className={styles.button}
            variant="contained"
            style={{
                backgroundColor: "transparent",
                color: "#151515",
                borderRadius: "25px",
                boxShadow: "none",
                width: "160px",
                height: '50px',
                padding: "11px 32px",
                fontFamily: "Fredoka, sans-serif",
                fontSize: "18px",
                marginTop: "30px",
                border: '2px solid #ffd8cb',
                ...props.style,
            }}
        >
            {props.text}
        </Button>
    );
};


export default TransparentButton;