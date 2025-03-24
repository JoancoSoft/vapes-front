'use client';
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProductCard from "@/components/ProductCard";
import PopularProductCard from "@/components/PopoularProductCard";
import SkeletonGrid from "@/components/SkeletonGrid";

import useProductsStore from "@/store/productsStore";
import { useEffect, useState, useCallback } from "react";

export default function Home() {

  const { products, getProducts } = useProductsStore();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    await getProducts().then(() => setIsLoading(false));
  }, [getProducts]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Box textAlign="center">
        <Typography variant="h1" mt={4}>Vapes</Typography>
        <Typography variant="caption">Beta1.7.1</Typography>
      </Box>

      {
        isLoading
          ?
          <SkeletonGrid />
          :
          <Grid container spacing={4} mx={8} mt={16} justifyContent="center" alignItems="center" alignContent="center" sx={{ userSelect: 'none' }}>
            {products.map((product, index) => product.es_mas_vendido ? <PopularProductCard key={index} index={index} product={product} /> : <ProductCard key={index} index={index} product={product} />)}
          </Grid >
      }

    </>
  );
}
