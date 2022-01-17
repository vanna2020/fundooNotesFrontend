import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Signin from '../pages/signin/signin'
import Signup from '../../src/pages/signup/signup'
function RouterDom() {
    return (
            <BrowserRouter>
                <Switch>
                <Route exact path="/" component={Signin}/>
                <Route path="/SignUp" component={Signup}/>
                {/* <Route path="/Dashboard" component={Dashboard}/> */}

                    </Switch>
                    </BrowserRouter>
    )
}
export default RouterDom