const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./index.js'];

const settings = 
{
    info: {
        version: "1.0.0",
        title: "People Service API",
        description: "...",
    },
    host: 'http://localhost:3000',
    basePath: '/',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: 
    [
        {
            "name": "Collaborator",
        },
        {
            "name": "Type",
        },
        {
            "name": "Justify",
        },
        {
            "name": "Value Collaborator",
        },
        {
            "name": "Login",
        },
    ],
}

swaggerAutogen(outputFile, endpointsFiles, settings).then(() => {
    require('./index')
});