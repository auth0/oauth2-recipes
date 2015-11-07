require('fs').readdirSync(__dirname + '/').forEach(function(file) {
  if (file.match(/\.json$/) !== null && file !== 'index.js') {
    var name = file.replace('.json', '');
    exports[name] = require('./' + file);
  }
});
