import CardSkeleton from './CardSkeleton';
import Grid from "@mui/material/Grid2";

export default function Gridskeleton() {
    return (
        <Grid container spacing={4} mx={8} mt={16} justifyContent="center" alignItems="center" alignContent="center">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </Grid>
    );
}