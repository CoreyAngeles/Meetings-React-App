import { Route, Switch, Redirect } from "react-router-dom";
import Users from "./layouts/Users";
import Main from "./layouts/Main";
import Login from "./layouts/Login";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/users/:userId?" component={Users} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
