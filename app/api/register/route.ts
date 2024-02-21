import connectMongoDB from "@/libs/mongodb" ;
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user"
import Student from "@/models/student"
import Mentor from "@/models/mentor"
import Match from "@/models/match";
import bcryptjs from "bcryptjs";

export async function POST(request : NextRequest){
    const  { name, email, password, phone, address, role, matchtest } = await request.json();
    await connectMongoDB();
    
    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    // Create a new user
    const newUser = await User.create({name, email, password: hashedPassword, mobile: phone, address, role });
    await newUser.save();

    const matchCount = await Match.countDocuments();

    if (matchCount === 0) {
        // Match collection is empty or doesn't exist
        // Create a new document with initial empty values
        const newMatch = new Match({
            testData: { },
            count: 0
        });
        
        await newMatch.save();
    }


    if(role === 'student'){
        let matchdata: number[] = [];
        for(const param in matchtest) {
            for(const value in matchtest[param]) {
                if (matchtest[param][value]) matchdata.push(1);
                else matchdata.push(0);
            }
        }

        const student = await Student.create({"userId": newUser._id, testData : matchdata, ...matchtest});
        await student.save();
        return NextResponse.json({
            message: "Student Created.",
            newUser,
            matchdata
        });
    }
    else if (role === 'mentor') {
        const mentor = await Mentor.create({ "userId": newUser._id, ...matchtest });
        await mentor.save();
        let doc = await Match.findOne();

        // Increment the number field
        doc.count = doc.count + 1;
        let matchdata: number[] = [];
        for(const param in matchtest) {
            for(const value in matchtest[param]) {
                if (matchtest[param][value]) matchdata.push(1);
                else matchdata.push(0);
            }
        }
        
        // Append the new data array to the existing nested array
        doc.testData.data.push(matchdata);

        await doc.save();   

        return NextResponse.json({
            message: "Mentor Created.",
            newUser,
            matchdata
        });
    } 
    else {
        return NextResponse.json({ message: 'Invalid role. Role must be either "student" or "mentor".' });
    }
}