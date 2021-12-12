import React, { lazy, Suspense } from "react";
import { CountryListProvider } from './components/context/countryList';

// Styles
import './App.css';

//Package
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";

//Lazy Views
const Home = lazy(() => import('./views/Home'));
const CountryInfo = lazy(() => import('./views/CountryInfo'));
const NotFound = lazy(() => import('./views/NotFound'));
const Search = lazy(() => import('./views/Search'));

function App() {
  return (
    <BrowserRouter>
    <CountryListProvider>
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        </Route>
        <Route path="/country/:countryCode" exact>
          <Suspense fallback={<Loading />}>
            <CountryInfo />
          </Suspense>
        </Route>
        <Route path="/search/name/:countryName" exact>
          <Suspense fallback={<Loading />}>
            <Search />
          </Suspense>
        </Route>
        <Route path="*">
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        </Route>
      </Switch>
    </CountryListProvider>
   </BrowserRouter>
  );
}

export default App;
