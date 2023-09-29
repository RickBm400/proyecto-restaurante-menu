import NavBar from 'components/shared/NavBar.jsx'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
export default function Home() {
    return (
        <Container maxWidth='100vh'
            sx={{
                bgcolor: '#303433',
                minHeight: '100vh',
                paddingTop: '20px'
            }}>
            <NavBar />
            <Outlet/>
        </Container>
    )
}