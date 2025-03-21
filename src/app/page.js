'use client';
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProductCard from "@/components/ProductCard";
import PopularProductCard from "@/components/PopoularProductCard";
import SkeletonGrid from "@/components/SkeletonGrid";

// import useAuthStore from "@/store/authStore";
// import useProductsStore from "@/store/productsStore";
import { useEffect, useState } from "react";

export default function Home() {

  // const { auth } = useAuthStore();
  // const { products, getProducts } = useProductsStore();
  const [isLoading, setIsLoading] = useState(true);

  // const fetchData = async () => {
  //   await auth().then(
  //     async () => await getProducts().then(
  //       () => setIsLoading(false)
  //     ));
  // }

  useEffect(() => {
    // fetchData();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Box textAlign="center">
        <Typography variant="h1" mt={4}>Business name</Typography>
        <Typography variant="caption">Beta1.2</Typography>
      </Box>

      {isLoading ? <SkeletonGrid /> :
        <Grid container spacing={4} mx={8} mt={16} justifyContent="center" alignItems="center" alignContent="center">
          <PopularProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          {/* {products.map((product, index) => index == 0 ? <PopularProductCard key={index} product={product} /> : <ProductCard key={index} product={product} />)} */}
        </Grid >}

    </>
  );
}
