import { useState, useEffect, useRef } from "react";
import { Typography, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProductImage from "./ProductImage";
import '@/static/globalAnimations.css';

export default function PopularProductCard({ index, product }) {
    const [animation, setAnimation] = useState('');
    const elementRef = useRef(null);

    const { nombre, imagen, marca, sabor, puffs } = product;

    const handleWaMe = (event) => {
        event.preventDefault();
        const message = `Hola, me interesa el ${marca} ${nombre} de ${puffs}puffs sabor ${sabor}. ¿Podrías darme más información?`;
        const encodedMsg = encodeURIComponent(message);
        window.open(`https://api.whatsapp.com/send?phone=541153774095&text=${encodedMsg}`, '_blank');
    }

    useEffect(() => {
        const currentElement = elementRef.current;
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

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return (
        <Grid
            size={{
                xs: 12,
                md: 8,
                lg: 4
            }}
            sx={{
                pb: 0,
                pt: 1,
                px: 2,
                height: '100%',
                width: {
                    xs: 300,
                    sm: 350,
                    md: 370
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "background.transparent",
                borderRadius: 5,
                border: '2px solid #FDBF08',
                animation: 'pulse 2s infinite',
                minWidth: 300,
            }}
            ref={elementRef}>
            <Box width={350} height={350} id="vape-popular-pulse" sx={{ zIndex: -1, bgcolor: "#FFFFFF", filter: "blur(100px)", opacity: 0.5, position: 'absolute' }} />

            <Box width="fit-content" height="auto" sx={{ zIndex: 1, background: 'linear-gradient(90deg,red 0%,#F1862F 50%)', position: 'absolute', transform: 'rotate(-10deg)', display: 'flex', justifyContent: 'space-evenly', borderRadius: 5, alignItems: 'center', px: 2 }}>
                <Typography variant="h2">
                    &#x1F525; Más vendido
                </Typography>
            </Box>

            <ProductImage src={imagen} alt={`${marca} - ${nombre}`} priority={index < 2} />

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
        </Grid >
    );
}