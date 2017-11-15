var replaceall = require('replaceall');

/**
 * An almost exact clone of npmjs.com/package/multi-string-replace but using
 * npmjs.com/package/replaceall to do the work.
 *
 * @param str
 * @param replacementList
 * @returns {*}
 */
module.exports = function (str, replacementList) {
    if (Array.isArray(replacementList)) {
        for (var i = 0; i < replacementList.length; i++) {
            var obj = replacementList[i];
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
