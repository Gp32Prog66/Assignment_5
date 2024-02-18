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

//Get Headphones by ID
const getHeadPhonesById = (req, res) => 
{
    const id = parseInt(req.params.id);
    pool.query(queries.getHeadPhonesById,[id], (error, results) =>
    {
        if(error) throw error;
        res.status(200).json(results.rows);
});

}
const addHeadPhones = (req, res) => 
{
    const {id, brand, model_number, wireless, noise_cancellation} = req.body;
    pool.query(queries.addHeadPhones, [id, brand, model_number, wireless, noise_cancellation], (error, results)=> {
    if(error) throw error;
    res.status(200).send("Added New HeadPhones Item successfully");
    });
}

//Update Inventory
const updateHeadPhones = (req,res) =>
{
    //const id = parseInt(req.params.id);
    const { id, brand } = req.body;  // May need to come back and modify
    pool.query(queries.updateHeadPhones, [id,brand],(error,results) => 
    {
        if(error) throw error;
        res.status(200).send("Updated Inventory Successfully");
    })
}

//Getting Data by Parameter
//Add new Data by Parameter
//Modify Data by parameter

module.exports = {
    getHeadphones,  
};
