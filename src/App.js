import React from "react";
import { Main } from "./pages/Main/Main";
import { Header } from "./pages/Header/Header";
import 'normalize.css';
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.app__wrapper}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
