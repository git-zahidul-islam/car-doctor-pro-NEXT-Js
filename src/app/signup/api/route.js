import { connectDB } from "@/lib/connectDB";
const bcrypt = require('bcrypt');

export const POST =async (req) => {

    const newUser = await req.json()
    console.log("check the data",newUser?.email);
    try {
        const db = await connectDB()
        const userCollection = db.collection('users');

        const exist = await userCollection.findOne({email: newUser?.email})
        if(exist){
            return Response.json({message: "Already exist"},{status: 304})
        }

        const hashPassword = bcrypt.hashSync(newUser.password, 14);
        const res = await userCollection.insertOne({...newUser, password: hashPassword});

        return Response.json({message: "user created"},{status: 200})
    } catch (error) {
        return Response.json({message: "have a problems"},error,{status: 500})
    }
}