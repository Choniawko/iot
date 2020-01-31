import React from "react"
import { useHistory } from "react-router-dom"
import { LineChart } from "./LineChart"

export const Details = () => {
  const { goBack } = useHistory()

  return (
    <div>
      <button type="button" onClick={goBack}>
        Back
      </button>
      <div>Details</div>
      <LineChart />
    </div>
  )
}
