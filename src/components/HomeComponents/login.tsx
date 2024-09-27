import { Box, Input, Paper, Stack, TextField, Typography } from "@mui/material"
import { GlassComp, InputField } from "../styled/styledComponents"

const Login = () => {
    return (
        <Box className="appear" margin={"auto"} width={"50%"} height={"80%"}>
            <GlassComp>
                <Stack m={"auto"}>
                    <Typography
                        width={"100%"}
                        justifyContent="center"
                        display={"flex"}
                        variant="h4">
                        Login
                    </Typography>
                    <Typography
                        justifyContent="center"
                        display={"flex"}
                    >
                        Welcome back please enter your credentials
                    </Typography>

                    <form>
                        <InputField
                            placeholder="username or email"
                        />
                    </form>
                </Stack >


            </GlassComp>
        </Box >

    )
}

export default Login
