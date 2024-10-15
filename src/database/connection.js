const sql = require("mssql");

const dbSettings = {
    user : process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    server: process.env.DBSERVER, 
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
      options: {
        encrypt: false, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

const getConnecction = async ()=>{
    try {
       const pool = await sql.connect(dbSettings);
       console.log("Conectado a la DB!!😎😎😎");       
       return pool;        
    } catch (error) {
        console.log("Error encontrado: ", error);        
    }
}

module.exports = {
    dbSettings,
    getConnecction,
    sql
}