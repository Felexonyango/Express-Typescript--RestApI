import {NextFunction, Request,Response} from 'express'
import Book from '../model/Book';


//Get books 
export async  function allbook (req:Request,res:Response,next :NextFunction){

try{

  const book = await Book.find()
    res.status(200).send({ status: 200, message: "OK", book: book });
}
catch(error){
    next(error)
}


}
export  async function  getbooks (req:Request,res:Response,next:NextFunction){

    try{
        const id= req.params.id
        const books =await Book.findById(id)
        res.status(200).send({status:200, message:"OK",books:books})
    }
    catch(error){
        next(error)
    }
}
export async function  addBook(req:Request,res:Response,next:NextFunction){

    try{

        const book1 = await new Book(req.body)
        book1.save()
        res.status(200).send({status:200, message:"OK",book1:book1})

    }
    catch(error){
        next(error)
    }
}
    

export async function  deleteBook(req:Request,res:Response,next:NextFunction){
    try{
        const id = req.params.id
        const remove = await Book.deleteOne(id)
        res.status(200).send({status:200, message:"OK",remove:remove})

    }
    catch (error){
        next(error)
    }
}
    
    export async  function updateBook(req:Request,res:Response,next:NextFunction){

        try{
            const id =req.params.id;
            const data = req.body;
            const book = await Book.findByIdAndUpdate(id,({...data}))
            res.status(200).send({ status: 200, message: "OK", book: book });

        }
        catch(error){
            next(error)
        }
    }
  


 