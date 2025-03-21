'use client'
import { Typography, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

import '@/static/globalAnimations.css';

export default function ProductCard() {
    return (
        <Grid id="product-card" size={{ xs: 12, md: 8, lg: 4 }} sx={{ pb: 0, pt: 1, px: 2, height: 550, maxWidth: "fit-content", display: "flex", flexDirection: "column", alignItems: "center", bgcolor: "background.card", borderRadius: 5 }} >
            <Image alt="vape-name" width={300} height={300} src="/placeholder.svg" />
            <Box width={300} sx={{ display: "flex", justifyContent: "space-between", px: 1, mt: 2 }}>
                <Typography variant="subtitle">Puffs</Typography>
                <Typography variant="subtitle">Marca</Typography>
            </Box>
            <Box width={300} sx={{ flexDirection: "column", alignContent: 'start', justifyContent: "space-between", px: 1, mt: 2 }}>
                <Typography variant="body1">Nombre</Typography>

                <Box sx={{ display: "flex", mt: 2, p: 1, height: 'fit-content', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    <Typography variant="body1" id="vape-flavour-text">
                        Sabor watermelon ice & watermelon mint sweet bla bla bla
                    </Typography>
                </Box>
            </Box>

            <Button variant="contained" sx={{ borderRadius: 5, width: "50%", mt: 2 }} id="vape-popular-button">
                <Typography variant="button">Consultar</Typography>
            </Button>
        </Grid>
    );
}