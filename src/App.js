import "./App.css";
import React from "react";
import { CardList } from "./components/card-list/CardList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, search } = this.state;
    const filter = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monster"
          onChange={(e) => {
            this.setState({ search: e.target.value });
          }}
        />
        <CardList monsters={filter} />
      </div>
    );
  }
}

export default App;
