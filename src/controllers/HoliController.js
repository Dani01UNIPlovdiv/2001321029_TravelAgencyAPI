const HoliController = require('../models/HolidayModel');
const { readData, writeData } = require('../utils/Utilities');
const { getFilteredHolidays, getUpdatedBody } = require('../utils/HolidayUtility');

// get all holidays and apply filter if needed
exports.getAllHolidays = (req, res) => {
    let { location, startDate, duration } = req.query;
    let data = readData();

    let filteredHolidays = getFilteredHolidays({ location, startDate, duration }, data.holidays);
   
    res.json(filteredHolidays);
};

// get holiday by id
exports.getHolidayById = (req, res) => {
    let data    = readData();
    let id      = parseInt(req.params.id);
    let holiday = data.holidays.find(x => x.id === id);

    holiday ? res.json(holiday) : res.status(404).send(`Holiday not found for id ${id}`);
};

// create holiday
exports.createHoliday = (req, res) => {
    let data = readData();
    let { title, startDate, duration, price, freeSlots, location } = req.body;

    let foundedLocation = data.locations.find(x => x.id === parseInt(location));

    if (!foundedLocation) {
        return res.status(404).send(`Location with ID: ${foundedLocation.id} not found`);
    }

    let createHoliday = new HoliController(data.holidays.length + 1, title, startDate, duration, price, freeSlots, foundedLocation);

    data.holidays.push(createHoliday);
    writeData(data);
    res.status(201).json(createHoliday);
};

// update holiday
exports.updateHoliday = (req, res) => {
    let data = readData();
    let { id, title, startDate, duration, price, freeSlots, location } = req.body;

    let foundedHolidayIndex = data.holidays.findIndex(x => x.id === parseInt(id));

    if (foundedHolidayIndex === -1) {
        return res.status(404).send('HoliController not found');
    }

    let foundedLocation = data.locations.find(x => x.id === parseInt(location));
    if (!foundedLocation) {
        return res.status(404).send(`Location not found for ID: ${location}`);
    }

    data.holidays[foundedHolidayIndex] = getUpdatedBody(data.holidays, foundedHolidayIndex, foundedLocation, { title, startDate, duration, price, freeSlots });

    writeData(data);
    res.json(data.holidays[foundedHolidayIndex]);
};

// delete holiday
exports.deleteHoliday = (req, res) => {
    let data         = readData();
    let id           = parseInt(req.params.id);
    let holidayIndex = data.holidays.findIndex(x => x.id === id);

    if (holidayIndex > -1) {
        data.holidays.splice(holidayIndex, 1);
        writeData(data);
        res.status(200).send('HoliController deleted');
    } else {
        res.status(404).send('HoliController not found');
    }
};
