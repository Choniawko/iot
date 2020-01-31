import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { Details } from "./Details"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/details/:id?">
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
