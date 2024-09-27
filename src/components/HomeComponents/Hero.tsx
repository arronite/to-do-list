import { Box, Button, Divider, Typography } from "@mui/material"
import { Link } from "react-router-dom"
const Hero = () => {
    return (
        <Box my={"2rem"} sx={{
            display: "flex",
            flexDirection: "column",
            animation: "appear 1s ease-in",
        }}>
            <Typography variant="h2" my={"4rem"} sx={{ fontWeight: "700" }} >
                To Do List
            </Typography>
            <Typography my={"2rem"} variant="h5" color="secondary.main" >
                The only to do list you will ever need
            </Typography>
            <Box my={"1rem"}>
                <Link to={"/login"}>
                    <Button size="large" sx={{ width: 1 / 2, backgroundColor: "secondary.main", padding: "1rem" }}>
                        <Typography>
                            Make your own list
                        </Typography>
                    </Button>
                </Link>
            </Box>


        </Box >

    )
}

export default Hero
