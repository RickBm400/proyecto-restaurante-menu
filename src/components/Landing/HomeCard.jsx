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

//Colors
import { colors } from 'constants/colorPalete'

// Images

export default function HomeCard() {

    const gridStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px',
    }

    const cardStyle = {
        width: '75%', height: '70%', display: 'flex', alignSelf: 'center', flexDirection: 'column ', borderRadius: '0px', width: '100%'
    }

    return (
        <Grid container>
            <Grid item
                xs={12}
                md={5}
                sx={gridStyle}
            >
                <Card sx={{ ...cardStyle, padding: '30px', justifyContent: 'space-between',  bgcolor: colors.primary}} elevation={0}>
                    <CardContent >
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
                                paddingY: '20px',
                                color: 'white'
                            }
                        }>
                            Delight in <br/> every bite
                        </Typography>
                        <Typography sx={
                            {
                                fontSize: '11px',
                                fontWeight: '500',
                                textTransform: 'uppercase',
                                color: 'white'
                            }
                        }>
                            Come an taste all our products, they have <br /> the best quality and price overall.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            disableElevation
                            disableRipple
                            sx={
                                {
                                    backgroundColor: colors.buttons,
                                    textTransform: 'capitalize',
                                    borderRadius: '10px',
                                    height: '35px',
                                    '&:hover' :{
                                        backgroundColor: colors.buttonsHover
                                    }
                                }
                            }
                            endIcon={<ArrowForwardIosIcon fontSize="10" />}
                        >
                            Ir al menú
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} md={7} sx={gridStyle}>
                <Card elevation={0} sx={{...cardStyle, padding: '30px', justifyContent: 'space-between', bgcolor: 'white'}}>
                    txt home card
                </Card>
            </Grid>
        </Grid>
    )
}