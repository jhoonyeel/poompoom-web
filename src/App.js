import "./styles/styles.css";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div>asdf</div>
      <Footer />
    </div>
  );
}

export default App;
