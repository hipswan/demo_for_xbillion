var app = require('../server/server.js');
var port = process.env.PORT || 8000
app.listen(port, function() {
 console.log('running at localhost: ' + port);
});