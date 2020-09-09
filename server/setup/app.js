const express = require("express"),
  bodyParser = require("body-parser"),
  connectDb = require("../config/db"),
  passport = require("passport"),
  cors = require("cors"),
  parseurl = require("parseurl");

let app = express(),
  session = require("express-session"),
  personaRuta = require("../rutas/persona.rutas"),
  encuestasRuta = require("../rutas/encuestas.rutas"),
  correoRuta = require("../rutas/correo.rutas"),
  db = connectDb(),
  sess = {
    secret: process.env.KEY_SESSION,
    resave: false,
    saveUninitialized: true,
    name: "sessionID",
    cookie: {
      httpOnly: false,
      maxAge: parseInt(process.env.TIME),
    },
  },
  corsOptions = {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200,
  };

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use(session(sess));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  if (!req.session.views) {
    req.session.views = {};
  }
  let pathname = parseurl(req).pathname;
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
  next();
});

app.get("/", (req, res) => {
  res.send(
    `Your session: ${req.sessionID}, number of visits: ${req.session.views["/"]} times`
  );
});

app.use("/api", personaRuta);
app.use("/api", encuestasRuta);
app.use("/api", correoRuta);

module.exports = app;
