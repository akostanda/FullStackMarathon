class ExtendableFunc extends Function {
    constructor() {
        super('...args', 'return this.self.call(...args)');

        this.self = this.bind(this);
        return this.self;
    }
}

class Avenger extends ExtendableFunc {
    constructor(name, alias, gender, age, powers, hp) {
        super();
        this.heroName = name;
        this.alias = alias;
        this.gender = gender;
        this.age = age;
        this.powers = powers;
        this.hp = hp;
    }

    toString() {
        return "name: " + this.heroName + "\n"
                + "gender: " + this.gender + "\n"
                + "age: " + this.age +
                "\nhp: " + this.hp + "\n"
    }

    call() {
        return this.alias.toUpperCase() + "\n" + this.powers.join("\n");
    }
}

module.exports = {Avenger};