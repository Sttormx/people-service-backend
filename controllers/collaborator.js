const { Collaborator, tokens } = require('../models/index')
const { doSendMail } = require('../services/mail')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { urlencoded } = require('express')
require('dotenv').config()

exports.findAll = (req, res) =>
{
    // #swagger.tags = ['Collaborator']
    // #swagger.description = 'Endpoint para obter todos os colaboradores.'
    try 
    {
        Collaborator.findAll().then((data) => 
        {
            // Remove encrypted password from data
            for (let index = 0; index < data.length; index++) 
            {
                const element = data[index];
                element.password = undefined;
            }

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
    // #swagger.tags = ['Collaborator']
    // #swagger.description = 'Endpoint para obter um colaborador.'
    try 
    {
        const ID = parseInt(req.params.id, 10)
    
        if (ID)
        {
            Collaborator.findByPk(ID).then(async data =>
            {
                if (data) 
                    return res.send(data)
    
                return res.status(400).send({ message: 'Collaborator not found.' })            
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

exports.Create = async (req, res) =>
{
    // #swagger.tags = ['Collaborator']
    // #swagger.description = 'Endpoint para criar um colaborador.'

    /* #swagger.responses[400] = {
        description: 'Colaborador criado.' 
    } */
    try 
    {        
        req.body.password = await bcrypt.hash(req.body.password, parseInt(process.env.SALTS, 10)) 
        req.body.email_auth = 0;

        Collaborator.create(req.body).then( async (data) => 
        {
            // Verification mail
            const port = process.env.PORT != 80 ? `:${process.env.PORT}` : ``
            const link = `http://${process.env.ServerAddress}${port}/validation/${data.id}`
            const image = encodeURI('https://i.pinimg.com/originals/d6/f1/8d/d6f18dcdfc48ef9c283fa8e68a5c7a9e.png')

            const mailData =
            {
                to: `${data.email}`,
                subject: 'Verifiy you account.',
                html: 
                `
                <html>
                    <body>
                        <h2 align="center">CONFIRMACAO DE EMAIL</h2>
                        <p align="center"><img src="${image}" height="200px"></p>
                        <p> Obrigado por criar uma conta em nosso sistema! Para ter acesso as funcionalidades de nossa API, clique no link abaixo:</p>
                        <p> LINK: ${link} </p>
                    </body>
                </html>
                `
            }

            // Adicionar um token ao usuario
            const ID = data.id
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

            doSendMail(mailData)
            res.send({ message: 'Collaborator created successfully!', auth: true, token })
        }).catch((error) => 
        {
            console.log(error)
            return res.status(400).send({ message: 'Collaborator data invalid or missing.' })   
        })
    }
    catch (error)
    {
        res.status(500).send({ message: error.message || 'Ops... Try again later.' }) 
    }
}

exports.Update = async (req, res) =>
{
    // #swagger.tags = ['Collaborator']
    // #swagger.description = 'Endpoint para editar um colaborador.'

    /* #swagger.responses[400] = { 
        description: 'Colaborador editado.' 
    } */
    try 
    {
        const ID = req.params.id

        Collaborator.update(req.body, { where: { id: ID } }).then((num) => 
        {
            const status = num > 0 ? 200 : 400

            const message = num > 0
			? 'Collaborator updated successfully!'
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
    // #swagger.tags = ['Collaborator']
    // #swagger.description = 'Endpoint para deletar um colaborador.'
    
    /* #swagger.responses[400] = {
        description: 'Colaborador deletado.' 
    } */
    try 
    {
        const ID = req.params.id

        Collaborator.destroy({ where: { id: ID } }).then((num) => 
        {
            const status = num > 0 ? 200 : 400

            const message = num > 0
			? 'Collaborator deleted successfully!'
			: 'ID missing or invalid. Please check and try again!';

		    res.status(status).send({ message })
        })
    } 
    catch (error) 
    {
        res.status(500).send({ message: error.message || 'Ops... Try again later.' })  
    }
}