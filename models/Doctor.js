const Traveler = require("./Traveler");

class Doctor extends Traveler{
    constructor(name, isHealthy, food){
        super(name, isHealthy,food)

    }

    heal(patient){
        if(patient.isHealthy === 'false'){
            patient.isHealthy = "true";
        }
        return true;
    }
}

module.exports = Doctor;