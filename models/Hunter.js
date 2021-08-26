const Traveler = require("./Traveler");

class Hunter extends Traveler{
    constructor(name, isHealthy, food){
        super(name, isHealthy,food)

    }
}

module.exports = Hunter;