import React from "react";
import { Switch, Route } from "react-router-dom";
import Player from "./pages/Player";
import PlayerPlayers from "./pages/PlayerPlayers";
import Battle from "./pages/Battle";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Player />
      </Route>
      <Route exact path="/playerPlayers">
        <PlayerPlayers />
      </Route>
      <Route path="/player/friend/:id">
        <Battle />
      </Route>
    </Switch>
  );
};

export default Routes;
