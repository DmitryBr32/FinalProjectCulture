"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const adminPassword = await bcrypt.hash("Admin123@", 10);
    const userPassword = await bcrypt.hash("Qwerty123@", 10);

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
        {
          username: "Pupa",
          email: "pupa@pupa.com",
          password: userPassword,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Lupa",
          email: "lupa@lupa.com",
          password: userPassword,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Biba",
          email: "biba@biba.com",
          password: userPassword,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Boba",
          email: "boba@boba.com",
          password: userPassword,
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
