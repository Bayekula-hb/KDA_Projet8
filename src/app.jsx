import "./style.css"
import ContactFunction from "./components/contacts";
import { Route, Switch } from "react-router";
import Composant from "./components/composant";

const App = () => {

  return (
      <>
          
          <header>
            <h1>Mes amis robots</h1>
          </header>
          <Switch>
            <Route  exact path="/" component={ContactFunction} ></Route>
            <Route path="/composant/:id" component={Composant}></Route>
          </Switch>
      </>
    )
}
export default App;