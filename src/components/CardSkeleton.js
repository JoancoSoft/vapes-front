import { Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function CardSkeleton() {

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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "background.card",
            borderRadius: 5,
        }} >
            <Skeleton variant="rectangular" sx={{ width: { xs: 300, sm: 350, md: 370, }, minHeight: 600, opacity: .9 }} />

        </Grid >
    );
}