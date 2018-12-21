import React, { Component } from "react";
import logo from "./logo.svg";
import PokeFetcher from "./components/PokeFetcher";
import NewPokeFetcher from "./components/NewPokeFetcher";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokeFetcher />
        <NewPokeFetcher />
      </div>
    );
  }
}

export default App;
