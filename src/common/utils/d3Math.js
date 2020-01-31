import { scaleLinear, scaleTime, scaleOrdinal } from "d3"

export const getScaleLinear = ({ domain, range }) =>
  scaleLinear()
    .domain(domain)
    .range(range)

export const getScaleTime = ({ domain, range }) =>
  scaleTime()
    .domain(domain)
    .range(range)

export const getScaleOrdinal = ({ domain, range }) =>
  scaleOrdinal()
    .domain(domain)
    .range(range)
