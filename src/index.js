import { config } from 'dotenv';
config({ path: './.env' });
import App from './app.js';

const PORT =  process.env.PORT || 3000;

App.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`)
})
