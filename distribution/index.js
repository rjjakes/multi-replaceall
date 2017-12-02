'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var replaceall = require('replaceall');

/**
 * An ES6 version of npmjs.com/package/multi-string-replace but using
 * npmjs.com/package/replaceall to do the string replacement work.
 *
 * @param str
 * @param replacementList
 * @returns {*}
 */
module.exports = function (str, replacementList) {
    if (Array.isArray(replacementList)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = replacementList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var obj = _step.value;

                if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.substr && obj.to) {
                    str = replaceall(obj.substr, obj.to, str);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return str;
    } else {
        return false;
    }
};