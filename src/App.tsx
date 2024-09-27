import { createTheme, CssBaseline, } from "@mui/material";
import { useState } from "react";
import { RouterProvider } from "react-router";
import router from "./routes/pages";
import ThemeMode from "./context/ThemeMode";
import { ThemeProvider } from "@emotion/react";
import CssVariables from "./components/styled/CssVariables";

const App = () => {
    const [dark, setDark] = useState<boolean>(true);

    const darkTheme = createTheme({
        typography: {
            fontFamily: '"Segoe UI"',
            allVariants: {
                color: "#e8e9e3ff"
            }
        },
        palette: {
            primary: {
                main: "#001220",
            },
            secondary: {
                main: "#c62368"
            },
            info: {
                main: "#e8e9e3ff"
            }
        },
    });

    const lightTheme = createTheme({
        typography: {
            fontFamily: '"Segoe UI"',
            allVariants: {
                color: "#001220"
            }
        },
        palette: {
            primary: {
                main: "#cecbc8"
            },
            secondary: {
                main: "#fa7268"
            },
            info: {
                main: "#001220"
            }
        },
    });

    return (
        <ThemeMode.Provider value={{ dark, setDark }}>
            <ThemeProvider theme={dark ? darkTheme : lightTheme}>
                <CssVariables />
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </ThemeMode.Provider>
    );
};

export default App;
