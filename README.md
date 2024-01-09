# Travel Agency API backend instruction of usage

## Getting Started

### Prerequisites
- Install Node.js : https://nodejs.org/en
- Run Frontend of the project : https://github.com/Dani01UNIPlovdiv/2001321029_TravelAgencyFrontEnd

### Cloning the repository
1. Clone this repository:
   ```bash
   git clone https://github.com/Dani01UNIPlovdiv/2001321029_TravelAgencyAPI
2. Clone the frontend repository:
   ```bash
   git clone https://github.com/Dani01UNIPlovdiv/2001321029_TravelAgencyFrontEnd

3. Navigate to the project directory:
    ```bash
    cd 2001321029_TravelAgencyFrontEnd
4. Install NPM packages:
    ```bash
    npm install
5. Start the server:
    ```bash
    npm run dev
6. Do the same with the backend:
    ```bash
    cd 2001321029_TravelAgencyAPI
    npm install
    npm start
- Frontend run on localhost:5173 by default, but can change depending on usage of the port.
- The backend runs on localhost:8080

### HTTP Requests

#### Holidays
- GET /holidays: Requests all holidays from database.
- POST /holidays: Create a new holiday.
- GET /holidays/{id}: Get a specific holiday by ID.
- PUT /holidays/{id}: Edit an existing holiday.
- DELETE /holidays/{id}: Delete a holiday.

#### Reservations
- POST /reservations: Make a new reservation.
- GET /reservations/{id}: Request a specific reservation by ID.
- DELETE /reservations/{id}: Cancel a reservation.

#### Locations
- GET /locations: Retrieve all locations.
- POST /locations: Add a new location.
- GET /locations/{id}: Get details of a specific location.
- PUT /locations/{id}: Edit location details.
- DELETE /locations/{id}: Remove a location.
