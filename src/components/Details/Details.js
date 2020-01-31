import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { fetchData } from "../../common/utils"
import { LineChart } from "./LineChart"

export const Details = () => {
  const { goBack } = useHistory()
  const [day, setDay] = useState("2020-12-02")
  const [values, setValues] = useState([])
  useEffect(() => {
    fetchData(`data/${day}`).then(values => {
      setValues(values)
    })
  }, [day])
  return (
    <div>
      <button type="button" onClick={goBack}>
        Back
      </button>
      <div>Details</div>
      <select value={day} onChange={e => setDay(e.target.value)}>
        {["2020-12-02", "2020-12-03"].map(date => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
      <LineChart {...{ values }} />
    </div>
  )
}
