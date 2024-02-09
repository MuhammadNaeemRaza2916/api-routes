import { NextResponse } from "next/server";
import { users } from "../../../../../util/db";
import { NextApiRequest } from "next";

interface MyRequest extends NextApiRequest {
  body: any,
  json: () => Promise<any>
}
interface MyResponse {
  params: any
}

export function GET(request: MyRequest, response: MyResponse) {
  const userData = users.filter((user) => user.id === Number(response.params.id));

  return NextResponse.json(
    userData.length == 0
      ? { result: "No data found", success: false }
      : { result: userData, success: true },
    { status: 200 }
  );
}

export async function PUT(request: MyRequest, response: MyResponse) {

  let payload = await request.json()
  payload.id = response.params.id

  if (!payload.name || !payload.age || !payload.email) {

    return NextResponse.json({ result: "Required data are not received", success: false }, { status: 400 })
  }
  console.log(payload);

  return NextResponse.json({ result: "Data update successfully", success: true }, { status: 200 })

}

export function DELETE(request: MyRequest, response: MyResponse) {
  const userId = response.params.id;
  if (userId) {
    return NextResponse.json({ result: "User deleted Successfully", success: true }, { status: 200 })
  } else {
    return NextResponse.json({ result: "Internal error, please try again later", success: false }, { status: 400 })
  }
}
