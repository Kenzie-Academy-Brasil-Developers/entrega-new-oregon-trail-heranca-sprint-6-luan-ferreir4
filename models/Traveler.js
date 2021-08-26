class Traveler {
constructor(name, isHealthy, food){
        this.name = name;
        this.isHealthy = isHealthy;
        this.food = food;
    }

    hunt(){
        let newQty = this.food + 2;
        this.food = newQty;
    }

    eat(){
        if(this.food > 0){
            this.food -= 1;
        }
        else{
            this.isHealthy = false;
        }

        return this.isHealthy;
    }
}

module.exports = Traveler;