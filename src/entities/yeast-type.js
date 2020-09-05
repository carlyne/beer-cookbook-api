class YeastType {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static createNew({_id, name }) {
        return new YeastType(_id, name);
    }
}

module.exports = YeastType;
