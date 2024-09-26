import React from "react"
import { Box, Container } from "@mui/material"
import Hero from "../components/HomeComponents/Hero"
import Background from "../components/Background"
const Home = (): React.ReactElement => {
    return (
        <>
            <Box sx={{ minHeight: 100, display: "flex", alignItems: "center" }}>
                <Container>
                    <Hero />
                </Container>
            </Box >
        </>
    )
}

export default Home
