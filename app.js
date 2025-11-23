class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
        this.speed = 0;
    }

    accelerate(amount) {
        return (this.speed += amount);
    }

    slowDown(amount) {
        return (this.speed -= amount);
    }
}

const car1 = new Car("volvo", 2022);
