import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import Hooks from "./components/Hooks";
import Layout from "./components/Layout";
import HooksProvider from "./hoc/HooksProvider";
import ListPage from "./pages/ListPage";

function App() {
  const [count, setCount] = useState(0);

  const logMemoSm = useCallback((text) => {
    console.log(text);
  }, []);

  return (
    <div className="App">
      <div className={"navlinks_wrapper"}>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          to="/"
        >
          Main page
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          to="/about"
        >
          About page
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          to="/news"
        >
          News page
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          to="/list"
        >
          List page
        </NavLink>
      </div>

      {/*<button onClick={() => setCount(prev => prev + 1)}>RENDER</button>*/}

      {/*<HooksProvider>*/}
      {/*    <Hooks logSm={logMemoSm}/>*/}
      {/*</HooksProvider>*/}

      <div className="page_wrapper">
        <Layout />
      </div>
    </div>
  );
}

export default App;
