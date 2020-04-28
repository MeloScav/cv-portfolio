import React from "react";
import HomePage from "./pages/homePage";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} component={HomePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
