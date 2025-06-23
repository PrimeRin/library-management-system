import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

// GET: Get all users
export async function GET() {
  const users = await prisma.user.findMany({
    include: { class: true, borrowings: true },
  })
  return NextResponse.json(users)
}

// POST: Create a new user
export async function POST(request: Request) {
  const data = await request.json()

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      role: data.role,
      gender: data.gender,
      phoneNo: data.phoneNo,
      password: data.password,
      classId: data.classId, // optional
    },
  })

  return NextResponse.json(user)
}
  