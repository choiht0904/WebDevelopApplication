import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

export default function Footer(props = { mt: 8, mb: 4 }) {
    return (
        <div className={Footer}>
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    개가좋다
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    );
}