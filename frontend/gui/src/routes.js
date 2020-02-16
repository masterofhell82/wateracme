import React from "react";
import { Route } from "react-router-dom";
import ClientList from "./containers/ClientListView";
import ClientDetail from "./containers/ClientDetailView";
import IntekeDetail from "./containers/IntekeDetailView";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ClientList}></Route>
    <Route exact path="/clients/:clientID/:cardId" component={ClientDetail}></Route>
    <Route exact path="/invoice" component={ClientDetail}></Route>
    <Route exact path="/invoice/:clientID" component={ClientDetail}></Route>
    <Route exact path="/intake/:cardID" component={IntekeDetail}></Route>
  </div>
);

export default BaseRouter;
