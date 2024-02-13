const pool = require('../../db');

const queries = require('./queries');

//Getting All Data
const getHeadphones = (req, res) => 
{
    pool.query(queries.getInventory, (error, results) =>{
    if(error)throw error;
    res.status(200).json(results.rows);

    });
};

//Getting Data by Parameter
//Add new Data by Parameter
//Modify Data by parameter

module.exports = {
    getHeadphones,  
};