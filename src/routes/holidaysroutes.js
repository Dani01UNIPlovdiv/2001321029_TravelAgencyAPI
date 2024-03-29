const express = require('express');
const router = express.Router();

const holidayController = require('../controllers/HoliController');

// CRUD functionality
router.get('/holidays', holidayController.getAllHolidays);
router.get('/holidays/:id', holidayController.getHolidayById);
router.post('/holidays', holidayController.createHoliday);
router.put('/holidays', holidayController.updateHoliday);
router.delete('/holidays/:id', holidayController.deleteHoliday);

module.exports = router;

