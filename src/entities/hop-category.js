class HopCategory {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static createNew({ _id, name }) {
        return new HopCategory(_id, name);
    }
}

module.exports = HopCategory;
