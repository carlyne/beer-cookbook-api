class HopCategory {
    constructor(name) {
        this.name = name;
    }

    static createNew({ name }) {
        return new HopCategory(name);
    }
}

module.exports = HopCategory;
