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
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

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
    <form action="/insert" method="post" encType="multipart/form-data">
      <Typography component="h1" variant="h5">
        상품 등록 페이지
      </Typography>
      <TextField label="상품 이름" type="text" name="title" fullWidth margin="normal" required />
      <TextField label="상품 사진" type="file" name="images" fullWidth margin="normal" required />
      <TextField label="가격" type="number" name="prices" fullWidth margin="normal" required />
      <TextField
        label="상품 설명"
        multiline
        rows={5}
        cols={40}
        name="content"
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        추가
      </Button>
    </form>
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

    axios
      .post(`http://${backend}/products`, productsData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSearch = (query) => {
    // Add logic to handle the search query (e.g., send request to the backend)
    console.log('Search Query:', query);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <SearchBar onSearch={handleSearch} />
        <ProductAddForm onSubmit={handleSubmit} />
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = () => {
    // Pass the search query to the parent component
    onSearch(searchQuery);
  };

  return (
    <div>
      <TextField
        label="검색"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <IconButton color="primary" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </div>
  );
}
