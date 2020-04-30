import React from "react";
import HomePage from "./pages/homePage";
import SeeMore from "./pages/seeMorePage";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/seeMore"} component={SeeMore} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
