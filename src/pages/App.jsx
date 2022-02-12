import {
  Route,
  Switch
} from "react-router-dom";
import { Home } from './Home';

const App = () => {
  return <div className="px-4 py-3">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </div>
}

export default App;