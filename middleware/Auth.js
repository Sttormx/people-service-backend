const JWT = require('jsonwebtoken')
require('dotenv').config

module.exports = (req, res, next) =>
{
	if (process.env.enableJWT == 'false') return next();

	const token = req.headers['x-access-token'];
	if (!token) return res.status(401).json({ auth: false, message: 'É necessário estar autenticado para acessar esta rota.' });

	JWT.verify(token, process.env.secret, (error, decode) =>
	{
		if (error) return res.status(401).json({ auth: false, message: 'Token nao autorizado.' });

		// O ID do usuario decodificado sera salvo para uso posterior
		req.userID = decode.id
		next()
	})
}