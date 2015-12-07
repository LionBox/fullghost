var hbs = require('express-hbs');

module.exports = function(){
    hbs.registerHelper("everOther", function (index, amount, scope) {
    if ( ++index % amount )
        return scope.inverse(this);
    else
        return scope.fn(this);
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
