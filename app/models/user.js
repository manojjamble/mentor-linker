import mongoose, {Schema} from 'mongoose';


const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String },
    password: { type: String, required: true },
    age: { type: Number },
    address: { type: String },
    role: { type: String, enum: ['student', 'mentor'], required: true }
});

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User;
