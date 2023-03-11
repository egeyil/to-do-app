import {prisma} from "@/lib/prisma";
import {NextRequest} from "next/server";

export async function PUT(request: NextRequest, { id }: { id: string }) {
  const { content, completed } = await request.json();
  const todo = await prisma.todo.update({
    where: { id },
    data: {
      content,
      completed
    },
  })
  return new Response(JSON.stringify(todo), {
    headers: { 'content-type': 'application/json' },
    status: 200,
  })
}

export async function DELETE(request: NextRequest, { id }: { id: string }) {
  console.log(id)
  const todo = await prisma.todo.delete({
    where: { id },
  })
  return new Response(JSON.stringify(todo), {
    headers: { 'content-type': 'application/json' },
    status: 200,
  })
}