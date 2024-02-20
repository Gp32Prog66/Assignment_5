const pool = require('../../db');

const queries = require('./queries');

/*
//Getting All Data
const getHeadPhones = (req, res) => 
{
    pool.query(queries.getHeadPhones, (error, results) =>{
    if(error)throw error;
    res.status(200).json(results.rows);

    });
};*/

//Getting All Data
const getEarBuds = (req, res) => 
{
    pool.query(queries.getEarBuds, (error, results) =>{
    if(error)throw error;
    res.status(200).json(results.rows);

    });
};

//Get Headphones by ID
const getEarBudsById = (req, res) => 
{
    const id = parseInt(req.params.id);
    pool.query(queries.getEarBudsById,[id], (error, results) =>
    {
        if(error) throw error;
        res.status(200).json(results.rows);
});
}

//Work On This
const getSonyBrandEarBuds = (req, res) => 
{
    const brand = parseInt(req.params.brand); //Ask Question about this line of code!
    pool.query(queries.getSonyBrandEarBuds,[brand], (error, results) =>
    {
        if(error) throw error;
        res.status(200).json(results.rows);
});
}

//Work On This
const getWirelessEarBuds = (req, res) => 
{
    //const wireless = parseInt(req.params.wireless); Ask Question about this line of code!
    pool.query(queries.getWirelessEarbuds,[wireless], (error, results) =>
    {
        if(error) throw error;
        res.status(200).json(results.rows);
});


}
const addEarBuds = (req, res) => 
{
    const {id, brand, model_number, wireless, noise_cancellation} = req.body;
    pool.query(queries.addEarBuds, [id, brand, model_number, wireless, noise_cancellation], (error, results)=> {
    if(error) throw error;
    res.status(200).send("Added New HeadPhones Item successfully");
    });
}

//Work on This
const addFirstThreeColumns = (req, res) => 
{
    const {id, brand, model_number} = req.body;
    pool.query(queries.addEarBuds, [id, brand, model_number], (error, results)=> {
    if(error) throw error;
    res.status(200).send("Added First Three Columns Headphones successfully");
    });
}

//Update Inventory
const updateEarBuds = (req,res) =>
{
    //const id = parseInt(req.params.id);
    const { id,brand } = req.body;  // USE THIS CODE AS REFERENCE FOR PUT METHODS ON POSTMAN
    pool.query(queries.updateEarBuds, [id,brand],(error,results) => 
    {
        if(error) throw error;
        res.status(200).send("Updated Headphones Successfully");
    });
}

//Work on This
const updateNoiseCancellation = (req,res) =>
{
    //const id = parseInt(req.params.id);
    const {id, noise_cancellation } = req.body;  // May need to come back and modify
    pool.query(queries.updateEarBuds, [id,noise_cancellation],(error,results) => 
    {
        if(error) throw error;
        res.status(200).send("Updated Earbuds Noise Cancellation Successfully");
    });
}

//Work on This
const updateWireless = (req,res) =>
{
    //const id = parseInt(req.params.id);
    const { wireless } = req.body;  // May need to come back and modify
    pool.query(queries.updateEarBuds, [wireless],(error,results) => 
    {
        if(error) throw error;
        res.status(200).send("Updated Earbuds Wireless Successfully");
    });
}

//Getting Data by Parameter
//Add new Data by Parameter
//Modify Data by parameter

module.exports = {
    getEarBuds,
    getEarBudsById,
    addEarBuds,
    getSonyBrandEarBuds,
    getWirelessEarBuds,
    getEarBuds,
    

    addFirstThreeColumns,
    updateEarBuds,
    updateNoiseCancellation,
    updateWireless
};
