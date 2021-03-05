const {Avenger} = require('./Avenger');

class Team {
    constructor(id, avengers) {
        this.id = id;
        this.avengers = avengers;
    }

    battle(damage) {
        for (let i = 0; i < this.avengers.length; i++) {
            this.avengers[i].hp -= damage.damage;
            if (this.avengers[i].hp <= 0) {
                this.avengers.splice(i, 1);
                i--;
            }
        }
    }

    calculateLosses(clonedTeam) {
        let lossAm = clonedTeam.avengers.length - this.avengers.length;
        if (lossAm  > 0) {
            console.log("In this battle we lost " + lossAm + " Avengers");
        } else {
            console.log("We haven't lost anyone in this battle!");
        }
    }

    clone() {
        let array = [];
        for (let i = 0; i < this .avengers.length; i++) {
            array[i] = new Avenger(this.avengers[i].heroName, this.avengers[i].alias, this.avengers[i].gender,
                this.avengers[i].age, this.avengers[i].powers, this.avengers[i].hp)
        }
        return new Team(this.id, array);
    }
}

module.exports = {Team};