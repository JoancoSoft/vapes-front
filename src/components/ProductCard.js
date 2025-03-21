import { Typography, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

import Image from "next/image";

import '@/static/globalAnimations.css';

export default function ProductCard({ key, product }) {

    const handleWaMe = (event) => {
        event.preventDefault();

        const message = 'Hola, me interesa el producto. ¿Podrías darme más información?';
        const encodedMsg = encodeURIComponent(message);

        window.open(`https://api.whatsapp.com/send?phone=5491130921112&text=${encodedMsg}`, '_blank');
    }


    return (

        <Grid variant="productCard" size={{ xs: 12, md: 8, lg: 4 }} sx={{
            pb: 0,
            pt: 1,
            px: 2,
            height: '100%',
            width: {
                xs: 300,
                sm: 350,
                md: 370,

            },
            maxWidth: "fit-content",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "background.card",
            borderRadius: 5,
            '&:hover': {
                transition: "all 1s ease",
                transform: "scale(1.05)",
            }
        }} >
            <Box sx={{ width: { xs: 200, sm: 320, md: 340, }, height: { xs: 200, sm: 320, md: 340, }, position: 'relative', }}>
                <Image alt="vape-name" layout="fill" src="/placeholder.svg" />
            </Box>
            <Box sx={{ width: '100%', display: "flex", justifyContent: "space-between", px: 1, mt: 2 }}>
                <Typography variant="subtitle">Puffs</Typography>
                <Typography variant="subtitle">Marca</Typography>
            </Box>
            <Box sx={{ width: '100%', flexDirection: "column", alignContent: 'start', justifyContent: "space-between", px: 1, mt: 2 }}>
                <Typography variant="body1">Nombre</Typography>

                <Box sx={{ display: "flex", mt: 2, py: 1, height: 'fit-content', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    <Typography variant="body1" id="vape-flavour-text" sx={{ display: 'inline', textOverflow: 'ellipsis' }}>
                        Sabor watermelon ice & watermelon mint sweet bla bla bla
                    </Typography>
                </Box>
            </Box>

            <Button variant="contained" sx={{ borderRadius: 5, mt: 2, mb: 2 }} id="vape-popular-button" onClick={handleWaMe}>
                <Typography variant="button">Consultar</Typography>
            </Button>
        </Grid>
    );
}