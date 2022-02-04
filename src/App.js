import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
     monsters : [],
     searchItem: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({monsters:users}));
  }
   handleChange = (e) => this.setState({searchItem:e.target.value});

  render(){
    const { monsters, searchItem } = this.state;
    const filteredMonsters = monsters.filter(monster =>{
      return monster.name.toLowerCase().includes(searchItem.toLowerCase());
    })
    return(
          <div className="App">
           <h1>Monters Rolodex</h1>
           <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
           <CardList monsters={filteredMonsters}/>
          </div>
    );
  }
}

export default App;
