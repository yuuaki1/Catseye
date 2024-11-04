"use server"

import { auth } from "@/auth"
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function POST (req: Request) {
    const user = await auth()
    try {
        const post = await req.json()
        const response = await prisma.post.create({
            data: {
                title: post.title as string,
                desc: post.story as string,
                userEmail: user?.user?.email as string,
            }
        })

        if (!response) {
            return NextResponse.json({ message: "Post not created" }, { status: 400 })
        }

        return NextResponse.json({ message: "Post created" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}       

export async function GET() {
    try {
        const posts = await prisma.post.findMany()
        return NextResponse.json(posts)
    } catch (err) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

