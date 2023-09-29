import { Box, Grid } from "@mui/material";

export default function HomePage() {
    return (
        <Grid container>
            <Grid item xs={6}
                sx={
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '500px'
                    }
                }
            >
                ola
            </Grid>
            <Grid item xs={6}>mund</Grid>
        </Grid>
    )
}