class YeastType {
    constructor(name) {
        this.name = name;
    }

    static createNew({ name }) {
        return new YeastType(name);
    }
}

module.exports = YeastType;
