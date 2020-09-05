class Hop {
    constructor(id, name, category, origin) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.origin = origin;
    }

    static createNew({ _id, name, category, origin }) {
        return new Hop(_id, name, category, origin);
    }
}

module.exports = Hop;
