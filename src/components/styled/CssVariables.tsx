import { useTheme } from "@mui/material"

const CssVariables = () => {
    const theme = useTheme()
    return (
        <style>
            {
                `
            :root{
                --primary:${theme.palette.primary.main};
                --secondary:${theme.palette.secondary.main};
            }
            `
            }

        </style>
    )
}

export default CssVariables
