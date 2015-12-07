var hbs = require('express-hbs');

module.exports = function(){
    hbs.registerHelper('ifeven', function(conditional, options) {
      if((conditional % 2) == 0) {
        return options.fn(this);
      } else {
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
