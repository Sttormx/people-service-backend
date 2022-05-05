const { Justify } = require('../models/index')

exports.findAll = (req, res) =>
{
    // #swagger.tags = ['Justify']
    // #swagger.description = 'Endpoint para obter todas as justificativas.'
    try 
    {
        Justify.findAll().then((data) => 
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
    // #swagger.tags = ['Justify']
    // #swagger.description = 'Endpoint para obter uma justificativa.'

    /* #swagger.responses[400] = {
        description: 'Justificativa obtida.' 
    } */
    try 
    {
        const ID = parseInt(req.params.id, 10)
    
        if (ID)
        {
            Justify.findByPk(ID).then(async data =>
            {
                if (data) 
                    return res.send(data)
    
                return res.status(400).send({ message: 'Justify not found.' })            
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
    // #swagger.tags = ['Justify']
    // #swagger.description = 'Endpoint para criar uma justificativa.'

    /* #swagger.responses[400] = {
        description: 'Justificativa criada.' 
    } */
    try 
    {        
        Justify.create(req.body).then(() => 
        {
            res.send({ message: 'Justify created successfully!' })
        }).catch((error) => 
        {
            return res.status(400).send({ message: 'Justify data invalid or missing.' })   
        })
    }
    catch (error)
    {
        res.status(500).send({ message: error.message || 'Ops... Try again later.' }) 
    }
}

exports.Update = async (req, res) =>
{
    // #swagger.tags = ['Justify']
    // #swagger.description = 'Endpoint para editar uma justificativa.'

    /* #swagger.responses[400] = {
        description: 'Justificativa editada.' 
    } */
    try 
    {
        const ID = req.params.id

        Justify.update(req.body, { where: { id: ID } }).then((num) => 
        {
            const status = num > 0 ? 200 : 400

            const message = num > 0
			? 'Justify updated successfully!'
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
    // #swagger.tags = ['Justify']
    // #swagger.description = 'Endpoint para deletar uma justificativa.'

    /* #swagger.responses[400] = {
        description: 'Justificativa deletada.' 
    } */
    try 
    {
        const ID = req.params.id

        Justify.destroy({ where: { id: ID } }).then((num) => 
        {
            const status = num > 0 ? 200 : 400

            const message = num > 0
			? 'Justify deleted successfully!'
			: 'ID missing or invalid. Please check and try again!';

		    res.status(status).send({ message })
        })
    } 
    catch (error) 
    {
        res.status(500).send({ message: error.message || 'Ops... Try again later.' })  
    }
}