const { getConnecction, sql } = require("../database/connection");
const { Querys } = require("../querys/userQuerys");



const User = {}

User.getAll = async()=> {
    try {
        const pool = await getConnecction();
        const result = await pool.request().query(Querys.getAllUser);
        return result.recordset;
    } catch (error) {
        console.log(error);
        return error;        
    }
}


User.createUser = async(user)=>{
    try {
        const pool = await getConnecction();
        const result = await pool
        .request()
        .input('Email', sql.VarChar, user.email)
        .input('Password', sql.VarChar, user.password)
        .input('Name', sql.VarChar, user.name)
        .input('LastName', sql.VarChar, user.lastName)
        .input('Phone', sql.VarChar, user.phone)
        .input('Image', sql.VarChar, user.image)
        .input('Is_Avaible', sql.TinyInt, user.is_available)
        .input('Session_Token', sql.VarChar, user.session_token)
        .input('Created_At', sql.DateTime, new Date())
        .input('Updated_At', sql.DateTime, new Date())
        .query(Querys.CreateUser);
        return result.recordset[0].id
    } catch (error) {
        console.log(error);
        return error;        
    }

}


module.exports = User;