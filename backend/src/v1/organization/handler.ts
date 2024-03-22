import { prisma } from '@/db/index';
import {
  ERROR500, STANDARD
} from '@/helpers/constants';
import { FastifyReply } from 'fastify';


export async function getAllOrganizations(
  req: any,
  rep: FastifyReply
): Promise<void> {
  try {
    rep.code(STANDARD.SUCCESS).send(await prisma.organizations.findMany());
  } catch (error) {
    console.error('Error finding user with id:' + req.params.id, error);
    rep.code(ERROR500.statusCode).send({ msg: ERROR500.message });
  }
}
export async function getOrganizationById(
  req: any,
  rep: FastifyReply
): Promise<void> {
  try {
    rep.code(STANDARD.SUCCESS).send(await findOrganizationById(req.params.id));
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
    console.log(req.body, 'wats REQ BODY org???')
    const createdOrg = await createOrganizationTable(req.body)
    rep.code(STANDARD.SUCCESS).send(createdOrg);
  } catch (error) {
    console.error('Could not create org:', error);
    rep.code(ERROR500.statusCode).send({ msg: ERROR500.message });
  }
}


export async function updateOrganization(
  req: any,
  rep: FastifyReply
): Promise<void> {
  try {
    console.log('In here!', req.params.id, 'BOOODY:', req.body)
    const updatedUser = await updateOrganizationTable(req.params.id, req.body)
    rep.code(STANDARD.SUCCESS).send(updatedUser);
  } catch (error) {
    rep.code(ERROR500.statusCode).send({ msg: ERROR500.message });
  }
}






async function createOrganizationTable(organizationObj: any) {
  const { name, creator_id, } = organizationObj
  const createdOrg = await prisma.organizations.create({
    data: {
      name,
      creator_id,
      //bio
    },
  });

  //TODO you should be able to add 'admins' in the org by adding
  //an array of users in the 'user_organizations table


  return createdOrg
}



async function updateOrganizationTable(id: string, organizationObject: any) {
  const { name, email, twitter, instagram, bio, profile_picture } = organizationObject
  const updatedUser = await prisma.users.update({
    where: { id: Number(id) },
    data: {
      name,
      email,
      twitter,
      instagram,
      bio,
      profile_picture
    }
  });
  return updatedUser
}






async function findOrganizationById(id: number) {
  const user = await prisma.organizations.findUnique({
    where: { id: Number(id) }
  });
  return user
}








