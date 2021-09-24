//Package
import React, { BrowserRouter, Switch, Route } from "react-router-dom";

//Views
import Home from "./views/Home";
import CountryInfo from "./views/CountryInfo";
import NotFound from "./views/NotFound";
import Search from "./views/Search";

//Components
// ####

// Styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/country/:countryCode" exact>
          <CountryInfo />
        </Route>
        <Route path="/country/*">
          <NotFound />
        </Route>
        <Route path="/search/name/:countryName" exact>
          <Search />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
   </BrowserRouter>
  );
}

export default App;
