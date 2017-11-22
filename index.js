const Mustache = require('mustache');
const loaderUtils = require('loader-utils');

module.exports = function (source) {
    const options = loaderUtils.getOptions(this) || {};

    let viewData = {};

    if (options.viewData) {
        viewData = options.viewData;
    }
    if (options.delimiters) {
        if (!Array.isArray(options.delimiters) || options.delimiters.length !== 2) {
            throw new Error('Custom delimiters option must be an array consisting of the opening and closing tag values.');
        }

        Mustache.tags = options.delimiters;
    }

    const renderedView = Mustache.render(source, viewData);

    return 'module.exports = function() { return ' + JSON.stringify(renderedView) + '; };';
};