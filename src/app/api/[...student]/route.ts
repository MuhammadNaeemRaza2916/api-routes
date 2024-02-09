import { NextApiRequest } from "next";

import { NextResponse } from "next/server";

interface MyRequest extends NextApiRequest {
  body: any,
  json: () => Promise<any>
}
interface MyResponse {
  params: any
}

export function GET(request: MyRequest, responsce: MyResponse) {

  let user = responsce.params.student

  return NextResponse.json({ result: user, success: true }, { status: 200 })
}
