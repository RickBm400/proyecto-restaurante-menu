// Material UI
import { Box, AppBar, Grid, Icon } from '@mui/material'
import PedalBikeIcon from '@mui/icons-material/PedalBike';
// Style CSS
import NavBar from 'styles/NavBar.module.css'
import { colors } from '../../constants/colorPalete';
// React Router
import { Link } from 'react-router-dom';


const links = [
    { name: 'Menú', link: '/menu' },
    { name: 'Reservas', link: '/reservation' },
    { name: 'Contacto', link: '/contact' },
]

export default function Home() {
    return (
        <AppBar position='static' elevation={0}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                paddingInline: '40px',
                color: 'white',
                backgroundColor: colors.primary,
                borderRadius: '10px'
            }}>
            <Grid container>
                <Grid item xs={4}>
                    <Link to='/'>
                        <Box component='div'
                            sx={{
                                height: '100%',
                                display: 'flex',
                                justifySelf: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                color: 'white'
                            }}>
                            <PedalBikeIcon fontSize='large'></PedalBikeIcon>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    {links.map((item, i) => {
                        return (
                            <Link key={i} to={item.link} style={{ textDecoration: 'none' }}>
                                <Box
                                    component='div'
                                    className={NavBar.listItem}>
                                    {item.name}
                                </Box>
                            </Link>
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