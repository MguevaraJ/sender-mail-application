const connection = require('../config/DBconnection');
const send_mail = require('../config/mail');

module.exports = server => {

    server.post('/send', async (req, res) => {

        try {

            const { Ml_subject, Ml_text, Ml_to } = req.body; //POST Catch
            
            //Query SELECT "Us_ID, Us_address" for use in Mail and Insert
            const result = await connection.query('SELECT Us_ID,Us_address FROM Users WHERE Us_name=?', [Ml_to]);

            const { Us_ID, Us_address } = result[0];

            const data_mail = { //Create object data_mail with data for e-mail
                Us_ID,
                Ml_to,
                Ml_subject,
                Ml_text
            };

            send_mail(Us_address, Ml_subject, Ml_text); //Send a Mail

            console.log("<-------------EMAIL_STATE-------------->");
            console.log("CONFIG_EMAIL: ", "OPERATION_SUCCESSFULLY");

            await connection.query('INSERT INTO Mails SET ?', data_mail); //Query and insert a database

        } catch (err) {

            console.log("CONFIG_EMAIL: ", err);
        }

        res.redirect('/');
    });

}