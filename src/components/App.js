import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Preguntas from '../pages/Preguntas';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Verify from '../pages/Verify';
import MyAccount from '../pages/MyAccount';
import Layout from './Layout';
// import NotFound from '../pages/NotFound';

function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="#formas-pago-title"  />
                    <Route exact path="/preguntas" component={Preguntas} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/verify/:key" component={Verify} />
                    <Route exact path="/my-account/:key" component={MyAccount} />
                    {/* <Route component={NotFound}/> */}
                </Switch>
            </Layout>
            
                    
         
        </BrowserRouter>
    )
}

export default App;