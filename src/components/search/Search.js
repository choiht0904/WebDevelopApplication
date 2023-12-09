import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const theme = createTheme();

const ProductCard = ({ item, showDetail }) => (
  <Grid item key={item.id} xs={12} sm={6} md={4}>
    <Card
      style={{
        maxWidth: 345,
        maxHeight: 600,
        margin: theme.spacing(2),
        cursor: 'pointer',
        overflow: 'auto',
      }}
      onClick={() => showDetail(item.id)}
    >
      <CardContent>
        <img src={item.images} alt={item.title} style={{ width: '100%' }} />
        <Typography gutterBottom variant="h6" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          가격: {item.prices}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          설명: {item.content}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

const ProductListPage = () => {
  const [productList, setProductList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const showDetail = (productId) => {
    console.log(`Navigate to product detail page: ${productId}`);
    window.location.href = `/product/${productId}`;
  };

  const getProducts = async () => {
    try {
      let url = 'http://54.180.2.98:56237/products';
      let response = await fetch(url);
      let data = await response.json();
      setProductList(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // 사용자의 입력에 따라 상품 목록 필터링
  const searchedProducts = productList.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" style={{ marginTop: theme.spacing(4) }}>
        <Typography variant="h4" component="h1" gutterBottom>
          BEST ITEM
        </Typography>
        {/* 검색 input 추가 */}
        <Box sx={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <SearchIcon sx={{ color: 'primary.active', mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Search"
              variant="standard"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}/>
          </Box>
        </Box>
        <Grid container spacing={2}>
          {searchedProducts.map((product) => (
            <ProductCard key={product.id} item={product} showDetail={showDetail} />
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ProductListPage;
