import { baseUrl } from "."

const headers = {
  "Content-Type": "application/json",
}

const handleError = res => {
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return res
}

export const fetchData = (endpoint, options = {}) =>
  fetch(baseUrl(endpoint), {
    method: options.method || "GET",
    headers: { ...headers, ...options.headers },
    signal: options.signal,
    body: JSON.stringify(options.body),
  })
    .then(handleError)
    .then(res => res.json())
