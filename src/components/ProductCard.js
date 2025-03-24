import { Typography, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import '@/static/globalAnimations.css';

export default function ProductCard({ index, product }) {
    const [animation, setAnimation] = useState('');
    const elementRef = useRef(null);

    const { nombre, imagen, marca, sabor, puffs } = product;

    const handleWaMe = (event) => {
        event.preventDefault();
        const message = `Hola, me interesa el ${marca} ${nombre} de ${puffs}puffs sabor ${sabor}. ¿Podrías darme más información?`;
        const encodedMsg = encodeURIComponent(message);
        window.open(`https://api.whatsapp.com/send?phone=5491130921112&text=${encodedMsg}`, '_blank');
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimation('vape-flavour-text-animate');
                } else {
                    setAnimation('');
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <Grid size={{ xs: 12, md: 8, lg: 4 }} sx={{
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
            },
            border: '2px solid',
            borderColor: 'primary.main',
            minWidth: 300,
        }}
            ref={elementRef}
        >
            <Box sx={{ width: { xs: 200, sm: 320, md: 340 }, height: { xs: 200, sm: 320, md: 340 }, position: 'relative', overflow: 'hidden', borderRadius: 5 }}>
                <Image alt={nombre} src={imagen ? imagen : '/default-image.png'} fill={true} priority={index < 2} sizes="(max-width: 600px) 200px, (max-width: 960px) 320px, 340px" />
            </Box>
            <Box sx={{ width: '100%', display: "flex", justifyContent: "space-between", px: 1, mt: 2 }}>
                <Typography variant="subtitle">{puffs}<Typography variant="caption">puffs</Typography></Typography>
                <Typography variant="subtitle">{marca}</Typography>
            </Box>
            <Box sx={{ width: '100%', flexDirection: "column", alignContent: 'start', justifyContent: "space-between", px: 1, mt: 2 }}>
                <Typography variant="body1">{nombre}</Typography>
                <Box sx={{ display: "flex", mt: 2, py: 1, height: 'fit-content', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    <Typography variant="body1" id={animation} sx={{ display: 'inline', textOverflow: 'ellipsis' }}>
                        {sabor}
                    </Typography>
                </Box>
            </Box>
            <Button variant="contained" sx={{ borderRadius: 5, mt: 2, mb: 2 }} id="vape-popular-button" onClick={handleWaMe}>
                <Typography variant="button">Consultar</Typography>
            </Button>
        </Grid >
    );
}