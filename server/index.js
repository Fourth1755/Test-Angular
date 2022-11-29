const express=require("express")
const mysql=require("mysql")

const app=express()
app.use(express.json())

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'testbook',
    port:'3306'
})

connection.connect((err)=>{
    if(err){
        console.log('Error connecting to MySQL database=',err)
    }
})

//middleware

app.post("/create",async (req,res)=>{
    const { name,email,password } = req.body
    try{
        connection.query(
            "INSERT INTO users(fullname,email,password) VALUES(?,?,?)",
            [name,email,password],
            (err,results,fields)=>{
                if(err){
                    console.log("Error while inserting a user into the database")
                    return res.status(400).send();
                }
                return res.status(201).json({message:"New user successfully created"})
            }
        )   
    }catch(err){
        console.log(err)
        return res.status(500).send();
    }
})

//const port=process.env.PORT || 8080
//app.listen(port,()=>console.log(`start server in port ${port}`))

app.listen(8080, () => console.log('Server is running on port 8080'))
