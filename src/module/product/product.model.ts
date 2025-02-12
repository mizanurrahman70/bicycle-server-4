import {Schema,model} from "mongoose";
const productSchema =new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    brand:{
        type : String,
        required:true,
        trim:true,
    },
    price:{
        type: Number,
        required:true,
        min: 0
    },
    type:{
        type :String,
        required:true,
        enum:['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric']
    },
    description: {
        type: String,
        required: true,
        trim: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 0
      },
      inStock: {
        type: Boolean,
        required: true,
        default: false
      }
});
const product =model('product',productSchema)
export default product
