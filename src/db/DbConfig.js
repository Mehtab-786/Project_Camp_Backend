import mongoose from 'mongoose';

async function ConnectToDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database connected')
    } catch (error) {
        console.log('MongoDb :: Connection Error !!', error);
        process.exit(1)
    }
}
export default ConnectToDb