import { Typography, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

export default function PopularProductCard() {
    return (
        <Grid size={{ xs: 12, md: 8, lg: 4 }} sx={{ pb: 0, pt: 1, px: 2, height: 650, maxWidth: 370, display: "flex", flexDirection: "column", alignItems: "center", bgcolor: "background.paper", borderRadius: 5, border: '2px solid #FDBF08' }} >
            <Box width={350} height={350} sx={{ zIndex: -1, transform: "translateY(15%)", bgcolor: "text.primary", filter: "blur(200px)", opacity: 0.5, position: 'absolute' }} />
            <Box width="fit-content" height={50} sx={{ zIndex: 1, background: 'linear-gradient(90deg,red 0%,#F1862F 50%)', position: 'absolute', transform: 'rotate(-10deg)', display: 'flex', justifyContent: 'space-evenly', borderRadius: 5, alignItems: 'center', px: 2 }}>
                <Typography variant="h1" sx={{}}>&#x1F525; Más vendido</Typography>
            </Box>
            <Image alt="vape-name" width={350} height={350} src="/placeholder.svg" />
            <Box width={300} sx={{ display: "flex", justifyContent: "space-between", px: 1, mt: 2 }}>
                <Typography variant="subtitle">Puffs</Typography>
                <Typography variant="subtitle">Marca</Typography>
            </Box>
            <Box width={300} sx={{ flexDirection: "column", alignContent: 'start', justifyContent: "space-between", px: 1, mt: 2 }}>
                <Typography variant="body1">Nombre</Typography>

                <Box sx={{ display: "flex", overflow: 'hidden', textOverflow: 'ellipsis', mt: 2, height: 'fit-content', p: 1 }}>
                    <Typography variant="body1" id="vape-flavour-text"
                        sx={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        Sabor watermelon ice & watermelon mint sweet bla bla bla
                    </Typography>
                </Box>
            </Box>

            <Button variant="containedPopular" sx={{ borderRadius: 5, mt: 2, mb: 2 }}>
                <Typography variant="popularButton">Consultar</Typography>
            </Button>

        </Grid>
    );
}