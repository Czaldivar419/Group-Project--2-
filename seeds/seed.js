const sequelize = require('../config/connection');
const { User, Driver } = require('../models');

const userData = require('./userData.json');
const driverData = require('./driverData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const driver of driverData) {
    await Driver.create({
      ...driver,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
