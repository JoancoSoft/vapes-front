import { Box } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductImage({ src, alt, priority }) {
    const [imageSrc, setImageSrc] = useState('/default-image.png');

    useEffect(() => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => setImageSrc(src);
        img.onerror = () => setImageSrc('/default-image.png');
    }, [src]);

    return (
        <Box sx={{ width: { xs: 200, sm: 320, md: 340 }, height: { xs: 200, sm: 320, md: 340 }, position: 'relative', overflow: 'hidden', borderRadius: 5 }}>
            <Image alt={alt} src={imageSrc} fill={true} priority={priority} sizes="(max-width: 600px) 200px, (max-width: 960px) 320px, 340px" />
        </Box>
    );
}