import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";
import Box from "@mui/material/Box";

export default function Footer(props = { mt: 8, mb: 4 }) {
    return (
        <Box sx={{position: 'fixed', bottom: 0, width: "100%", borderTop: "1px solid gray", minHeight: "100px", padding: "10px"}} component={"footer"}>
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    개가좋다
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
}