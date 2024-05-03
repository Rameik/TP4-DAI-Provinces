import { config } from './../configs/dbConfig.js';
import sql from 'mssql/msnodesqlv8.js'

export default class ProvinceRepository {
    getAllAsync = async () => {
        let response = null
        try {
            let pool = await sql.connect(config)
            let result = await pool.request().query('SELECT * FROM Provinces')
            response = result.recordsets[0]
        } catch (error) {
            console.log(error)
        }
        return response
    }

    getByIdAsync = async (id) => {
        let response = null
        try {
            let pool = await sql.connect(config)
            let result = await pool.request().query(`SELECT * FROM Provinces WHERE id = ${id}`)
            response = result.recordsets[0][0]
        } catch (error) {
            console.log(error)
        }
        return response
    }

    createAsync = async (entity) => {
        let response = null
        try {
            let pool = await sql.connect(config)
            let result = await pool.request().query(`INSERT INTO provinces (name, fullName, latitude, longitude, displayOrder) VALUES ('${entity.name}', '${entity.fullName}', ${entity.latitude}, ${entity.longitude}, ${entity.displayOrder})`);
            response = result.rowsAffected
        } catch (error) {
            console.log(error)
        }
        return response
    }

    updateAsync = async (entity) => {
        let response = null
        try {
            let pool = await sql.connect(config)
            let result = await pool.request().query(`UPDATE Provinces SET name = '${entity.name}', fullName = '${entity.fullName}', latitude = ${entity.latitude}, longitude = ${entity.longitude}, displayOrder = ${entity.displayOrder} WHERE id = ${entity.id}`)
            response = result.rowsAffected
        } catch (error) {
            console.log(error)
        }
        return response
    }

    deleteByIdAsync = async (id) => {
        let response = null
        try {
            let pool = await sql.connect(config)
            let result = await pool.request().query(`DELETE Provinces WHERE id = ${id}`)
            response = result.rowsAffected;
        } catch (error) {
            console.log(error)
        }
        return response
    }
}