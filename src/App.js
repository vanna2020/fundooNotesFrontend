import React,{ Component } from 'react';
// import Signin from './pages/signin/signin';
// import Signup from './pages/signup/signup';
import RouterDom from '../src/Router/router'

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Signin />  */}
        {/* <Signup /> */}
        <RouterDom />
      </div>
    );
  }
}

export default App;
