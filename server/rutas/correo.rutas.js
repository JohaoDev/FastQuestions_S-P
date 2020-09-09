const express = require("express");

let api = express.Router(),
  mail = require("../controles/enviarCorreo.control");

//email ENDPOINT
api.post("/send_email", mail.mail1);

module.exports = api;
