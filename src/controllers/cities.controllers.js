import { db } from "../database/database.connection.js";

export async function getCities(req,res) {

    try {
        const cities = await db.query(`SELECT * FROM cities;`)
        res.send(cities.rows)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

/* export async function cityById(req,res) {

    const {id} = req.params

    try {
        const city = await db.query(`SELECT * FROM cities WHERE id = $1;`, [id])
        res.send(city.rows[0])
    } catch (err) {
        res.status(500).send(err.message);
    }
}
*/
