import { connectionSrt } from "@/lib/db";
import { Products } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

interface MyRequest extends NextApiRequest {
    json: () => Promise<any>;
}

export async function GET() {
    let response = []
    let success = true
    try {
        await mongoose.connect(connectionSrt)
        response = await Products.find()
        return NextResponse.json({ result: response, success }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ result: error, success: !success }, { status: 400 })
    }
}

export async function POST(request: MyRequest) {
    const payload = await request.json()
    await mongoose.connect(connectionSrt)
    let product = new Products(payload)
    const result = await product.save()
    return NextResponse.json({ result, success: true })
}