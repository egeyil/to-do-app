import { prisma } from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { content, completed } = req.body;

  try {
    await prisma.todo.create({
      data: {
        content,
        completed,
      }
    });
    res.status(200).json({ message: "Todo created successfully" });
  } catch (err) {
    console.log("Failure:" + err);
  }
}