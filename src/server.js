require("dotenv").config();
const express = require("express");
const http = require("http");
const morgan = require("morgan");
const cors = require("cors");

const userRoutes = require('./routes/usersRoutes');

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());
app.disable("x-powered-by");

//RUTAS
app.use('/api', userRoutes);

server.listen(port, ()=>{
    console.log("Servidor corriendo: localhost:", port);    
});

//ERROR HANDLER
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(err.status || 500).send(err.stack);    
});

module.exports = {
    server
}

