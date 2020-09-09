const express = require("express"),
  passwordControl = require("../middleware/password.control");
autenticaControl = require("../middleware/autentica.control");

let api = express.Router(),
  personaControl = require("../controles/persona.control");

//users ENDPOINT
api.get("/users", autenticaControl.autentica, personaControl.getUsuarios);
api.get("/userByID", autenticaControl.autentica, personaControl.getIdUsuario);

api.post(
  "/user",
  [passwordControl.codificarPassword],
  personaControl.nuevoUsuario
);

//api.post("/insertar_persona", personaControl.allUsuarios);

api.put(
  "/update_persona",
  autenticaControl.autentica,
  personaControl.updateOneUsuario
);

api.delete(
  "/delete_persona",
  autenticaControl.autentica,
  personaControl.borrarAllUsuario
);
api.delete(
  "/delete_idpersona",
  autenticaControl.autentica,
  personaControl.borrarOneUsuario
);

api.post("/login", personaControl.login);

module.exports = api;
