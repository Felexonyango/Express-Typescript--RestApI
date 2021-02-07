import * as dotenv from 'dotenv';
dotenv.config()
import express,{Application,Request,Response} from 'express'
const app:Application = express()
import mongoose from "mongoose";
import  cors from 'cors'; 
import * as bodyparser from 'body-parser'
import * as  bookController from './controller/BookController'

const port = 5000
app.get('/books',bookController.allbook )
app.get('/books',bookController.getbooks)
app.put('/books',bookController.addBook)
app.delete('/books',bookController.deleteBook)
app.post('/book',bookController.updateBook)
 

mongoose.connect( "mongodb+srv://Test2:Db@test.8zhgx.mongodb.net/test?w=majority&retryWrites=true",{
    useUnifiedTopology:true,
    useNewUrlParser:true, 
    useCreateIndex: true,
  })
    .then(() => console.log('Database connected'))
   .catch(err => console.log(err));
   app.use(cors())
   app.use(bodyparser.json())
  

app.listen(port, ()=> console.log(`Running on port ${port}`))