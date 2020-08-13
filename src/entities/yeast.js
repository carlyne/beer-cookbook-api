class Yeast {
    constructor(name, type, origin) {
        this.name = name;
        this.type = type;
        this.origin = origin;
    }

    static createNew({ name, type, origin }) {
        return new Yeast(name, type, origin);
    }
}

module.exports = Yeast;
