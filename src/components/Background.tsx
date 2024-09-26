import { Box } from "@mui/material"
import React, { ReactNode, useContext } from "react"
import ThemeMode from "../context/ThemeMode"

interface BackgroundProps {
    children: ReactNode
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
    const { dark } = useContext(ThemeMode)
    return (
        <Box sx={{
            backgroundImage: dark ? `url("/MoonDark.svg")` : `url("/MoonLight.svg")`,
            backdropFilter: `blur(10px)`,
            height: "100vh",
            width: "100vw"
        }}>
            {children}
        </Box>
    )
}

export default Background
