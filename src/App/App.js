import { useSelector } from "react-redux";
import { Main, Container } from "./styled";
import { Header } from "../common/Header";
import { Skills } from "../features/personalHomepage/Skills";
import { WantToLearn } from "../features/personalHomepage/WantToLearn";
import { Repositories } from "../features/personalHomepage/Repositories";
import { Footer } from "../common/Footer";
import { welcome } from "../utils/welcome";
import LanguageSelector from "../common/LanguageSeletor";
import { ThemeProvider } from "styled-components";
import { selectIsDarkTheme } from "../common/ThemeSwitch/themeSlice";
import { darkTheme, lightTheme } from "../theme";

welcome();

function App() {

  const isDarkTheme = useSelector(selectIsDarkTheme);
  const theme = isDarkTheme === false ? lightTheme : darkTheme

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Main>
            <LanguageSelector />
            <Header />
            <Skills />
            <WantToLearn />
            <Repositories />
          </Main>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
