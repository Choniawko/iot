import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { fetchData } from "../../common/utils"
import { Header } from "./Header"

export const Dashboard = () => {
  const [state, setState] = useState({
    items: [],
    message: "no items",
  })
  const { push } = useHistory()
  useEffect(() => {
    fetchData("")
      .then(({ items }) => {
        setState(state => ({ ...state, items }))
      })
      .catch(({ message }) => {
        setState(state => ({ ...state, message }))
      })
  }, [])
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
