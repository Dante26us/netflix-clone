import {Router,Switch,Route} from 'react-router-dom';
import React from 'react';
import history from './history.js';
import StartPage from './Pages/StartPage.js';
import Login from './Pages/Login.js';
import Browse from './Pages/Browse.js';
function App() {
  return (
    <div className="App">
    <Router history={history}>
                <Switch>
                    <Route path="/" exact component={StartPage} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Browse" component={Browse} />
                </Switch>
            </Router>
    </div>
  );
}

export default App;
