const context = {
  // context
};

function defineGetter(target, key) {
  context.__defineGetter__(key, function () {
    return this[target][key];
  });
}
// ctx.path => ctx.request.path
defineGetter("request", "path");
defineGetter("request", "query");
defineGetter("request", "header");
defineGetter("request", "headers");

module.exports = context;
