import { db } from "../database/database.connection.js";

export async function getFlights(req, res) {

    const {idCity} = req.params

    try {
        const flights = await db.query(`SELECT flights.*, airline.name AS airline, cities.name AS "departureCity", cities.name AS "arrivalCity"
        FROM flights 
        JOIN cities 
            ON flights."idDepartureCity" = cities.id
            AND flights."idArrivalCity" = cities.id
        JOIN airline 
            ON flights."idAirline" = airline.id 
        WHERE cities.id = $1;`, [idCity])

        res.send(flights.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function flightById(req, res) {
    const { id } = req.params

    try {
        const flight = await db.query(`SELECT * FROM flights WHERE id = $1`, [id])

        res.send(flight.rows[0])
    } catch (err) {
        res.status(500).send(err.message)
    }
}
