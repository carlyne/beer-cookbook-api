class Malt {
    constructor(name, ebc) {
        this.name = name;
        this.ebc = ebc;
    }

    static createNew({ name, ebc }) {
        return new Malt(name, ebc);
    }
}

module.exports = Malt;
