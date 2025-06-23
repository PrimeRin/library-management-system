import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

// GET: Get user by ID
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
    include: { class: true, borrowings: true },
  })

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

  return NextResponse.json(user)
}

// PUT: Update user by ID
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const data = await request.json()

  const updated = await prisma.user.update({
    where: { id: Number(params.id) },
    data: {
      name: data.name,
      email: data.email,
      phoneNo: data.phoneNo,
      gender: data.gender,
      role: data.role,
      password: data.password,
      classId: data.classId,
    },
  })

  return NextResponse.json(updated)
}

// DELETE: Delete user by ID
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.user.delete({
    where: { id: Number(params.id) },
  })

  return NextResponse.json({ message: "User deleted" })
}
