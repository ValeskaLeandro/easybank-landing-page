import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/global"
import theme from './styles/theme'
import NavBar from "./components/NavBar"
import MainBanner from "./components/MainBanner"
import Services from "./components/Services"
import Articles from "./components/Articles"
import Footer from "./components/Footer"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />      
      <MainBanner />
      <Services />
      <Articles />
      <Footer />
    </ThemeProvider>
  )
}

export default App
