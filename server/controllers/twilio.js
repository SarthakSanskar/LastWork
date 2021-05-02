const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );


exports.twilioMessage = async (req, res) => {
    try {
        console.log("@@", req.body)
        res.header('Content-Type', 'application/json');
        client.messages
        .create({
          from: process.env.TWILIO_PHONE_NUMBER,
          to: req.body.to,
          body: req.body.body
        })
        .then(() => {
          res.send(JSON.stringify({ success: true }));
        })
        .catch(err => {
          console.log(err);
          res.send(JSON.stringify({ success: false }));
        });
    } catch (err) {
      res.status(400).send('@@@@@Create category failed@@@@@@');
    }
  }