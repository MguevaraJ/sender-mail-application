const server = require('./config/server.js');

//Routes
require('./routes/main.js')(server);
require('./routes/edit.js')(server);
require('./routes/add_contact.js')(server);
require('./routes/send_and_register_mail.js')(server);
require('./routes/update_contact.js')(server);

server.listen(server.get('port'), () => {
    console.log('server listen on port', server.get('port'))
});
