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

function ProductAddForm() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <title>상품 등록 페이지</title>
        </head>
        <body>
          <h1>상품 등록 페이지</h1>
          <form action="/insert" method="post" encType="multipart/form-data">
            상품 이름 : <input type="text" name="title" /><br />
            상품 사진 : <input type="file" name="images" /> <br />
            가격 등록 : <input type="number" names="prices" /><br/>
            <textarea rows="5" cols="40" name="content"></textarea><br />
            <input type="submit" value="추가" />
          </form>
        </body>
      </html>
    );
}
const defaultTheme = createTheme();

export default function SubmitOn() {
    const handleSubmit = (event) => {
      event.preventDefault();
      let backend = process.env.REACT_APP_BACKEND_URL;
      const data = new FormData(event.currentTarget);
  
      const productsData = {
        title: data.get('title'),
        images: data.get('images'),
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
        <ProductAddForm onSubmit={handleSubmit} />
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    );
}
