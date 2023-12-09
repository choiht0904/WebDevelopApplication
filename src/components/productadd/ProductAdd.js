import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";


function Copyright(props) {
  return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          <Link color="inherit" href="https://mui.com/">
              개가좋다
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
      </Typography>
  );
}

const defaultTheme = createTheme();
export default function SubmitOn() {
    const [imageSrc, setImageSrc] = React.useState('');
    const FileSelected = () => {
        
  
        const handleFileChange = (event) => {
        const file = event.target.files[0];
  
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = e =>{
                setImageSrc(e.target.result)
                console.log(file.path)
            };
        }
    };
  
    return (
      <Button
      variant="contained"
      component="label">

        <input type="file" onChange={handleFileChange} />
        {imageSrc && <img src={imageSrc} alt="Uploaded"/>}
      </Button>
    );
  };
    const handleSubmit = (event) => {
      event.preventDefault();
      let backend = process.env.REACT_APP_BACKEND_URL;
      const data = new FormData(event.currentTarget);
  
        
        const productsData = {
          title: data.get('title'),
          images: imageSrc,
          prices: data.get('prices'),
          content: data.get('content'),
        };
  
      axios.post(`http://${backend}/products`, productsData)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.error(err);
        });
    };
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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        상품 등록
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-title"
                                    name="title"
                                    required
                                    fullWidth
                                    id="title"
                                    label="Title"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="images"
                                    label="Images Address"
                                    name="images"
                                    autoComplete="images"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="prices"
                                    label="Prices"
                                    type="prices"
                                    id="prices"
                                    autoComplete="new-prices"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="content"
                                    label="Content"
                                    type="content"
                                    id="content"
                                    autoComplete="new-content"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            등록하기
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
