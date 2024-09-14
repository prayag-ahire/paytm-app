import db from '@repo/db/client'
import  CredentialsProvider  from 'next-auth/providers/credentials'; 
import bcrypt from 'bcrypt';

export const authOptions = {
    providers:[
        CredentialsProvider({
            name:'Credentials',
            Credentials:{
                phone:{label:'Phone number', type:"text",placeholder:"23232323",required: true },
                password:{ lable:"password",type:"password",required:true}
            },
            async authorize(Credentials:any){
                const hashPassword = await bcrypt.hash(Credentials.password,10);
                const existingUser = await db.user.
            }

        })
    ]
}