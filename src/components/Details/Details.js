import React from "react"
import { useHistory } from "react-router-dom"

export const Details = () => {
  const { goBack } = useHistory()
  return (
    <div>
      <button type="button" onClick={goBack}>
        Back
      </button>
      <div>Details</div>
    </div>
  )
}
