const context = {
  // context
};

function defineGetter(target, key) {
  context.__defineGetter__(key, function () {
    return this[target][key];
  });
}

function defineSetter(target, key) {
  context.__defineSetter__(key, function (value) {
    this[target][key] = value;
  });
}
// ctx.path => ctx.request.path
defineGetter("request", "path");
defineGetter("request", "query");
defineGetter("request", "header");
defineGetter("request", "headers");

// ctx.body => ctx.response.body
defineGetter("response", "body");
// ctx.body => ctx.response.body = ’ok‘
defineSetter("response", "body");

module.exports = context;
