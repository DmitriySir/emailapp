import { Main } from "./pages/Main/Main";
import { Header } from "./pages/Header/Header";
import 'normalize.css';
import "./pages/Header/Header.modules.css"

function App() {
  return (
    <div className="app__wrapper">
      <Header />
      <Main />
    </div>
  );
}

export default App;
