import React from "react"
import { SocketIOProvider } from "use-socketio"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { baseUrl } from "../common/utils"
import { Dashboard } from "./Dashboard"
import { Details } from "./Details"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SocketIOProvider url={baseUrl("")}>
            <Dashboard />
          </SocketIOProvider>
        </Route>
        <Route path="/details/:id?">
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
