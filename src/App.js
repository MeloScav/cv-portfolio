import React from "react";
import HomePage from "./pages/homePage";
import SeeMore from "./pages/seeMorePage";
import Cv from "./pages/cvPage";
import Portfolio from "./pages/portfolioPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/seeMore"} component={SeeMore} />
          <Route path={"/cv"} component={Cv} />
          <Route path={"/portfolio"} component={Portfolio} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
