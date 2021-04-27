import "./style.css"
import ContactFunction from "./components/contacts";
import { Route, Switch } from "react-router";
import Robot from "./components/robot";

const App = () => {
  return (
      <>
          <ContactFunction />
          <Switch>
            <Route  exact path="/" components={ContactFunction} ></Route>
            <Route  exact path="/robot" components={Robot} > </Route>
          </Switch>
      </>
    )
}
export default App;