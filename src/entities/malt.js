class Malt {
    constructor(name, ebc, origin) {
        this.name = name;
        this.ebc = ebc;
        this.origin = origin;
    }

    static createNew({ name, ebc, origin }) {
        return new Malt(name, ebc, origin);
    }
}

module.exports = Malt;
