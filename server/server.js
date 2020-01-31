const app = require("express")()
const http = require("http").createServer(app)
const io = require("socket.io")(http)

const PORT = 5000

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  )
  next()
})

app.get("/", (_, res) => {
  res.json({
    items: [
      { id: 1, title: "Title #1", property: "property #1" },
      { id: 2, title: "Title #2", property: "property #2" },
      { id: 3, title: "Title #3", property: "property #3" },
      { id: 4, title: "Title #4", property: "property #4" },
      { id: 5, title: "Title #5", property: "property #5" },
    ],
  })
})

const interval = () => {
  io.emit(
    "items",
    Array.from({ length: 5 }).map((_, i) => ({
      id: i + 1,
      title: `Title #${i + 1}`,
      property: `property ${Math.floor(Math.random() * 101)}`,
    })),
  )
  console.log(
    Array.from({ length: 5 }).map((_, i) => ({
      id: i + 1,
      title: `Title #${i + 1}`,
      property: `property ${Math.floor(Math.random() * 101)}`,
    })),
  )
}

io.on("connection", socket => {
  setInterval(interval, 5000)
  socket.on("disconnect", () => {
    clearInterval(interval)
  })

  console.log("a user connected")
})

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`)
})
