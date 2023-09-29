// Material UI
import { Box, AppBar, Grid, Icon } from '@mui/material'
import PedalBikeIcon from '@mui/icons-material/PedalBike';
// Style CSS
import NavBar from 'styles/NavBar.module.css'

const links = [
    { name: 'Menú' },
    { name: 'Reservas' },
    { name: 'Contacto' },
]

export default function Home() {
    return (
        <AppBar position='static' elevation={0}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                paddingInline: '30px',
                color: 'black',
                backgroundColor: '#CEDEBD',
                borderRadius: '10px'
            }}>
            <Grid container>
                <Grid item xs={4}>
                    <Box component='div'
                        sx={{
                            height: '100%',
                            display: 'flex',
                            justifySelf: 'center',
                            alignItems: 'center'
                        }}>
                        <PedalBikeIcon fontSize='large'></PedalBikeIcon>
                    </Box>
                </Grid>
                <Grid item xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    {links.map((item, i) => {
                        return (
                            <Box
                                component='div'
                                key={i}
                                className={NavBar.listItem}>
                                {item.name}
                            </Box>
                        )
                    })}
                </Grid>
                {/* <Grid item xs={4} 
                sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    alignItems: 'center'
                }}>
                    <PedalBikeIcon fontSize='large'></PedalBikeIcon>
                </Grid> */}
            </Grid>
        </AppBar>
    )
}