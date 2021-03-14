import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './components/Login';
import "./assets/FontAwsomeIcons/icon";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </>
  );
}

export default App;
