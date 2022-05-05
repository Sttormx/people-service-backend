const { Collaborator } = require('../models/index')

exports.Authorize = async (req, res) =>
{
    try 
    {
        const ID = parseInt(req.params.id, 10)
        if (ID)
        {
            const result = await Collaborator.findByPk(ID)
            
            if (result)
            {
                result.email_auth = 1;
                await result.save();

                return res.send({ message: 'Authorized!' })
            }
    
            return res.send({ message: 'User not found. Please contact an administrator.' })
        }

        return res.send({ message: 'User not found in URL. Please contact an administrator.' })
    } 
    catch (error) 
    {
        console.log(error)   
        res.status(500).send({ message: error.message || 'Ops... Try again later.' }) 
    }
}