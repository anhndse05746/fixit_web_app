import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/Login';
import "./assets/FontAwsomeIcons/icon";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </>
  );
}

export default App;
