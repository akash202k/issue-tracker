import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import Schema from "@/app/api/zod";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const validation = Schema.issueSchema.safeParse(body);
    if (!validation.success) {
        console.log(validation.error.errors);
        return NextResponse.json(validation.error.errors, { status: 400 })
    }

    const newIssue = await prisma.issue.create({
        data: {
            title: body.title,
            description: body.description
        }

    })

    return NextResponse.json("issue created", { status: 200 });
}