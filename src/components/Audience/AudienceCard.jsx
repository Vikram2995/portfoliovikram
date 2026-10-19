import {
    Box,
    Button,
    Typography,
} from "@mui/material";
import CustomButton from "../Common/CustomButton";

function AudienceCard({
    image,
    title,
    subtitle,
    features,
    buttonText,
}) {
    return (
        <Box sx={{
            width: "100%",
            background: "var(--card-bg)",
            boxShadow: "var(--card-shadow)",
            borderRadius: "1.5rem",
            padding: "2rem 3.875rem",
            textAlign: "center",
            border: "1px solid var(--card-border)",
        }}>
            <Box component="img" sx={{ display: "block", width: "100%", maxWidth: "7.75rem", margin: "0 auto" }}
                src={image}
                alt={title}
            />

            <Box sx={{ textAlign: "center", mt: "1.5rem" }}>
                <Typography sx={{ mb: "2px", fontSize: "2rem", fontWeight: "600", color: "var(--text)" }}>
                    {title}
                </Typography>

                <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "400", color: "var(--text-light)" }}>
                    {subtitle}
                </Typography>
            </Box>

            <Box sx={{ mt: "1.5rem", display: "flex", flexWrap: "wrap", rowGap: "0.5rem" }}>
                {features.map((item, index) => (
                    <Typography sx={{ backgroundColor: "var(--bg)", width: "100%", borderRadius: "9999px", padding: "0.75rem 1rem", display: "flex", alignItems: "center,", columnGap: "1rem", color: "var(--text)" }} key={index}>
                        <Typography variant="span" sx={{ width: "1.5rem", height: "1.5rem", backgroundColor: "rgba(0, 169, 157, 0.2)", borderRadius: "9999px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.325 7.01458L0 3.68958L0.83125 2.85833L3.325 5.35208L8.67708 0L9.50833 0.83125L3.325 7.01458Z" fill="#00A99D" />
                            </svg>

                        </Typography> {item}
                    </Typography>
                ))}
            </Box>
            <CustomButton text={buttonText} />


        </Box>
    );
}

export default AudienceCard;