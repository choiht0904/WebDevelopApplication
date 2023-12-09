import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";
import Box from "@mui/material/Box";

export default function Footer(props = { mt: 8, mb: 4 }) {
    return (
        <Box sx={{position: 'sticky', bottom: 0, width: "100%", marginTop: "100px", borderTop: "1px solid gray", minHeight: "100px", maxHeight: "100px", padding: "10px", backgroundColor: "white", zIndex: 100}} component={"footer"}>
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="https://web.kangnam.ac.kr/index.do">
                    개가좋다
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
}