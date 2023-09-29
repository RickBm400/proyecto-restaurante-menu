import NavBar from 'components/Landing/NavBar.jsx'
import { Container } from '@mui/material'
export default function Home() {
    return (
            <Container maxWidth='100vh' sx={{backgroundColor:'#303443', minHeight:'100vh', paddingX:'0'}}>
                <NavBar />
                <span>Pagina de Inicio</span>
            </Container>
    )
}