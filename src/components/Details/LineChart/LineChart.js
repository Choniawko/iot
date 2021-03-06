import React from "react"
import { line, nest, min, max } from "d3"
import { Axis } from "../Axis"
import {
  getScaleLinear,
  getScaleOrdinal,
  getScaleTime,
} from "../../../common/utils"

const height = 260
const width = 500
const { top, right, bottom, left } = {
  top: 10,
  right: 20,
  bottom: 30,
  left: 50,
}

export const LineChart = ({ values }) => {
  const groupedByname = nest()
    .key(({ name }) => name)
    .entries(values)
  const allKeys = groupedByname.map(({ key }) => key)
  const x = getScaleTime({
    domain: [
      min(values.map(({ date }) => new Date(date))),
      max(values.map(({ date }) => new Date(date))),
    ],
    range: [0, width],
  })
  const y = getScaleLinear({
    domain: [0, 100],
    range: [height, top],
  })
  const color = getScaleOrdinal({
    domain: allKeys,
    range: [
      "#e41a1c",
      "#377eb8",
      "#4daf4a",
      "#984ea3",
      "#ff7f00",
      "#ffff33",
      "#a65628",
      "#f781bf",
      "#999999",
    ],
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
        {groupedByname.map(({ key, values }) => (
          <path
            key={key}
            d={line()(
              values.map(({ date, value }) => [x(new Date(date)), y(value)]),
            )}
            style={{ fill: "none", stroke: color(key), strokeWidth: 1.5 }}
          />
        ))}
      </g>
    </svg>
  )
}
