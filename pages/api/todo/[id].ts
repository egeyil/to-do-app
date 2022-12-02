import { prisma } from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { content, completed } = req.body;
    const toDoId = req.query.id;

    if (req.method === 'DELETE') {
      const todo = await prisma.todo.delete({
        where: {
          id: Number(toDoId),
        },
        select: {
          content: true,
          createdAt: true,
        },
      });
      res.status(200).json(todo);
    }
    if (req.method === 'PUT') {
      const todo = await prisma.todo.update({
        data: {
          content: content,
          completed: completed,
        },
        where: {
          id: Number(toDoId),
        },
        select: {
          id: true,
          content: true,
          createdAt: true,
        },
      });
      res.status(200).json(todo);
    } 
    else {
      res.status(400).json({ error: 'Invalid request' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
