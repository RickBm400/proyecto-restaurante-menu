// Material UI Components
import {
    Box,
    Grid,
    Card,
    CardContent,
    CardActions, Typography,
    Button
} from "@mui/material";

// Material UI icons
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function HomeCard () { 

    const gridStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px',
    }
    
    const cardStyle = {
        width: '75%', height: '70%', display: 'flex', alignSelf: 'center', flexDirection: 'column ', borderRadius: '10px'
    }

    return (
        <Grid container>
            <Grid item 
                xs={12}
                md={6}
                sx={ gridStyle }
            >
                <Card sx={{ ...cardStyle,  padding: '30px', justifyContent: 'space-between' }} elevation={0}>
                    <CardContent>
                        <Typography sx={
                            {
                                textTransform: 'uppercase',
                                fontWeight: '700',
                                color: '#cccdcd',
                                fontSize: '17px'
                            }
                        }>
                            Best Coffe on time
                        </Typography>
                        <Typography sx={
                            {
                                textTransform: 'uppercase',
                                fontSize: '50px',
                                fontWeight: '700',
                                lineHeight: '55px',
                                paddingY: '20px'
                            }
                        }>
                            Delight in <br /> every bite
                        </Typography>
                        <Typography sx={
                            {
                                fontSize: '11px',
                                fontWeight: '500',
                                textTransform: 'uppercase'
                            }
                        }>
                            Come an taste all our products, they have <br /> the best quality and price overall.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            elevation={0}
                            sx={
                                {
                                    backgroundColor: '#A78295',
                                    textTransform: 'capitalize',
                                    borderRadius: '20px',
                                    height: '35px'
                                }
                            }
                            endIcon={<ArrowForwardIosIcon fontSize="10" />}
                        >
                            Ir al menú
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} sx={gridStyle}>
                <Card
                    sx={{
                        ...cardStyle, 
                        padding: '30px', 
                        justifyContent: 'space-between'
                    }} elevation={0}>
                        Olamundo
                </Card>
            </Grid>
        </Grid>
    ) 
 }