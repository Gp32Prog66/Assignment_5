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

    //Work On This
const getSonyBrandHeadPhones = (req, res) => 
{
    //const brand = parseInt(req.params.brand); //Ask Question about this line of code!
    pool.query(queries.getSonyBrandHeadPhones,[brand], (error, results) =>
    {
        if(error) throw error;
        res.status(200).json(results.rows);
});
}

//Work On This
const getWirelessHeadPhones = (req, res) => 
{
    //const wireless = parseInt(req.params.wireless); Ask Question about this line of code!
    pool.query(queries.getWirelessHeadPhones,[wireless], (error, results) =>
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

//Work on This
const addFirstThreeColumns = (req, res) => 
{
    const {id, brand, model_number} = req.body;
    pool.query(queries.addHeadPhones, [id, brand, model_number], (error, results)=> {
    if(error) throw error;
    res.status(200).send("Added First Three Columns Headphones successfully");
    });
}

//Update Inventory
const updateHeadPhones = (req,res) =>
{
    const id = parseInt(req.params.id);
    const { brand } = req.body;  // May need to come back and modify
    pool.query(queries.updateHeadPhones, [id,brand],(error,results) => 
    {
        if(error) throw error;
        res.status(200).send("Updated Inventory Successfully");
    });
}

//Work on This
const updateNoiseCancellation = (req,res) =>
{
    //const id = parseInt(req.params.id);
    const { noise_cancellation } = req.body;  // May need to come back and modify
    pool.query(queries.updateHeadPhones, [noise_cancellation],(error,results) => 
    {
        if(error) throw error;
        res.status(200).send("Updated Headphones Noise Cancellation Successfully");
    });
}

//Work on This
const updateWireless = (req,res) =>
{
    //const id = parseInt(req.params.id);
    const { wireless } = req.body;  // May need to come back and modify
    pool.query(queries.updateHeadPhones, [wireless],(error,results) => 
    {
        if(error) throw error;
        res.status(200).send("Updated Headphones Wireless Successfully");
    });
}

//Getting Data by Parameter
//Add new Data by Parameter
//Modify Data by parameter

module.exports = {
    getHeadphones,
        getHeadPhonesById,
    addHeadPhones,
    getSonyBrandHeadPhones,
    getWirelessHeadPhones,
    addFirstThreeColumns,
    updateHeadPhones,
    updateNoiseCancellation,
    updateWireless
};
