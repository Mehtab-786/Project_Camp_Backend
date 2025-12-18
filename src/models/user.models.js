import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
const HASH_SALT_ROUND = 10;

const userSchema = new Schema({
    userName: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true,
        index: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    fullName: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Password is Required !']
    },
    avatar: {
        type: {
            url: String,
            localPath: String
        },
        default: {
            url: `https://placehold.co/200`,
            localPath: ""
        }
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type: String
    },
    forgorPasswordToken: {
        type: String
    },
    forgotPasswordExpiry: {
        type: Date
    },
    emailVerificationToken: {
        type: String
    },
    emailVerificationExpiry: {
        type: Date
    }
}, { timestamps: true });


userSchema.pre('save', async function (next) {
    //use normal fn. because arrow fn. doesn't have this context
    if (!this.isModified(this.password)) return next(); 
    //checking if password is changing or not

    this.password = await bcrypt.hash(this.password, HASH_SALT_ROUND);
    next();

})



export const UserModel = model('User', userSchema)