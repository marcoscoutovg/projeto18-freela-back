import { db } from "../database/database.connection.js";

export async function getLodging(req, res) {

    const {idCity} = req.params

    try {
        const lodging = await db.query(`SELECT lodging.id, lodging.name, lodging."idMainPhoto", lodging.price,
        cities.name AS city, photos.url AS "mainPhoto"
        FROM lodging 
        JOIN cities 
            ON lodging."idCity" = cities.id
        JOIN photos 
            ON lodging."idMainPhoto" = photos.id
        JOIN lodgingCommodity 
            ON lodging.id = lodgingCommodity."idLodging"
        JOIN commodity
            ON commodity.id = lodgingCommodity."idCommodity"
        WHERE cities.id = $1;`, [idCity])

        res.send(lodging.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function lodgingById(req, res) {

    const { id } = req.params

    try {
        const resLodging = await db.query(`SELECT lodging.id, lodging.name, lodging.description, lodging.price,
        cities.name AS city, photos.url AS "photos"
        FROM lodging 
        JOIN cities 
            ON lodging."idCity" = cities.id
        JOIN photos 
            ON lodging.id = photos."idLodging"
        JOIN lodgingCommodity 
            ON lodging.id = lodgingCommodity."idLodging"
        JOIN commodity
            ON commodity.id = lodgingCommodity."idCommodity"
        WHERE cities.id = $1;`, [id])

        const lodging = {
            ...resLodging.rows[0],
            photos: resLodging.rows.map(p => p.photos),
            commodity: resLodging.rows.map(l => l.commodities)
        }

        delete lodging.commodities
        delete lodging.photos

        res.send(lodging)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

