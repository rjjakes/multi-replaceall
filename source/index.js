let replaceall = require('replaceall');

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
        for (let obj of replacementList) {
            if (typeof obj === 'object' && obj.substr && obj.to) {
                str = replaceall(obj.substr, obj.to, str);
            }
        }
        return str;
    }
    else {
        return false;
    }
};
