import NavBar from 'components/Landing/NavBar.jsx'
import { Container } from '@mui/material'
export default function Home() {
    return (
        <Container maxWidth='100vh'
            sx={{
                bgcolor: '#303433',
                minHeight: '100vh',
                paddingTop: '20px'
            }}>
            <NavBar />
            <span>Pagina de Inicio</span>
        </Container>
    )
}