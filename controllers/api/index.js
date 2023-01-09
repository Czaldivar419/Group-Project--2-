const router = require('express').Router();
const userRoutes = require('./userRoutes');
const driverRoutes = require('./driverRoutes');

router.use('/users', userRoutes);
router.use('/drivers', driverRoutes);

module.exports = router;
