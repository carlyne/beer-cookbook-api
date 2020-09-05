class BeerType {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static createNew({_id,  name }) {
        return new BeerType(_id, name);
    }
}

module.exports = BeerType;
