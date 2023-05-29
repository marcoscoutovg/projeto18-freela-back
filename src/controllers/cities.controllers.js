import { db } from "../database/database.connection.js";

export async function getCities(req,res) {

    try {
        const cities = await db.query(`SELECT * FROM cities;`)
        res.send(cities.rows)
    } catch (err) {
        res.status(500).send(err.message);
    }
}
