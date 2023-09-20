import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/global"
import theme from './styles/theme'
import NavBar from "./components/NavBar"
import MainBanner from "./components/MainBanner"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />      
      <MainBanner />
    </ThemeProvider>
  )
}

export default App
