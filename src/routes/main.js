const connection = require('../config/DBconnection');
const { join } = require('path');

module.exports = server => {

    server.get('/', async (req, res) => {

        try {

            const result = await connection.query('SELECT * FROM Users'); //Query SELECT Us_name for select
            res.render(join(__dirname, '../views/index.ejs'), {
                "title": "Sender", "usr": result, "form_user": server.get('edit'),
                "ID": server.get('listID'), "message": server.get('message')
            });
            server.set('message', false);
        } catch (err) {
            console.log("RESPONSE: ", err);
        }

    });

    server.get('/edit_user/:id', (req, res) => {

        const { id } = req.params;
 
        server.set('listID', id);
        server.set('edit', true);
    
        res.redirect('/#Contacts');

    });
}