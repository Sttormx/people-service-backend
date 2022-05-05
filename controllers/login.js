const { Collaborator, tokens } = require('../models/index')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config

exports.Login = async (req, res) =>
{
    // #swagger.tags = ['Login']
    // #swagger.description = 'Endpoint para logar e obter o token de autorizacao.'

    /* #swagger.responses[400] = {
        description: 'Logado!'
    } */
    try 
    {
        
	    if (!req.body.email || !req.body.password) return res.status(400).send({ message: 'Invalid Email/Password.' })

        const result = await Collaborator.findOne({ where: { email: req.body.email } })
        if (result)
        {
            const isValidPassword = await bcrypt.compare(req.body.password, result.password)
            if (isValidPassword)
            {
                const ID = result.dataValues.id
                const token = JWT.sign({ ID }, process.env.secret, {
                    expiresIn: parseInt(process.env.expires, 10)
                })
    
                // Atualizar o token para o uso no relogin
                const tokenResult = await tokens.findOne({ where: { userid: ID } });
                if (tokenResult)
                {        
                    tokenResult.token = token;
                    tokenResult.save();
                }
                else
                    tokens.create({ userid: ID, token });

                return res.send({ auth: true, token })
            }

            return res.status(400).send({ message: 'Incorrect Email/Password.' })  
        }
    
        return res.status(400).send({ message: 'Invalid Email/Password.' })    
    }
    catch (error) 
    {
        res.status(500).send({ message: error.message || 'Ops... Try again later.' }) 
    }
}

exports.Relogin = async (req, res) =>
{
    try 
    {
        if (!req.body.refreshToken || !req.body.id) return res.status(400).send({ message: 'Invalid user/token.' });

        const result = await tokens.findOne({ where: { token: req.body.refreshToken } });
        if (result)
        {
            // Gerar um novo token
            const ID = req.body.id;
            const token = JWT.sign({ ID }, process.env.secret, {
                expiresIn: parseInt(process.env.expires, 10)
            })

            // Atualizar o token
            result.token = token;
            result.save();

            // Enviar o novo token
            return res.send({ auth: true, token });
        }
        
        return res.status(400).send({ message: 'User/token not found.' });
    } 
    catch (error) 
    {
        res.status(500).send({ message: error.message || 'Ops... Try again later.' }) 
    }
}