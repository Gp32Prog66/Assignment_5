const getHeadPhones = "SELECT * from headphones"; //Changing getInventory to getHeadPhones
const getHeadPhonesById = 'SELECT * FROM headphones WHERE id = $1";
const addHeadPhones = "INSERT into headphones (id,brand,model_number,wireless,noise_cancellation) VALUES($1, $2, $3, $4, $5)";
const updateHeadPhones = "UPDATE headphones set id = $1 where brand = $2";

//Add Headphones

module.exports = {
    getHeadPhones,
    getHeadPhonesByID,
    addHeadPhones,
    updateHeadPhones
};
