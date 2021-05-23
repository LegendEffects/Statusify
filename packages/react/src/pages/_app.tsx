import "../app/utils/i18n";

import StatusifyInstance from "../StatusifyInstance";
import theme from "../app/theme/Theme";
import * as React from "react";
import Home from ".";

import { HashRouter, Route, Switch } from "react-router-dom";
import { LaminarProvider } from "../app/contexts/LaminarContext";
import { StatusifyProvider } from "../app/contexts/StatusifyContext";
import IncidentPage from "./IncidentPage";

export default function App() {
  return (
    <React.StrictMode>
      
      <LaminarProvider theme={theme}>
        <StatusifyProvider statusify={StatusifyInstance}>

          <HashRouter>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/incidents/:id">
                <IncidentPage />
              </Route>
            </Switch>
          </HashRouter>

        </StatusifyProvider>
      </LaminarProvider>
    </React.StrictMode>
  )
}