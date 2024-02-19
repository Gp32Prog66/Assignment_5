const getHeadPhones = "SELECT * from headphones"; //Changing getInventory to getHeadPhones
const getHeadPhonesById = "SELECT * FROM headphones WHERE id = $1";
const getSonyBrandHeadPhones = "SELECT * FROM headphones WHERE id = $'Sony'";
const getWirelessHeadPhones = "SELECT * FROM headphones WHERE wireless = $'TRUE'";


const addHeadPhones = "INSERT into headphones (id,brand,model_number,wireless,noise_cancellation) VALUES($1, $2, $3, $4, $5)";
const addFirstThreeColumns = "INSERT INTO headphones (id,brand,model_number) VALUES ($1,$2,$3)";


const updateHeadPhones = "UPDATE headphones set id = $1 where brand = $2";
const updateNoiseCancellation = "UPDATE headphones SET noisecancellation = $5 where id = $1";
const updateWireless = "UPDATE headphones SET wireless $4 where id = $1";

//Add Headphones

module.exports = {
    getHeadPhones,
    getHeadPhonesByID,
    getSonyBrandHeadPhones,
    getWirelessHeadPhones,
    addHeadPhones,
    addFirstThreeColumns,
    updateHeadPhones,
    updateNoiseCancellation,
    updateWireless
};
