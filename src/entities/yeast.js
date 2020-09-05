class Yeast {
    constructor(id, name, type, origin) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.origin = origin;
    }

    static createNew({ _id, name, type, origin }) {
        return new Yeast(_id, name, type, origin);
    }
}

module.exports = Yeast;
