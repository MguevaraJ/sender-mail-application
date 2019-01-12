const connection = require('../config/DBconnection');

module.exports = server => {

    server.post('/add_contact', async (req, res) => {
        try {

            let data_push = req.body; //POST Catch

            await connection.query('INSERT INTO Users SET ?', data_push);

            console.log("<---------ADD_CONTACT_STATE----------->");
            console.log("ADD_CONTACT: ", "OPERATION_SUCCESSFULLY");

        } catch (err) {

            console.log("ADD_CONTACT: ", err);
        }

        res.redirect('/#Contacts');
    });
}