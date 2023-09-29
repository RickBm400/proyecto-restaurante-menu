// Material UI
import { Box, AppBar, Grid } from '@mui/material'

// Style CSS
import NavBar from 'styles/NavBar.module.css'

const links = [
    { name: 'Menú' },
    { name: 'Reservas' },
    { name: 'Contacto' },
]

export default function Home() {
    return (
        <AppBar position='static'
            sx={{
                
                display: 'flex',
                flexDirection: 'row',
                paddingInline: '30px',
                paddingY: '10px',
            }}>
            <Grid container>
                <Grid xs={1}>Logo</Grid>
                <Grid xs={8}>
 
                    {links.map(item => {
                        return (
                            <Box component='span' className={NavBar.listItem}>{item.name}</Box>
                            )
                        })}

                </Grid>
            </Grid>
        </AppBar>
    )
}