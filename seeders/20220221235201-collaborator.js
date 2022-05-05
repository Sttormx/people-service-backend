const bcrypt = require('bcrypt')
'use strict';

module.exports = 
{
	async up (queryInterface, Sequelize) 
	{
		return queryInterface.bulkInsert('Collaborators', [
		{
			name: 'Admin',
			areopagus_business_id: 1,
			cpf: '111.111.111-11',
			cnpj: '11.111.111/0001-11',
			rg: 'MG-111.111.11',
			born_date: new Date("2000", "01", "01"),
			routine_id: 1,
			email: 'admin@admin.com',
			password: await bcrypt.hash('admin', parseInt(10, 10)),
			createdAt: new Date(),
			updatedAt: new Date(),
			email_auth: 1,
			status: 'Pendent'
		}]);
	},

	async down (queryInterface, Sequelize) 
	{
		return queryInterface.bulkDelete('Collaborators', null, {});
	}
};
