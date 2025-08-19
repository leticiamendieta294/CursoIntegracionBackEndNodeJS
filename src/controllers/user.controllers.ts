import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
//traer la lista de usuarios
export const getUsers = async (req: Request, res: Response) => {
 const users = await prisma.user.findMany(); //sinonimo de select * from users.
 res.json(users);
};

// insertar o crear el usuario
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
 try {
 const { name, email } = req.body;
 const user = await prisma.user.create({ data: { name, email } }); // sinonimo del insert into user.....
 res.json(user);
 } catch (error) {
 next(error);
 }
};
//actualizar el usuario
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
 try {
 const { id } = req.params;
 const { name, email } = req.body;
 const user = await prisma.user.update({ //sinonimo de UPDATE 
 where: { id: Number(id) },
 data: { name, email },
 });
 res.json(user);
 } catch (error) {
 next(error);
 }
};
//borrar el user 
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
 try {
 const { id } = req.params;
 await prisma.user.delete({ where: { id: Number(id) } }); 
 res.json({ message: 'Usuario eliminado correctamente' });
 } catch (error) {
 next(error);
 }
};


