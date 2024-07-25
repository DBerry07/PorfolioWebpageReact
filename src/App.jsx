import { useEffect, useState, Fragment } from "react";
import {CSSTransition} from "react-transition-group";
import "./css/App.css";
import "./css/Mobile.css";
import "./css/animations-entry.css";
import "./css/constants.css";
import pageContent from "./data/constants/content.js";
import Entry from "./components/entry/Entry.jsx";
import ButtonMenu from "./components/ButtonMenu.jsx";
import Footer from "./components/Footer.jsx";
import myTabs from "./data/constants/buttons.js";
import { panels } from "./data/constants/panels.js";
import NamePanel from "./components/NamePanel.jsx";
import Drawer from "@mui/material/Drawer";
import Title from "./components/entry/Title.jsx";
import Body from "./components/entry/Body.jsx";
import Subheading from "./components/entry/Subheading.jsx";
import Sections from "./components/entry/Sections.jsx";
import Htmls from "./components/entry/Htmls.jsx";
import List from "./components/entry/List.jsx";
import Techs from "./components/entry/Techs.jsx";
import MyDrawer from "./components/MyDrawer.jsx";

function App() {
  const [tab, setTab] = useState(myTabs.Hello.name);
  // const [panel, setPanel] = useState(panels.About);
  const [isEnter, setIsEnter] = useState(true);
  const content = pageContent[tab];
  const [open, switchOpen] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800; // Set your desired breakpoint

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleSelect(value) {
    // console.log("> tab selected: " + value);
    setIsEnter((prevState) => !prevState)

    setTimeout(() => changePanel(value), 400);
  }

  function changePanel(value) {
    if (value === myTabs.Projects) {
      setPanel(panels.Projects);
      setTab(myTabs.ProjectList[1].name);
    } else if (value === myTabs.Back) {
      setPanel(panels.About);
      setTab(myTabs.AboutList[0].name);
    } else {
      setTab(value);
    }
    setIsEnter((prevState) => !prevState)
  }

  function handleDrawer() {
    switchOpen(!open);
  }

  if (width > breakpoint) {
  return (
    <Fragment>
      <main className="App">
        <NamePanel />
        <ButtonMenu onSelect={handleSelect} />
        <CSSTransition in={isEnter} timeout={5000} appear={true} classNames="entry-animate">
          <Entry content={content} />
        </CSSTransition>
      </main>
      <Footer />
    </Fragment>
  );
  }
  else {
    return (
      <Fragment>
        <main className="App">
          <Drawer open={true} onClose={() => handleDrawer()}>
            {MyDrawer}
          </Drawer>
          <Entry content={content} handleDrawerOpen={handleDrawer} />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
