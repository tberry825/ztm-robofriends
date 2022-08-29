import React, { Component } from "react";
import CardList from "../Components/CardList";
// import { Robots } from "./Robots";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ Robots: users }));
  }

  onSearchChange = (event) => {
    console.log(event);
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { Robots, searchfield } = this.state;
    const filteredRobots = Robots.filter((Robot) => {
      return Robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !Robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList Robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
