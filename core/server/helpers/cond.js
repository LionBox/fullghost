var hbs = require('express-hbs');

module.exports = function(){
    hbs.registerHelper('cond', function (v1, operator, v2, options) {
        switch (operator) {
            case '==':
                return (v1 == v2) ? options.fn(this) : options.inverse(this);
            case '===':
                return (v1 === v2) ? options.fn(this) : options.inverse(this);
            case '<':
                return (v1 < v2) ? options.fn(this) : options.inverse(this);
            case '<=':
                return (v1 <= v2) ? options.fn(this) : options.inverse(this);
               case '>':
                return (v1 > v2) ? options.fn(this) : options.inverse(this);
               case '>=':
                return (v1 >= v2) ? options.fn(this) : options.inverse(this);
            case '&&':
                return (v1 && v2) ? options.fn(this) : options.inverse(this);
            case '||':
                return (v1 || v2) ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    });
};

// # Title Helper
// Usage: `{{title}}`
//
// Overrides the standard behaviour of `{[title}}` to ensure the content is correctly escaped

// var hbs             = require('express-hbs'),
//     title;

// title = function () {
//     return new hbs.handlebars.SafeString(hbs.handlebars.Utils.escapeExpression(this.title || ''));
// };

// module.exports = title;
