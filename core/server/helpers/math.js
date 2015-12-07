var hbs = require('express-hbs');

module.exports = function(){
    hbs.registerHelper('math', function (lvalue, operator, rvalue, options) {
        lvalue = parseFloat(lvalue);
        rvalue = parseFloat(rvalue);

        return {
            "+": lvalue + rvalue,
            "-": lvalue - rvalue,
            "*": lvalue * rvalue,
            "/": lvalue / rvalue,
            "%": lvalue % rvalue
        }[operator];
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
