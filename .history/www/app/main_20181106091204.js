define(['jquery'], function (require, jquery) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');
    var data = require('./data');
    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');
    print(jquery);
    print(data.getData());
    print(messages.getHello());
});
