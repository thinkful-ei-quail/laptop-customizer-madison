import React, { Component } from 'react';
import Selected from './Selected';
import './App.css';
import Cart from './Cart';
import Customize from './Customize';

class App extends Component {
  state = {
    selected: Selected
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const {selected} = this.state
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <Customize 
            selected={selected}
            updateFeature={this.updateFeature}
          />
          <Cart 
            selected={selected}
          />
        </main>
      </div>
    );
  }
}

export default App;
