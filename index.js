const express = require('express')
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
require('dotenv').config

// Express
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());

// Routes
const mainRoutes = require('./routes/main')
app.use(mainRoutes);
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/', (req, res) => 
{
	res.send(
	{ 
		title: 'Bem-Vindo ao People Service!', 
		description: 'Consulte a rota /api para consultar as rotas da API!'
	})
})

//
if (require.main == module)
{
	const port = process.env.PORT || 3000
	app.listen(port, () => 
	{
		console.log(`API running on port ${port}`)
	})
}

module.exports = app