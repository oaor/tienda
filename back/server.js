const app=require("./app")
const connectDatabase = require("./config/database");
const cloudinary= require("cloudinary")

//Setear el archivo de configuracion
const dotenv=require("dotenv");
dotenv.config({path:'Back/config/config.env'})

// configurar la base de datos
connectDatabase();

// configurar cloudinary
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET

})


const server=app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})