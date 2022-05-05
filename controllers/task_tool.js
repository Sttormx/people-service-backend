const { task_tool } = require('../models/index')

exports.findAll = (req, res) =>
{
    try 
    {
        task_tool.findAll().then((data) => 
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
    try 
    {
        const ID = parseInt(req.params.id, 10)
    
        if (ID)
        {
            task_tool.findByPk(ID).then(async data =>
            {
                if (data) 
                    return res.send(data)
    
                return res.status(400).send({ message: 'task_tool not found.' })            
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
    try 
    {        
        task_tool.create(req.body).then(() => 
        {
            res.send({ message: 'task_tool created successfully!' })
        }).catch((error) => 
        {
            return res.status(400).send({ message: 'task_tool data invalid or missing.' })   
        })
    }
    catch (error)
    {
        res.status(500).send({ message: error.message || 'Ops... Try again later.' }) 
    }
}

exports.Update = async (req, res) =>
{
    try 
    {
        const ID = req.params.id

        task_tool.update(req.body, { where: { id: ID } }).then((num) => 
        {
            const status = num > 0 ? 200 : 400

            const message = num > 0
			? 'task_tool updated successfully!'
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
    try 
    {
        const ID = req.params.id

        task_tool.destroy({ where: { id: ID } }).then((num) => 
        {
            const status = num > 0 ? 200 : 400

            const message = num > 0
			? 'task_tool deleted successfully!'
			: 'ID missing or invalid. Please check and try again!';

		    res.status(status).send({ message })
        })
    } 
    catch (error) 
    {
        res.status(500).send({ message: error.message || 'Ops... Try again later.' })  
    }
}