'use strict';

var _           = require("lodash"),
    Safe        = require("./Safe");


var Obj = {

    /**
     *
     * Get the object keys. If a filter is specified it returns the keys
     * that match the filter regular expression.
     *
     * @param {Object}          obj
     * @param {String|RegExp}   filter
     *
     * @return {Array}
     *
     */
    filter: function(obj, filter){

        obj         = Safe.object(obj);
        filter      = Safe.regexp(filter, "/.*/");

        return _.transform(
            obj,
            function(result, val, key){

                if(filter.exec(key)){
                    result.push(key);
                }

                return result;

            },
            []);

    }

};

module.exports = Obj;