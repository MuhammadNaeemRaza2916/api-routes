import { NextResponse } from "next/server";
import { users } from "../../../../util/db"
import { NextApiRequest } from "next";

interface MyRequest extends NextApiRequest {
    json: () => Promise<any>;
}

export function GET(request: MyRequest) {
    const data = users;
    return NextResponse.json(data, { status: 200 })
}

export async function POST(request: MyRequest) {
    const data = await request.json();

    if (!data.name || !data.age || !data.email) {

        return NextResponse.json({ result: "Request failed!", success: false }, { status: 400 })
    }

    return NextResponse.json({ result: "Request received!", success: true }, { status: 201 })
}