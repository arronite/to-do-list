import React from "react"
import { Box, Container } from "@mui/material"
import Hero from "../components/HomeComponents/Hero"
import Background from "../components/Background"
import { Outlet } from "react-router-dom"
const Home = (): React.ReactElement => {
    return (
        <Background>
            <Container sx={{ display: "flex" }}>
                <Outlet />
            </Container>
        </Background>
    )
}

export default Home
