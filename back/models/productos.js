const mongoose=require("mongoose")

const productosSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"Por favor registra el nombre del producto."],
        trim:true,
        maxLength:[120,"El nombre del producto no debe exceder los 120 caracteres"]
    },
    precio:{
        type: Number, 
        required:[true,"por favor registre el precio del producto"],
        maxLength:[8, "El precio del producto no puede ser mayor a 99,999,999"],
        default:0.0
    },
    descripcion:{
        type:String,
        required:[true,"Por favor registre una descripción para el producto"]
    },
    calificación:{
        type: Number,
        default:0
    },
    imagen: [{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }],
    categoria:{
        type:String,
        required:[true, "Por favor seleccione la categoria del producto."],
        enum:{
            values:[
                "Alimento Seco",
                "Gama Baja",
                "Accesorios",
                "Gama Alta",
                "Plan A",
                "Plan B",
                "Plan C"
            ]
        }
    },
    vendedor:{
        type:String,
        required:[true,"Por favor registre el vendedor de producto"]
    },
    inventario:{
        type: Number,
        required:[true, "Por favor registre el stock del producto"],
        maxLength:[5,"Cantidad máxima del producto no puede sobre pasar 99999"],
        default:0
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],

user:{
    type: mongoose.Schema.ObjectId, 
    ref: 'User',
    required: true
},

    fechaCreacion:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("productos", productosSchema)