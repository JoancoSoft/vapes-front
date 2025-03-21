'use client';
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import './globalAnimations.css';

export default function Home() {

  return (
    <>
      <Box textAlign="center">
        <Typography variant="h1" mt={4}>Business name</Typography>
      </Box>

      <Grid container spacing={4} mx={4} mt={8}>
        <Grid size={{ xs: 12, md: 4, }} sx={{ py: 2, px: 2, height: 550, width: 300, display: "flex", flexDirection: "column", alignItems: " center", bgcolor: "background.card", borderRadius: 5 }} >

          <Image alt="vape-name" width={300} height={300} src="/placeholder.svg" />
          <Box width={300} sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography variant="subtitle">Puffs</Typography>
            <Typography variant="subtitle">Marca</Typography>
          </Box>

          <Box width={300} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", mt: 2 }}>
            <Typography variant="body1">Nombre</Typography>
            <Box overflow="hidden">
              <Typography
                variant="body1"
                id="vape-flavour-text"
                sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  position: 'relative',
                }}
                title="Sabor watermelon ice & watermelon mint sweet bla bla bla"
              >
                Sabor watermelon ice & watermelon mint sweet bla bla bla
              </Typography>
            </Box>
          </Box>

        </Grid>
      </Grid >
    </>
  );
}
