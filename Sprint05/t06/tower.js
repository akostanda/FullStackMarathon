const Building = require('./building');

module.exports = class Tower extends Building {
    get hasElevator() {
        return this.elevator;
    }

    set hasElevator(value) {
        if (value === true) {
            this.elevator = "+";
        }
        else {
            this.elevator = "-";
        }
    }

    get arcCapacity() {
        return this._arcCapacity;
    }

    set arcCapacity(value) {
        this._arcCapacity = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    getFloorHeight() {
        return this._height / this.floors;
    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
            `Elevator: ${this.hasElevator}`,
            `Arc reactor capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Floor height: ${this.getFloorHeight()}`,
        ].join('\n');
    }
}