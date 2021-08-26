const Traveler = require("./Traveler");

class Doctor extends Traveler{
    constructor(name){
        super(name);
        this.isHealthy = 'true'
        this.food = '1';
    }

    heal(patient){
        if(patient.isHealthy === 'false'){
            patient.isHealthy = "true";
        }
        return true;
    }
}

module.exports = Doctor;