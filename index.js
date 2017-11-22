const Mustache = require('mustache');
import {getOptions} from 'loader-utils';

export default function (source) {
    const options = getOptions(this) || {};

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

    return Mustache.render(source, viewData);
}