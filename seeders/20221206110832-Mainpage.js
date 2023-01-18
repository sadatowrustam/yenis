'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mainpage',
    [{
      text_big_tm:"Developing businessusing best tools  Efficient digital solutions",
      text_big_en:"Developing businessusing best tools  Efficient digital solutions",
      text_big_ru:"Developing businessusing best tools  Efficient digital solutions",
      text_small_tm:"Small text",
      text_small_en:"Small text",
      text_small_ru:"Small text",
      createdAt: Sequelize.fn('now'),
      updatedAt: Sequelize.fn('now'),
    }]
    ,{}
    )
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
