import React from "react"
import { extent, line } from "d3"
import { Axis } from "../Axis"
import { getScaleLinear, getScaleTime } from "../../../common/utils"

const height = 260
const width = 260
const { top, right, bottom, left } = {
  top: 10,
  right: 20,
  bottom: 30,
  left: 50,
}

const data = [
  {
    date: new Date("2020-12-02T10:00:00Z"),
    value: Math.floor(Math.random() * 101),
  },
  {
    date: new Date("2020-12-02T11:00:00Z"),
    value: Math.floor(Math.random() * 101),
  },
  {
    date: new Date("2020-12-02T12:00:00Z"),
    value: Math.floor(Math.random() * 101),
  },
  {
    date: new Date("2020-12-02T13:00:00Z"),
    value: Math.floor(Math.random() * 101),
  },
  {
    date: new Date("2020-12-02T14:00:00Z"),
    value: Math.floor(Math.random() * 101),
  },
  {
    date: new Date("2020-12-02T15:00:00Z"),
    value: Math.floor(Math.random() * 101),
  },
]

export const LineChart = () => {
  const x = getScaleTime({
    domain: extent(data, ({ date }) => date),
    range: [0, width],
  })
  const y = getScaleLinear({
    domain: [0, 100],
    range: [height, top],
  })
  return (
    <svg width={width + left + right} height={height + top + bottom}>
      <Axis
        scale={x}
        translate={[left, height + top]}
        type="bottom"
        ticks={10}
      />
      <Axis scale={y} translate={[left, top]} type="left" />
      <g transform={`translate(${left}, ${top})`}>
        <path
          d={line()(data.map(({ date, value }) => [x(date), y(value)]))}
          style={{ fill: "none", stroke: "black", strokeWidth: 1.5 }}
        />
      </g>
    </svg>
  )
}
