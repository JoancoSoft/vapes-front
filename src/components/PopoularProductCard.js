import { useState, useEffect, useRef } from "react";
import { Typography, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import '@/static/globalAnimations.css';

export default function PopularProductCard({ index, product }) {
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
        <Grid size={{ xs: 12, md: 8, lg: 4 }} sx={{ pb: 0, pt: 1, px: 2, height: '100%', width: { xs: 300, sm: 350, md: 370 }, display: "flex", flexDirection: "column", alignItems: "center", bgcolor: "background.paper", borderRadius: 5, border: '2px solid #FDBF08', animation: 'pulse 2s infinite' }} ref={elementRef}>
            <Box width={350} height={350} id="vape-popular-pulse" sx={{ zIndex: -1, bgcolor: "text.primary", filter: "blur(100px)", opacity: 0.5, position: 'absolute' }} />
            {/* <Box width={350} height={350} id="vape-popular-pulse" sx={{ zIndex: -1, bgcolor: "text.primary", filter: "blur(70px)", opacity: 0.4, position: 'absolute' }} /> */}

            <Box width="fit-content" height="auto" sx={{ zIndex: 1, background: 'linear-gradient(90deg,red 0%,#F1862F 50%)', position: 'absolute', transform: 'rotate(-10deg)', display: 'flex', justifyContent: 'space-evenly', borderRadius: 5, alignItems: 'center', px: 2 }}>
                <Typography variant="h2" sx={{ fontSize: { xs: 20, sm: 30, md: 40 } }}>
                    &#x1F525; Más vendido
                </Typography>
            </Box>

            <Box sx={{ width: { xs: 200, sm: 320, md: 340 }, height: { xs: 200, sm: 320, md: 340 }, position: 'relative', overflow: 'hidden', borderRadius: 5 }}>
                <Image alt={nombre} src={imagen ? imagen : '/default-image.png'} fill={true} priority={index < 2} sizes="(max-width: 600px) 200px, (max-width: 960px) 320px, 340px" />
            </Box>

            <Box sx={{ width: '100%', display: "flex", justifyContent: "space-between", px: 1, mt: 2 }}>
                <Typography variant="subtitle">{puffs}<Typography variant="caption">puffs</Typography></Typography>
                <Typography variant="subtitle">{marca}</Typography>
            </Box>
            <Box sx={{ width: '100%', flexDirection: "column", alignContent: 'start', justifyContent: "space-between", px: 1, mt: 2 }}>
                <Typography variant="body1">{nombre}</Typography>

                <Box sx={{ display: "flex", mt: 2, p: 1, height: 'fit-content', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    <Typography variant="body1" id={animation}>
                        {sabor}
                    </Typography>
                </Box>
            </Box>

            <Button variant="containedPopular" sx={{ borderRadius: 5, mt: 2, mb: 2 }} onClick={handleWaMe}>
                <Typography variant="popularButton">Consultar</Typography>
            </Button>
        </Grid>
    );
}