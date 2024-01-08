// Components
import { Container } from "@mui/material";
import HomeCard from "components/Landing/HomeCard";

export default function HomePage() {
    return (  
        <Container disableGutters maxWidth={'100vh'}>
            <HomeCard />
            <HomeCard />
            <HomeCard />
        </Container>
    )
}