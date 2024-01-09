const express = require('express');
const reservationController = require('../controllers/ReserveController');
const router = express.Router();

// CRUD functionality 
// implement find reservation
router.get('/reservations', reservationController.getAllReservations);
router.get('/reservations/:id', reservationController.getReservationById);
router.get('/find-reservation', reservationController.findReservationByPhoneNumber);
router.get('/find-reservation/', reservationController.findReservationByHolidayId);
router.post('/reservations', reservationController.createReservation);
router.put('/reservations', reservationController.updateReservation);
router.delete('/reservations/:id', reservationController.deleteReservation);

module.exports = router;
