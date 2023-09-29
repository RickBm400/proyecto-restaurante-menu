import NavBar from 'components/shared/NavBar.jsx'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
export default function Home() {
    return (
        <Container maxWidth='100vh'
        disableGutters
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',
                paddingTop: '20px',
                paddingX: {xs: '0px', md: '70px'}
            }}>
            <NavBar />
            <Outlet/>
        </Container>
    )
}