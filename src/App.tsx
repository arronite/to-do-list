
import { createTheme, CssBaseline, } from "@mui/material";
import { useState } from "react";
import { RouterProvider } from "react-router";
import router from "./routes/pages";
import ThemeMode from "./context/ThemeMode";
import { ThemeProvider } from "@emotion/react";
import Background from "./components/Background";

const App = () => {
    const [dark, setDark] = useState<boolean>(true);

    const theme = createTheme({
        palette: {
            mode: dark ? 'dark' : 'light',
        },
    });

    return (
        <ThemeMode.Provider value={{ dark, setDark }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </ThemeMode.Provider>
    );
};

export default App;
