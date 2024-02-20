const Pool = require("pg").Pool;

const pool = new Pool({

    user: "Gp32Prog66",
   // user: "gp32prog66",
    //host: "localhost",
    host: "dpg-cn5rcttjm4es73dpvao0-a",
    password: "PNB0kG24z6JNL8niAI6JZEWaBFMAkFSH"
    database: "headphones_9hvj",  //Keep an eye on this just in case an error occurs. May be an incorrect name. Could be headphones or inventory
    database: "Headphones", //Used For Local Testing
    port: 5432,
});

module.exports = pool;
