const getEarBuds = "SELECT * from earbuds";
//Query Different Tables
const getEarBudsById = "SELECT * FROM earbuds WHERE id = $1";
const getSonyBrandEarBuds = "SELECT * FROM earbuds WHERE id = $2";
const getWirelessEarBuds = "SELECT * FROM earbuds WHERE wireless = $4";
//const getEarBuds = "SELECT * from earbuds";

//Add Values to HeadPhones
const addEarBuds = "INSERT into earbuds (id,brand,model_number,wireless,noise_cancellation) VALUES($1, $2, $3, $4, $5)";
const addFirstThreeColumns = "INSERT INTO eardbuds (id,brand,model_number) VALUES ($1,$2,$3)";

//Update Values to HeadPhones
const updateEarBuds = "UPDATE earbuds set brand = $2 where id = $1";  //USE THIS AS REFERENCE FOR POSTMAN
const updateNoiseCancellation = "UPDATE earbuds set noise_cancellation = $5 where id = $1";
const updateWireless = "UPDATE earbuds set wireless = $4 where id = $1";




module.exports = {
    getEarBuds,
    getEarBudsById,
    getSonyBrandEarBuds,
    getWirelessEarBuds,
//    getEarBuds,

    addEarBuds,
    addFirstThreeColumns,

    updateEarBuds,
    updateNoiseCancellation,
    updateWireless
};
