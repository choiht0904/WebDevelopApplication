//최종. ui설정x
import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const theme = createTheme();

const ProductCard = ({ item, showDetail }) => (
  <Grid item key={item.id} xs={12} sm={6} md={4}>
    <Card
      style={{ maxWidth: 345, maxHeight:600,margin: theme.spacing(2), cursor: 'pointer' }}
      onClick={() => showDetail(item.id)}
    >
      <CardContent>
        <img src={item.image} alt={item.title} style={{ width: '100%'}} />
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

  const showDetail = (productId) => {
    console.log(`Navigate to product detail page: ${productId}`);
    window.location.href = `/product/${productId}`;
  };

  const getProducts = async () => {
    try {
      let url = 'http://54.180.2.98:59184/products';
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

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" style={{ marginTop: theme.spacing(4) }}>
        <Typography variant="h4" component="h1" gutterBottom>
          상품 목록
        </Typography>
        <Grid container spacing={2}>
          {productList.map((product) => (
            <ProductCard key={product.id} item={product} showDetail={showDetail} />
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ProductListPage;