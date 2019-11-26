import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import TileContainer from './TileContainer'
import SortContainer from './SortContainer';


class App extends Component {
  state = {
    hogs: hogs
  }

  handleSubmit = (event) => {
    const mysort = event.target.value
    if (mysort === "name") {
      this.setState({
        hogs: hogs.sort(function(a, b){return a.name.localeCompare(b.name)})
      })
    }
    else if (mysort === "weight") {
      this.setState({
        hogs: hogs.sort(function(a, b){return b.weight-a.weight})
      })
    }
    else if (mysort === "greased") {
      this.setState({
        hogs: hogs.filter(hog => {
          return hog.greased === true
        })
      })
    }
  
}


  render() {
    return (
      <div className="App">
          < Nav />
          < SortContainer callback={this.handleSubmit}/>
          < TileContainer  hoginfo={this.state.hogs}/>

      </div>
    )
  }
}

export default App;
