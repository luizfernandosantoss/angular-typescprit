"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var startfighters_1 = require("./startfighters");
//importando a biblioteca do lodash para teste importando todos os pacotes
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 70, "="));
var ship = new base_ships_1.Spacecraft("hyperdrive");
ship.jumpIntoHyperspace();
var falcon = new startfighters_1.MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainners > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? "yes" : "no"));
