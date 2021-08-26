const Traveler = require("./Traveler");

class Hunter extends Traveler{
    constructor(name){
        super(name)
        this.isHealthy = 'true'
        this.food = '2';
    }

    hunt(){
        let newQty = this.food + 5;
        this.food = newQty;
    }

    eat(){
        if(this.food > 1){
            this.food -= 2;
        }
        else if(this.food > 1){
            this.food -= 1;
        }
        else{
            this.isHealthy = 'false';
        }
    
        return this.isHealthy;
    }

    giveFood(traveler, foodRequested){
        if(this.food >= foodRequested ){
            traveler.food += foodRequested;
            this.food -= foodRequested;
        }
    }
}

module.exports = Hunter;