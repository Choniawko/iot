import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useSocket } from "use-socketio"
import { Header } from "./Header"

export const Dashboard = () => {
  const [state, setState] = useState({
    items: [],
    message: "no items",
  })
  useSocket("items", newItems => {
    return setState(state => ({ ...state, items: newItems }))
  })
  const { push } = useHistory()
  return (
    <div>
      <Header />
      {state.items.map(({ id, title, property }) => (
        <div onClick={() => push(`/details/${id}`)} key={id}>
          Title: {title}, Property: {property}
        </div>
      ))}
    </div>
  )
}
