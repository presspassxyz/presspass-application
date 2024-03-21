import { prisma } from '@/db/index';
import {
  ERROR500, STANDARD
} from '@/helpers/constants';
import { FastifyReply, FastifyRequest } from 'fastify';


export async function getAllOrganizations(
  req: any,
  rep: FastifyReply
): Promise<void> {
  try {
    rep.code(STANDARD.SUCCESS).send(await findUserById(req.params.id));
  } catch (error) {
    console.error('Error finding user with id:' + req.params.id, error);
    rep.code(ERROR500.statusCode).send({ msg: ERROR500.message });
  }
}


export async function createOrganization(
  req: any,
  rep: FastifyReply
): Promise<void> {
  try {
    console.log('In here!', req.params.id, 'BOOODY:', req.body)
    const updatedUser = await updateUserTable(req.params.id, req.body)
    rep.code(STANDARD.SUCCESS).send(updatedUser);
  } catch (error) {
    rep.code(ERROR500.statusCode).send({ msg: ERROR500.message });
  }
}




//DB HELPER FUNCTIONS:
async function updateUserTable(id: string, userObject: any) {
  const { name, email, twitter, instagram, bio, profile_picture } = userObject
  const updatedUser = await prisma.users.update({
    where: { id: Number(id) },
    data: {
      name,
      email,
      twitter,
      instagram,
      bio,
      profile_picture
    },
    select: {
      created_at: true, wallet_address: true, name: true, email: true, twitter: true, instagram: true, bio: true, profile_picture: true
    },
  });
  return updatedUser
}


async function findUserById(id: number) {
  const user = await prisma.users.findUnique({
    where: { id: Number(id) },
    select: {
      created_at: true, wallet_address: true, name: true, email: true, twitter: true, instagram: true, bio: true, profile_picture: true
    },
  });
  return user
}








