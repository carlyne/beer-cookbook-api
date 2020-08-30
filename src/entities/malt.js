class Malt {
    constructor(id, name, ebc, originCode) {
        this.id = id;
        this.name = name;
        this.ebc = ebc;
        this.originCode = originCode;
    }

    static createNew({ _id, name, ebc, originCode }) {
        return new Malt(_id, name, ebc, originCode);
    }
}

module.exports = Malt;
