import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ideasStore from './stores/ideasStore';

class App extends React.Component {
  
  state = {
    ideas: []
  }
  
  componentDidMount() {
    ideasStore.getIdeas().then(resp => {
      this.setState({ideas: resp});
    });
  }

  
  render() {
    
    let ideas = this.state.ideas.slice();

    return (
      <div className="App">
        <h1>Liste des idées</h1>
        <SearchBar ideas={ideas} />
      </div>
      )
    }
  }
    
    export default App;