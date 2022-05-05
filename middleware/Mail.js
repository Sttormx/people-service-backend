const { Collaborator } = require('../models/index')

const isValidated = async (req, res, next) =>
{
    try 
    {
        const result = await Collaborator.findOne({ where: { email: req.body.email } })

        if (result)
        {
            if (result.email_auth == 1)
            {
                next();
                return;
            }

            return res.status(401).json({ auth: false, message: 'User not authorized. Please confirm e-mail.' })
        }
    
        return res.status(401).json({ auth: false, message: 'User not found.' })
    } 
    catch (error) 
    {
        console.log(error) 
    }
}

module.exports = (req, res, next) =>
{
    isValidated(req, res, next)
}