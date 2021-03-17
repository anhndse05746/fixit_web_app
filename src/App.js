import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/Login';
import Major from './components/Major';
import "./assets/FontAwsomeIcons/icon";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/major" component={Major} />
      </Switch>
    </>
  );
}

export default App;
