import { IUser } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../confiq/index";
import { model,Schema } from "mongoose";
const userSchema = new Schema<IUser>({
    name:{
        type:String,
        required:[true,'Please provide your name'],
        minlength:3,
        maxlength: 50,
    },
    age:{
        type:Number,
        require:[true,"Please enter your age"]
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        validate: {
          validator: function (value: string) {
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
          },
          message: '{VALUE} is not a valid email',
        },
        immutable: true,
      },
      password:{
        type:String,
        required:true,
        select:false
      },
      photo:String,
      role:{
        type:String,
        enum:{
            values:['user','email'],
           message: '{VALUE} is not valid, please provide a valid role',
        },
        default:'user',
        required:true
      },
      userStatus: {
        type: String,
        enum: ['active', 'inactive'],
        required: true,
        default: 'active',
      }
      
})
userSchema.pre('save',async function (this: IUser, next:any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this;
    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds)
    );
    next()
    
})
// set '' after saving password
userSchema.post('save', function (doc:any, next:any) {
    doc.password = '';
    next();
  });
  
  const User = model<IUser>('User', userSchema)
  export default User