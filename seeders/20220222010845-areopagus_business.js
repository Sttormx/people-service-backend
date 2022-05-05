'use strict';

module.exports = 
{
	async up (queryInterface, Sequelize) 
	{
		return queryInterface.bulkInsert('areopagus_businesses', [
		{
			name: "Areopagus Business",
			createdAt: new Date(),
			updatedAt: new Date()
		}]);
	},

	async down (queryInterface, Sequelize) 
	{
		return queryInterface.bulkDelete('areopagus_businesses', null, {});
	}
};
