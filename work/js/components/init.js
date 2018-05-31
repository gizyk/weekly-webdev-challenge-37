var component1 = require('./component1.js');
var myComponent1 = component1();

module.exports = (function() {
    return {
        init: function() {
            console.log('init');
            myComponent1.init();
        }
    };
})();