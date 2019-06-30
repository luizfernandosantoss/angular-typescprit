import {Containership, Spacecraft} from "./base-ships";
import {MillenniumFalcon} from "./startfighters";

//importando a biblioteca do lodash para teste importando todos os pacotes
import  * as _ from 'lodash'

console.log(_.pad("Typescript Examples",70,"="));

let ship = new Spacecraft("hyperdrive");
ship.jumpIntoHyperspace();

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace();


let goodForTheJob = (ship:Containership) => ship.cargoContainners > 2;

console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? "yes" : "no"}`);
