import express, {Request, Response} from 'express'
const app = express()
const port = 8000

app.use(express.json())

app.get('/',(req: Request,res: Response): any=>{
    return res.json({message:"Welcome to Devops Zero to Hero"})
})

app.listen(port,()=>{
    console.log(`Listening on PORT ${port}`)
})
