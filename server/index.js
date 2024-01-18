import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { userRoute } from './routes/userRoute.js'
import { propertiesRoute } from './routes/propertiesRoute.js'
import mongoose from 'mongoose'
dotenv.config()
const app = express();
const connectDatabase = () => {
    mongoose
      .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {
        console.log(`mongod connected with server: ${data.connection.host}`);
      });
  };
const PORT = process.env.PORT || 8000;
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:true}))
connectDatabase();
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})


app.use('/api/user', userRoute)
app.use('/api/properties', propertiesRoute)
