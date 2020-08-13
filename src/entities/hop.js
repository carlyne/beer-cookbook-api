class Hop {
    constructor(name, category, origin) {
        this.name = name;
        this.category = category;
        this.origin = origin;
    }

    static createNew({ name, category, origin }) {
        return new Hop(name, category, origin);
    }
}

module.exports = Hop;
