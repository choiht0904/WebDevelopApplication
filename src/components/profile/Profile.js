import axios from "axios";
import {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {FormControl, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const defaultTheme = createTheme();

export default function Profile({pageTo = (str) => {}}) {
    if(localStorage.getItem("token") === null) {
        alert("You need to sign in before continuing");
        pageTo("/signin");
    }

    const backend = process.env.REACT_APP_BACKEND_URL;
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        axios.get(`http://${backend}/users`,
            {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            .then(res => {
                setUserData(prevUserData => ({
                    ...prevUserData,
                    name: res.data.user.name,
                    email: res.data.user.email,
                    password: res.data.user.password
                }));
            })
            .catch(err => {
                pageTo("/");
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://${backend}/users`, {
                name: userData.name,
                email: userData.email,
                password: userData.password,
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            })
            .then(res => {
                alert("Edit Profile Success");
                alert("You need to sign in again")
                localStorage.removeItem("token");
                pageTo('/signin');
            })
            .catch(err => {
                alert("Edit Profile Fail");
            });
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                    value={userData.name}
                                    onChange={(e) => setUserData((prevUserData) => ({...prevUserData, name: e.target.value}))}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={userData.email}
                                    onChange={(e) => setUserData((prevUserData) => ({ ...prevUserData, email: e.target.value }))}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl sx={{width: "100%"}} variant="outlined">
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <OutlinedInput
                                        required
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        value={userData.password}
                                        onChange={(e) => setUserData((prevUserData) => ({ ...prevUserData, password: e.target.value }))}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    edge="end">
                                                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="password"/>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Edit Profile
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}