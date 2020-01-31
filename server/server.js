const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = 5000;

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (_, res) => {
  res.json({
    items: [
      {
        id: 1,
        maschine: [
          {
            id: 1.1,
            name: "Name #1-1",
            type: "type",
            state: "AUTO",
            nio: 15,
            io: 20,
            avgCt: 10,
            dCt: 4
          }
        ],
        name: "Name #1"
      },
      {
        id: 2,
        maschine: [
          {
            id: 2.1,
            name: "Name #2-1",
            type: "type",
            state: "AUTO",
            nio: 15,
            io: 20,
            avgCt: 10,
            dCt: 4
          },
          {
            id: 2.2,
            name: "Name #2-2",
            type: "type",
            state: "FAILURE",
            nio: 15,
            io: 20,
            avgCt: 10,
            dCt: 4
          },
          {
            id: 2.3,
            name: "Name #2-3",
            type: "type",
            state: "AUTO",
            nio: 15,
            io: 20,
            avgCt: 10,
            dCt: 4
          },
          {
            id: 2.4,
            name: "Name #2-4",
            type: "type",
            state: "AUTO",
            nio: 15,
            io: 20,
            avgCt: 10,
            dCt: 4
          }
        ],
        name: "Name #2"
      },
      {
        id: 3,
        maschine: [
          {
            id: 3.1,
            name: "Name #1-1",
            type: "type",
            state: "AUTO",
            nio: 15,
            io: 20,
            avgCt: 10,
            dCt: 4
          }
        ],
        name: "Name #1"
      },
      {
        id: 4,
        maschine: [
          {
            id: 4.1,
            name: "Name #1-1",
            type: "type",
            state: "AUTO",
            nio: 15,
            io: 20,
            avgCt: 10,
            dCt: 4
          }
        ],
        name: "Name #1"
      }
    ]
  });
});

io.on("connection", socket => {
  setInterval(() => {
    io.emit(
      "items",
      Array.from({ length: 5 }).map((_, i) => ({
        id: i + 1,
        title: `Title #${i + 1}`,
        property: `property ${Math.floor(Math.random() * 101)}`
      }))
    );
    console.log(
      Array.from({ length: 5 }).map((_, i) => ({
        id: i + 1,
        title: `Title #${i + 1}`,
        property: `property ${Math.floor(Math.random() * 101)}`
      }))
    );
  }, 5000);
  console.log("a user connected");
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
