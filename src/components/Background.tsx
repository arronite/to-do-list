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
            display: "flex",
            backdropFilter: `blur(10px)`,
            height: "100vh",
            width: "100vw"
        }}>
            <img style={{ zIndex: "-1", display: "flex", position: "absolute", width: "100%", height: "100%" }} src={dark ? "/bgdark.svg" : "/bglight.svg"} />
            {children}

        </Box >
    )
}

export default Background
