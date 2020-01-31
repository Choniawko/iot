import { scaleLinear, scaleTime } from "d3"

export const getScaleLinear = ({ domain, range }) =>
  scaleLinear()
    .domain(domain)
    .range(range)

export const getScaleTime = ({ domain, range }) =>
  scaleTime()
    .domain(domain)
    .range(range)
