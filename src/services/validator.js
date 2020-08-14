const ObjectID = require('mongodb').ObjectID;
const Validator = require('@beelab/json-validator');

const validator = new Validator();

validator.addTypeValidator('objectId', function(value, schemaNode) {
    schemaNode['_pattern'] = '^[0-9a-fA-F]{24}$'
    value = this.validateString(value, schemaNode);

    return new ObjectID(value);
});

module.exports = validator;
