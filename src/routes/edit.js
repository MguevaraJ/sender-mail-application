const connection = require('../config/DBconnection');
const D_sendMail = require("../index.js");

module.exports = server => {
    
    server.get('/erase_user/:id', async (req,res) => {

        try {
        const { id } = req.params;
        
        await connection.query('DELETE FROM Users WHERE Us_ID=?', [id]);
        
        console.log("<-------------DELETE_STATE-------------->");        
        console.log("DELETE_USER: ", "OPERATION_SUCCESSFULLY");

        res.redirect('/#Contacts');
    }catch(err) {
        console.log("DELETE_USER: ", err);
    }
    });

    server.get('/edit_user/:id', (req,res) => {
        
        const { id } = req.params;

        req.session.listID = id;
        req.session.edit = 1;
        res.redirect('/#Contacts');

    });
}