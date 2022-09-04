import { prisma } from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { content, completed } = req.body;
  const toDoId = req.query.id;

  if (req.method === 'DELETE') {
    const todo = await prisma.todo.delete({
      where: {
        id: Number(toDoId),
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
    });
    res.status(200).json(todo);
  } else {
    console.log('Something went wrong');
  }
}
