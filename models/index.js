const User = require('./User');
const Driver = require('./Driver');

User.hasMany(Driver, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Driver.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Driver };
