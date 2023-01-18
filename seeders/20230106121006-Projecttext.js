'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("projecttext",[{
      header_tm:"ferfer",
      header_ru:"f34f3f4",
      header_en:"f43f43f",
      body_tm:"ugf09854u8945g",
      body_ru:"f34hfu34hf3h4",
      body_en:"f43890fu38490fug",
      createdAt: Sequelize.fn('now'),
      updatedAt: Sequelize.fn('now')
    }]),{}
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
