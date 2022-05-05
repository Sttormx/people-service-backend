const { Type } = require('../models/index')

exports.findAll = (req, res) =>
{
    // #swagger.tags = ['Type']
    // #swagger.description = 'Endpoint para obter todos os tipos.'
    try 
    {
        Type.findAll().then((data) => 
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
    // #swagger.tags = ['Type']
    // #swagger.description = 'Endpoint para obter um tipo.'

    /* #swagger.responses[400] = {
        description: 'Tipo obtido.' 
    } */
    try 
    {
        const ID = parseInt(req.params.id, 10)
    
        if (ID)
        {
            Type.findByPk(ID).then(async data =>
            {
                if (data) 
                    return res.send(data)
    
                return res.status(400).send({ message: 'Type not found.' })            
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
    // #swagger.tags = ['Type']
    // #swagger.description = 'Endpoint para criar um tipo.'

    /* #swagger.responses[400] = {
        description: 'Tipo criado.' 
    } */
    try 
    {        
        Type.create(req.body).then(() => 
        {
            res.send({ message: 'Type created successfully!' })
        }).catch((error) => 
        {
            return res.status(400).send({ message: 'Type data invalid or missing.' })   
        })
    }
    catch (error)
    {
        res.status(500).send({ message: error.message || 'Ops... Try again later.' }) 
    }
}

exports.Update = async (req, res) =>
{
    // #swagger.tags = ['Type']
    // #swagger.description = 'Endpoint para editar um tipo.'

    /* #swagger.responses[400] = {
        description: 'Tipo editado.' 
    } */
    try 
    {
        const ID = req.params.id

        Type.update(req.body, { where: { id: ID } }).then((num) => 
        {
            const status = num > 0 ? 200 : 400

            const message = num > 0
			? 'Type updated successfully!'
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
    // #swagger.tags = ['Type']
    // #swagger.description = 'Endpoint para deletar um tipo.'

    /* #swagger.responses[400] = {
        description: 'tipo deletado.' 
    } */
    try 
    {
        const ID = req.params.id

        Type.destroy({ where: { id: ID } }).then((num) => 
        {
            const status = num > 0 ? 200 : 400

            const message = num > 0
			? 'Type deleted successfully!'
			: 'ID missing or invalid. Please check and try again!';

		    res.status(status).send({ message })
        })
    } 
    catch (error) 
    {
        res.status(500).send({ message: error.message || 'Ops... Try again later.' })  
    }
}