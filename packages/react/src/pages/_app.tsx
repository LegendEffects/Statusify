import "../app/utils/i18n";

import StatusifyInstance from "../StatusifyInstance";
import theme from "../app/theme/Theme";
import * as React from "react";
import Home from ".";

import { HashRouter, Route, Switch } from "react-router-dom";
import { LaminarProvider } from "../app/contexts/LaminarContext";
import { StatusifyProvider } from "../app/contexts/StatusifyContext";
import IncidentPage from "./IncidentPage";
import { AutoRefreshProvider } from "../app/contexts/AutoRefreshContext";

export default function App() {
  const [ statusify, setStatusify ] = React.useState(StatusifyInstance);
  const [ refresh, setRefresh ] = React.useState(false);

  React.useEffect(() => {
    if(refresh === true) { 
      setStatusify(StatusifyInstance);
    }
  }, [ refresh ])

  return (
    <React.StrictMode>
      
      <LaminarProvider theme={theme}>
        <AutoRefreshProvider interval={300} refreshListener={() => setRefresh(true)} >
          <StatusifyProvider statusify={statusify}>

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
        </AutoRefreshProvider>
      </LaminarProvider>
    </React.StrictMode>
  )
}