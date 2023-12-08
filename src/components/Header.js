import {AppBar, Toolbar} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import axios from "axios";
export default function Header({pageTo = (str) => {}}) {
    const handleProduct = () => {
        pageTo('/product');
    };
    const handleLogo = () => {
        pageTo('/');
    };
    const handleSignIn = () => {
        pageTo('/signin');
    };
    const handleSignUp = () => {
        pageTo('/signup');
    };
    const handleSignOut = () => {
        localStorage.removeItem('token');
        pageTo('/');
    };

    const handleProfile = () => {
        pageTo('/profile');
    };
    const [nav, setNav] = useState([
        <Button key="buttonSignIn" color="inherit" onClick={handleSignIn}>Sign In</Button>,
        <Button key="buttonSignUp" color="inherit" onClick={handleSignUp}>Sign Up</Button>
    ]);
    let tokenValue = localStorage.getItem('token') || '';
    useEffect(() => {
        tokenValue = localStorage.getItem('token') || '';
    });
    useEffect(() => {
        if(tokenValue !== '') {
            setNav([
                <Button key="buttonSignProfile" color="inherit" onClick={handleProfile}>Profile</Button>,
                <Button key="buttonSignOut" color="inherit" onClick={handleSignOut}>Sign Out</Button>
            ]);
        } else if(tokenValue === '') {
            setNav([
                <Button key="buttonSignIn" color="inherit" onClick={handleSignIn}>Sign In</Button>,
                <Button key="buttonSignUp" color="inherit" onClick={handleSignUp}>Sign Up</Button>
            ])
        }
    }, [tokenValue]);
    return (
        <Box sx={{flexGrow: 1}} component={"header"}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" onClick={handleLogo}>
                        개가좋다
                    </Typography>
                    <Button color="inherit" sx={{marginLeft: 'auto'}} onClick={handleProduct}>Product</Button>
                    {nav}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
