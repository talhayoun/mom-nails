import { Box } from "@mui/system"
import IconText from "./IconText"
import FingerManicureSvg from "../../Icons/SVG/FingerManicureSvg";
import NailArtSvg from "../../Icons/SVG/NailArtSvg";
import WaxSvg from "../../Icons/SVG/WaxSvg";
import PedicureSvg from "../../Icons/SVG/PedicureSvg";
import fingersFlower from "../../images/fingers-flower.jpg";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const iconTexts = [
    {
        title: "פדיקור",
        subtext: "אצלנו תמצאי את הפדיקור הכי מקצועי",
        Icon: PedicureSvg,
    },
    {
        title: "מניקור",
        subtext: "אצלנו תמצאי את המניקור הכי מקצועי",
        Icon: FingerManicureSvg,
    },
    {
        title: "קישוטים",
        subtext: "אצלנו תמצאי את הקישוטים הכי יפים",
        Icon: NailArtSvg,
    },
    {
        title: "פראנץ",
        subtext: "אצלנו תמצאי את פראנץ הכי מקצועי",
        Icon: WaxSvg,
    },
];


const ServicesImageText = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Box style={{ display: 'flex', flexDirection: isDesktop ? "row" : 'column' }}>
            <Box
                style={{
                    maxWidth: isDesktop ? "50%" : "100%",
                    width: "100%",
                    display: isDesktop ? "grid" : "block",
                    gridTemplateColumns: "1fr 1fr",
                }}
            >
                {iconTexts.map((iconText) => (
                    <IconText
                        Icon={iconText.Icon}
                        title={iconText.title}
                        subtext={iconText.subtext}
                    />
                ))}
            </Box>
            <img src={fingersFlower} />
        </Box>
    )
}

export default ServicesImageText;