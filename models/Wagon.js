class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.passengers = [];
    }

    getAvailableSeatCount() {
        const occupiedSeats = this.passengers.length;
        const totalCapacity = this.capacity;
        let availableSeats = totalCapacity - occupiedSeats;

        return availableSeats;
    }

    join(passenger) {
        const occupiedSeats = this.passengers.length;

        if(occupiedSeats >= this.capacity){
            return `All the seats are occupied!`;
        }
        this.passengers.push(passenger);
        return passenger;
    }

    shouldQuarantine() {
        const passengersList = this.passengers;
        let status = false;
        
        passengersList.map(person => {
            if(person.isHealthy === 'false'){
                status = true;
            }
        });

        return status;
    }

    totalFood() {
        const passengersList = this.passengers;
        let foodQtyList = [];
        let totalFood = 0;

        passengersList.forEach(person => {
            foodQtyList.push(Number(person.food))
        });
    
        totalFood = foodQtyList.reduce((acc, current) => acc + current);

        return totalFood;
    }
}
module.exports = Wagon;