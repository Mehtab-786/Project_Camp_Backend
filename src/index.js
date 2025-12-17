import { config } from 'dotenv';
config({ path: './.env' });
import App from './app.js';
import ConnectToDb from './db/DbConfig.js'

const PORT = process.env.PORT || 3000;

ConnectToDb()
    .then(() => {
        App.listen(PORT, () => {
            console.log(`Server running on port : ${PORT}`)
        })
    })
    .catch((err) => {
        console.error('MongoDB :: Connection Error :: ', err);
        process.exit(1)
     })
