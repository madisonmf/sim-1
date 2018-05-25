import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: []
      };
    }
  
  componentDidMount() {
    axios.get('/api/inventory').then( response => {
      this.setState ({
        inventory: response.data
      })
      console.log(this.state.inventory);
    }).catch(err => console.log(err))
  }

  render() {
    return(
      <div className="App">
        <Header />
        <Dashboard />
        <Form />
      </div>  
    );
  }
}

export default App;