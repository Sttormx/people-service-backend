const supertest = require("supertest");
const app = require('../index.js')
const database = require('../models/index')

describe('Collaborator', () => 
{
    it('GET /collaborator/', async () => 
    {
        const response = await supertest(app)
        .get('/collaborator/');
        
        expect(response.statusCode).toEqual(200)
    })

    it('GET /collaborator/ID', async () => 
    {
        const response = await supertest(app)
        .get('/collaborator/1');
        
        expect(response.statusCode).toEqual(200)
    })

    it('POST /collaborator/', async () => 
    {
        const response = await supertest(app)
        .post('/collaborator')
        .send(
        {
            name: 'Test Name',
            areopagus_business_id: 1,
            cpf: 'xxx.xxx.xxx-xx',
            cnpj: 'xxx',
            rg: 'xxx',
            born_date: '2022-02-23T03:30:04.000Z',
            routine_id: 1,
            createdAt: "2022-02-23T03:30:04.000Z",
            updatedAt: "2022-02-23T03:30:04.000Z",
            email: 'test@test.com',
            password: 'test',
            status: 'pendent'
        });
        
        expect(response.statusCode).toEqual(200)
    })

    it('PUT /collaborator/ID', async () => 
    {
        const response = await supertest(app)
        .put('/collaborator/1')
        .send(
        {
            name: 'Edita nome',
        });
        
        expect(response.statusCode).toEqual(200)
    })

    it('DELETE /collaborator/ID', async () => 
    {
        const response = await supertest(app)
        .delete('/collaborator/1');
        
        expect(response.statusCode).toEqual(200)
    })
})