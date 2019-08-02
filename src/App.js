import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <SearchBar />
        <CardContainer />
      </main>
    </div>
  );
}

export default App;
