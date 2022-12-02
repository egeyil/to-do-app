import { prisma } from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function clearCompleted(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { idArr } = req.body;
    const todoArr = [];

    for (const id of idArr) {
      let todo = await prisma.todo.delete({
        where: {
          id: Number(id),
        },
        select: {
          id: true,
          content: true,
          createdAt: true,
        },
      });
      todoArr.push(todo);
    }
    res.status(200).json({ message: 'Todos deleted successfully', todoArr: todoArr });
  } catch (err) {
    console.log('Failure:' + err);
  }
}
