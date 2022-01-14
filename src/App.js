import './App.css';
import Signin from './pages/signin/signin';
import React,{ Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Signin /> 
        {/* <Signup /> */}
      </div>
    );
  }
}

export default App;
