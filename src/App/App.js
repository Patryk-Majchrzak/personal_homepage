import { useSelector } from "react-redux";
import { Main } from "./styled";
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

function App() {

  const isDarkTheme = useSelector(selectIsDarkTheme);
  const theme = isDarkTheme === false ? lightTheme : darkTheme

  welcome();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Main>
          <LanguageSelector />
          <Header />
          <Skills />
          <WantToLearn />
          <Repositories />
        </Main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
