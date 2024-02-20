const getHeadPhones = "SELECT * from headphones"; //Changing getInventory to getHeadPhones
//Query Different Tables
const getHeadPhonesById = "SELECT * FROM headphones WHERE id = $1";
const getSonyBrandHeadPhones = "SELECT * FROM headphones WHERE id = $2"; //Changed From Sony 
const getWirelessHeadPhones = "SELECT * FROM headphones WHERE wireless = $4"; //Changed From True
//const getEarBuds = "SELECT * from headphones";

//Add Values to HeadPhones
const addHeadPhones = "INSERT into headphones (id,brand,model_number,wireless,noise_cancellation) VALUES($1, $2, $3, $4, $5)";
const addFirstThreeColumns = "INSERT INTO headphones (id,brand,model_number) VALUES ($1,$2,$3)";

//Update Values to HeadPhones
const updateHeadPhones = "UPDATE headphones set id = $2 where brand = $1"; //ID = $2 not $1  brand = $1 not $2
const updateNoiseCancellation = "UPDATE headphones SET noisecancellation = $5 where id = $1";
const updateWireless = "UPDATE headphones SET wireless = $4 where id = $1";

//Add Headphones

module.exports = {
    getHeadPhones,
    getHeadPhonesByID,
    getSonyBrandHeadPhones,
    getWirelessHeadPhones,
    //getEarBuds,
    
    addHeadPhones,
    addFirstThreeColumns,
    
    updateHeadPhones,
    updateNoiseCancellation,
    updateWireless
};
