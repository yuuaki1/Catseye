"use server"

import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET(req, { params }) {
    const { id } = params

    try {
        const article = await prisma.post.findUnique({
            where: {id:  id}
        })

        if (!article) {
        return NextResponse.json({ message: "Article not found" }, { status: 404 })
        }

        return NextResponse.json(article, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}