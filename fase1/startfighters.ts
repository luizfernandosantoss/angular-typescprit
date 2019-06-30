import {Containership, Spacecraft} from "./base-ships";

export class MillenniumFalcon extends  Spacecraft implements Containership{

    cargoContainners: number;


    constructor() {
        super("hyperDrive");
        this.cargoContainners = 3;
    }

    jumpIntoHyperspace() {
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace();
        }else {console.log(`Failed to jump into hyperspace`)}
    }

}