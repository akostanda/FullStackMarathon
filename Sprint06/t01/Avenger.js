class ExtendableFunc extends Function {
    constructor() {
        super('...args', 'return this.self.call(...args)');

        this.self = this.bind(this);
        return this.self;
    }
}

class Avenger extends ExtendableFunc {
    constructor(obj) {
        super();
        this.heroName = obj.name;
        this.alias = obj.alias;
        this.gender = obj.gender;
        this.age = obj.age;
        this.powers = obj.powers;
    }

    toString() {
        return "name: " + this.heroName + "\n"
                + "gender: " + this.gender + "\n"
                + "age: " + this.age
    }

    call() {
        return this.alias.toUpperCase() + "\n" + this.powers.join("\n");
    }
}

module.exports = {Avenger};