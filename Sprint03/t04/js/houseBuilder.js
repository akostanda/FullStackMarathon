function houseBlueprint(address, description, owner, size) {
    this.address = address;
    this.date = new Date();
    this.description = description;
    this.owner = owner;
    this.size = size;
    this._averageBuildSpeed = 0.5
    this.getDaysToBuild = function () {
        return this.size / this._averageBuildSpeed;
    }
}

function HouseBuilder(address, description, owner, size, roomCount) {
    houseBlueprint.call(this, address, description, owner, size)
    this.roomCount = roomCount;
}

const house = new HouseBuilder('88 Crescent Avenue',
    'Spacious town house with wood flooring, 2-car garage, and a back patio.',
    'J. Smith', 110, 5);
