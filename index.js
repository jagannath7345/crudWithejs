import express from 'express'
import mongoose from 'mongoose';
import { join } from 'path';
import connection from './db/connection.js';
import studentRoutes from './routes/web.js';
mongoose.set('strictQuery', true);
const app = express();
const port = 7000;
const DATABASE_URL ="mongodb://localhost:27017"

connection(DATABASE_URL)

app.use(express.urlencoded({extended:false}))

app.use('/student',express.static(join(process.cwd(),"public")))
app.use('/student/edit',express.static(join(process.cwd(),"public")))

app.set("view engine", "ejs");

app.use('/student', studentRoutes)

app.listen(port, ()=>{
    console.log(`app running at http://localhost:${port}`)
})