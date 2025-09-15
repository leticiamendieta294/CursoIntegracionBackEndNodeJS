import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();
//traer la lista de usuarios
export const getUsers = async (req: Request, res: Response) => {
 const users = await prisma.user.findMany(); //sinonimo de select * from users.
 res.json(users);
};

// insertar o crear el usuario aqui es donde se hashed password 
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
 try {
 const { name, email, password } = req.body;
 const hashPassword = await bcrypt.hash(password,10)
 const user = await prisma.user.create({ data: { name, email, password : hashPassword } }); // sinonimo del insert into user.....
  const { password: _, ...safeUser } = user;

res.status(200).json(safeUser);
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


// filtrado 

export const filterUser = async (req: Request, res: Response) => {

    const {nombre} = req.params;

    const listadoUser = await prisma.user.findMany({
        where: {
            name : {
                contains : nombre
            }
        }
    })
res.json(listadoUser);

}

//orderBy

export const ordenUser = async (req: Request, res: Response) => {

    const listadoUserOrdenado = await prisma.user.findMany({
        orderBy:{
            name : "desc"
        }
    })

    res.json(listadoUserOrdenado);
}

// paginacion 
export const paginacionUser = async (req: Request, res: Response) => {

    const listapaginada = await prisma.user.findMany({
        skip : 2,
        take: 3
    })

    res.json(listapaginada);
}