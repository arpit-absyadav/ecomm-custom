var users = require('../../app/controllers/user.server.controller');

module.exports = function(app) {

    app.route('/users').post(users.create);

    // app.route('/users/:userId').get(users.read).put(users.update).delete(users.delete);

    // app.param('userId', users.userByID);

   

};