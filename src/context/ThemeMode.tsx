import { createContext } from "react"

const ThemeMode = createContext({ dark: false, setDark: (input: boolean) => { } })

export default ThemeMode
