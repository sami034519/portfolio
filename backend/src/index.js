import express, { json } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
const app=express();
app.use(express.json());
app.use(cors());
app.use(json())
const PORT =3000;
const transportar=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'sami430ullah@gmail.com',
        pass:'ambh fmik djtn rizm'
    }
});
app.post('/api/mailer',(req,res)=>{
    
        const {from,subject,message}=req.body;
      const mailoptions={
        from:from,
        replyTo:from,
        to:"sami430ullah@gmail.com",
        subject:subject,
        text:message
      };
      console.log(from);
      transportar.sendMail(mailoptions,(err,info)=>{
        if(err){
            return res.status(500).json({
                message:'err sending mail',
                data:err
            })
        }
        else{
            res.status(200).json({
                data:info,
                message:"Your email has successfully sent..",
                
            })
        }
      })
    
});
app.listen(PORT,()=>{
    console.log('app is running on port',PORT);
})

