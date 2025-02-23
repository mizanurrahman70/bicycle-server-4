import { IUser } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../confiq/index";
import { model,Schema } from "mongoose";
const userSchema = new Schema<IUser>(
  {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, enum: ["admin", "user"], default: "user" },
      phone: { type: String, required: false },
      address: { type: String, required: false },
      city: { type: String, required: false },
  },
  {
      timestamps: true,
      versionKey: false
  }
);
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
  
 export const User = model<IUser>('User', userSchema)
  