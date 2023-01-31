import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Topnavbar from "./components/topnavbar";
import Values from "./components/values";
import Contact from "./components/contact";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Topnavbar />
      <Header />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
