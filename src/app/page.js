import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProductCard from "@/components/ProductCard";
import PopularProductCard from "@/components/PopoularProductCard";

export default function Home() {

  return (
    <>
      <Box textAlign="center">
        <Typography variant="h1" mt={4}>Business name</Typography>
        <Typography variant="caption">Beta1.1</Typography>
      </Box>

      <Grid container spacing={4} mx={8} mt={16} justifyContent="center" alignItems="center" alignContent="center">
        <PopularProductCard />

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </Grid >

    </>
  );
}
