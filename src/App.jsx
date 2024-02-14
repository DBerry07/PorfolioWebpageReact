import { useState } from "react";
import "./css/App.css";
import Entry from "./components/Entry.jsx";
import ButtonMenu from "./components/ButtonMenu.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ButtonMenu />
      <Entry index={count} />
      <Footer />
    </div>
  );
}

export default App;
