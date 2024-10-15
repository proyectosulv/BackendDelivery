const UserModels = require("../models/userModels");

module.exports = {

    async getall(req, res, next){
        try {
            const data = await UserModels.getAll();
            console.log(`Usuarios: ${data}`);
            return res.status(200).json(data);           
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: "Error al obtener los usuarios"
            });
        }
    },


    async register(req,res,next){
        try {
            const user = req.body;
            const data = await UserModels.createUser(user);

            return res.status(201).json({
                success: true,
                message: "El registro se realizo correctamente",
                data: data
            });            
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: "Error al tratar de registrar un usuario",
                data: error
            });            
        }
    }





}