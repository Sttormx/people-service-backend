const { value_collaborator } = require('../models/index')

exports.findAll = (req, res) =>
{
    // #swagger.tags = ['Value Collaborator']
    // #swagger.description = 'Endpoint para obter todos os values collaborators.'
    try 
    {
        value_collaborator.findAll().then((data) => 
        {
            return res.send(data)
        })
    } 
    catch (error) 
    {
        res.status(500).send({ message: error.message || 'Ops... Try again later.' }) 
    }
}

exports.findOne = (req, res) =>
{
    // #swagger.tags = ['Value Collaborator']
    // #swagger.description = 'Endpoint para obter um value collaborator.'

    /* #swagger.responses[400] = {
        description: 'Value collaborator obtido.' 
    } */
    try 
    {
        const ID = parseInt(req.params.id, 10)
    
        if (ID)
        {
            value_collaborator.findByPk(ID).then(async data =>
            {
                if (data) 
                    return res.send(data)
    
                return res.status(400).send({ message: 'value_collaborator not found.' })            
            }).catch(error => res.status(500).send({ message: error.message || 'Ops... Try again later.' }))
            return;
        }
    
        return res.status(400).send({ message: 'ID missing.' }) 
    }
    catch (error) 
    {
        res.status(500).send({ message: error.message || 'Ops... Try again later.' })  
    }
}

exports.Create = (req, res) =>
{
    // #swagger.tags = ['Value Collaborator']
    // #swagger.description = 'Endpoint para criar um value collaborator.'

    /* #swagger.responses[400] = {
        description: 'Value collaborator criado.' 
    } */
    try 
    {        
        value_collaborator.create(req.body).then(() => 
        {
            res.send({ message: 'value_collaborator created successfully!' })
        }).catch((error) => 
        {
            return res.status(400).send({ message: 'value_collaborator data invalid or missing.' })   
        })
    }
    catch (error)
    {
        res.status(500).send({ message: error.message || 'Ops... Try again later.' }) 
    }
}

exports.Update = async (req, res) =>
{
    // #swagger.tags = ['Value Collaborator']
    // #swagger.description = 'Endpoint para editar um value collaborator.'

    /* #swagger.responses[400] = {
        description: 'Value collaborator editado.' 
    } */
    try 
    {
        const ID = req.params.id

        value_collaborator.update(req.body, { where: { id: ID } }).then((num) => 
        {
            const status = num > 0 ? 200 : 400

            const message = num > 0
			? 'value_collaborator updated successfully!'
			: 'Data invalid. Please check and try again!';

		    res.status(status).send({ message })
        })
    } 
    catch (error)
    {
        res.status(500).send({ message: error.message || 'Ops... Try again later.' })   
    }
}

exports.Delete = (req, res) =>
{
    // #swagger.tags = ['Value Collaborator']
    // #swagger.description = 'Endpoint para deletar um value collaborator.'

    /* #swagger.responses[400] = {
        description: 'Value collaborator deletado.' 
    } */
    try 
    {
        const ID = req.params.id

        value_collaborator.destroy({ where: { id: ID } }).then((num) => 
        {
            const status = num > 0 ? 200 : 400

            const message = num > 0
			? 'value_collaborator deleted successfully!'
			: 'ID missing or invalid. Please check and try again!';

		    res.status(status).send({ message })
        })
    } 
    catch (error) 
    {
        res.status(500).send({ message: error.message || 'Ops... Try again later.' })  
    }
}