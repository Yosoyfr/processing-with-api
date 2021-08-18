const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const port = 3000;

/**
 * Middlewares
 * CORS
 * MORGAN
 * EXPRESS.JSON
 * EXPRESS.URLENCONDED
 */
const corsOptions = { origin: true, optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

/**
 * Routes
 */
app.get("/", (req, res) =>
  res.json({
    events: [
      { world_id: 1, map_id: 2, state: "Washington", event_id: "Party" },
      { world_id: 1, map_id: 2, state: "Florida", event_id: "Party" },
    ],
  })
);

/**
 * Inicio del servidor
 */
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
