const PROTOCOL = "http"
const HOST = "localhost"
const PORT = 5000

export const baseUrl = endpoint => `${PROTOCOL}://${HOST}:${PORT}/${endpoint}`
