import "./App.css";
import React from "react";
import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/search-box/SearchBox";
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
        <h1>Monstors Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handlerChange={(e) => {
            this.setState({ search: e.target.value });
          }}
        />
        <CardList monsters={filter} />
      </div>
    );
  }
}

export default App;
