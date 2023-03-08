import {prisma} from "@/lib/prisma";
import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
  // Get all todos
  const todos = await prisma.todo.findMany()
  return new Response(JSON.stringify(todos), {
    headers: { 'content-type': 'application/json' },
    status: 200,
  })
}

export async function POST(request: NextRequest) {
  // Create a new todo
  const { content, completed } = await request.json();
  const todo = await prisma.todo.create({
    data: {
      content,
      completed
    },
  })
  return new Response(JSON.stringify(todo), {
    headers: { 'content-type': 'application/json' },
    status: 201,
  })
}
