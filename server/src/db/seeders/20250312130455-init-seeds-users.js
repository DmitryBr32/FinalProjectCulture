"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const adminPassword = await bcrypt.hash("Admin123@", 10);

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Admin",
          email: "admin@site.com",
          password: adminPassword,
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Users", { email: "admin@site.com" }, {});
  },
};