import React,{ Component } from 'react';
import Signin from './pages/signin/signin';
// import Signup from './pages/signup/signup';

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
