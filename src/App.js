import Admin from './components/Admin/Admin';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Main from './components/Main';
import { Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route component={Main} />
      </Switch>
    </div>
  );
}

export default App;
