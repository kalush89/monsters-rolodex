import { Component, useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

/*export const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMonsters, setFilteredMonters] = useState(monsters);

  const handleChange = (e) => {
    const searchTermString = e.target.value;
    setSearchTerm(searchTermString.toLowerCase());
  }

  

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users))
  }, []);

  //prevent monsters from filtering, unless monsters or searchTerm values change
  useEffect(()=> {
    const newfilteredMonsters = monsters.filter(monster =>{
      return monster.name.toLowerCase().includes(searchTerm);
    });
    setFilteredMonters(newfilteredMonsters);
  }, [monsters, searchTerm]);

  return (
    <div className="App">
    <h1>Monters Rolodex</h1>
    <SearchBox placeholder='search monsters' handleChange={handleChange}/>
    <CardList monsters={filteredMonsters} />
   </div>
  )
}*/
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
      .then(response => response.json())
      .then(users => this.setState(() => {
          return {
            monsters: users
          }
        }));
  }
   handleChange = (e) => this.setState(()=>{
     return {searchItem:e.target.value}
   });

  render(){
    const { monsters, searchItem } = this.state;
    const{ handleChange } = this; 
    const filteredMonsters = monsters.filter(monster =>{
      return monster.name.toLowerCase().includes(searchItem.toLowerCase());
    })
    return(
          <div className="App">
           <h1>Monters Rolodex</h1>
           <SearchBox placeholder='search monsters' handleChange={handleChange}/>
           <CardList monsters={filteredMonsters}/>
          </div>
    );
  }
}


export default App;
