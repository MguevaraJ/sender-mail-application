const connection = require('../config/DBconnection');

module.exports = server => {

    server.post('/update_user/:id', async (req, res) => {

        try {
            const { id } = req.params;

            const { Us_name, Us_address, Us_relationship } = req.body;

            const newUser = {
                Us_name,
                Us_address,
                Us_relationship
            };

            await connection.query('UPDATE Users set ? WHERE Us_ID=?', [newUser, id]);

            console.log("<------------UPDATE_STATE------------->");            
            console.log("UPDATE_DATA: ", "OPERATION_SUCCESSFULLY");

            server.set('edit', false);
            
        } catch (err) {

            console.log("ERROR: ", err);
        }

        res.redirect('/#Contacts');
    });
}