//This files allows us to access to our database wherever we want
import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient;
}

export const { prisma } = global;

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}