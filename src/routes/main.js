const connection = require('../config/DBconnection');
const { join } = require('path');

module.exports = server => {

    server.get('/', async (req, res) => {

        try {

            const result = await connection.query('SELECT * FROM Users'); //Query SELECT Us_name for select
            
            res.render(join(__dirname, '../views/index.ejs'), {
                "title": "Sender", "usr": result, "form_user": req.session.edit,
                "ID": req.session.listID
            });
            
        } catch (err) {

            console.log("RESPONSE: ", err);
        }
    });
}