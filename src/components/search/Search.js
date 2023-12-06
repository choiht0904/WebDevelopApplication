/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Container, Grid, Card, CardContent, CardMedia, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme();

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const backend = process.env.REACT_APP_BACKEND_URL;
        const response = await axios.get(`http://${backend}/products`);
        console.log('Data from server:', response.data);//데이터 정상적으로 받아오고  있는지..
        setProducts(response.data.products); // 서버에서 받은 데이터에서 products 배열만 추출
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" style={{ marginTop: theme.spacing(4) }}>
        <Typography variant="h4" component="h1" gutterBottom>
          상품 목록
        </Typography>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card style={{ maxWidth: 345, margin: theme.spacing(2) }}>
                <CardMedia
                  style={{ height: 140 }}
                  image={product.images}
                  title={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    가격: ${product.prices}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    설명: {product.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ProductListPage;
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Container, Grid, Card, CardContent, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme();

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const backend = process.env.REACT_APP_BACKEND_URL;
        const response = await axios.get(`http://${backend}/products`);
        console.log('Data from server:', response.data);

        // products 배열이 정의되지 않았을 때 대비하여 초기값 설정
        setProducts(response.data.products || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" style={{ marginTop: theme.spacing(4) }}>
        <Typography variant="h4" component="h1" gutterBottom>
          상품 목록
        </Typography>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card style={{ maxWidth: 345, margin: theme.spacing(2) }}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    가격: ${product.prices}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    설명: {product.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ProductListPage;
