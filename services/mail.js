require('dotenv').config()

const API_KEY = process.env.MailGun_KEY
const DOMAIN = process.env.MailGun_DOMAIN
const mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

const doSendMail = data =>
{
    try 
    {
        // Define from mail
        data.from = process.env.MailGun_MAIL;

        return mailgun.messages().send(data, (error, body) => 
        {
            if(error) console.log(error)
            else console.log(`EMAIL SENDED TO ${data.to}`);
        });   
    } 
    catch (error) 
    {
        console.log(error)    
    }
}

module.exports = { doSendMail }