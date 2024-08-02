import { Main } from "./styled";
import { Header } from "../common/Header";
import { Skills } from "../features/personalHomepage/Skills";
import { WantToLearn } from "../features/personalHomepage/WantToLearn";
import { Repositories } from "../features/personalHomepage/Repositories";
import { Footer } from "../common/Footer";

function App() {

  return (
    <>
      <Main>
        <Header />
        <Skills />
        <WantToLearn />
        <Repositories />
      </Main>
      <Footer />
    </>
  );
}

export default App;
