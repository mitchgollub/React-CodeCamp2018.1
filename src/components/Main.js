import React from "react";
import { Switch, Route } from "react-router-dom";

import Camp from "./Camp";
import Schedule from "./Schedule";
import Session from "./Session";
import Speaker from "./Speaker";
import Sponsor from "./Sponsor";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Camp} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/session" component={Session} />
      <Route path="/speaker" component={Speaker} />
      <Route path="/sponsor" component={Sponsor} />
    </Switch>
  </main>
);

export default Main;
