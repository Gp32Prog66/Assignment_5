const Pool = require("pg").Pool;

const pool = new Pool({

    user: "szojo",
   // user: "gp32prog66",
    host: "localhost",
    //host: "",
  //  password: "GAmeP88raMD####",
   // password: "",
    database: "Headphones",  //Keep an eye on this just in case an error occurs. May be an incorrect name. Could be headphones or inventory
    port: 5432,
});

module.exports = pool;