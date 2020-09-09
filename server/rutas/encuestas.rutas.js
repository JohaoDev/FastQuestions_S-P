const express = require("express"),
  autenticaControl = require("../middleware/autentica.control");

let api = express.Router(),
  encuestasControl = require("../controles/encuestas.control");

//encuesta ENDPOINT
api.get(
  "/get_encuestas",
  autenticaControl.autentica,
  encuestasControl.getEncuestas
);
api.get(
  "/get_idencuestas",
  autenticaControl.autentica,
  encuestasControl.getIdEncuesta
);

api.post(
  "/nuevaEncuesta",
  autenticaControl.autentica,
  encuestasControl.nuevaEncuesta
);
//api.post("/one_encuestas", autenticaControl.autentica, encuestasControl.oneUsuario);

// api.put("/update_encuestas", autenticaControl.autentica, encuestasControl.updateOneUsuario);

// api.delete("/delete_encuestas", encuestasControl.borrarAllUsuario);

// api.delete("/delete_idencuestas", autenticaControl.autentica, encuestasControl.borrarOneUsuario);

// api.post('/nuevo_encuestas', [autenticaControl.autentica, passwordControl.codificarPassword], encuestasControl.nuevoUsuario);

module.exports = api;
