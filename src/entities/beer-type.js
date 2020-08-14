class BeerType {
    constructor(name) {
        this.name = name;
    }

    static createNew({ name }) {
        return new BeerType(name);
    }
}

module.exports = BeerType;
