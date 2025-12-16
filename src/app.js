import express from 'express';
import cors from 'cors'

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN?.split(",") || 'http://localhost:5173',
    credentials:true,
    methods:['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders:['Authorization', 'Content-Type']
}));

app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({extended:true, limit:'18kb'}))
app.use(express.static("public"))

app.get("/", (req,res) => {
    res.send('dsf')
})

export default app 