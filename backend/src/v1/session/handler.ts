import { FastifyRequestTypebox, FastifyReplyTypebox } from '@/v1/fastifyTypes';
import { prisma } from '@/db/index';
import { ERRORS } from '@/helpers/errors';
import { VerifySiweMessageInput } from './schema';
import {
  ERROR500, STANDARD
} from '@/helpers/constants';
import { generateNonce } from 'siwe';
import { FastifyReply, FastifyRequest } from 'fastify';
import jwt from "jsonwebtoken";






export async function getAutheticatedData(
  req: FastifyRequest,
  rep: FastifyReply
): Promise<void> {
  try {
    rep.code(STANDARD.SUCCESS).send({ data: "Congrats you got the data!" });
  } catch (error) {
    rep.code(ERROR500.statusCode).send({ msg: ERROR500.message });
  }
}

export async function authenticateUser(
  req: FastifyRequestTypebox<typeof VerifySiweMessageInput>,
  rep: FastifyReplyTypebox<typeof VerifySiweMessageInput>
): Promise<void> {
  console.log(req.body, 'req body')

  const { wallet } = req.body
  console.log(wallet, 'user body')
  try {
    if (!wallet.address) {
      console.error('Error, no wallet address provided in Privy user obj');
      rep.code(ERROR500.statusCode).send({ msg: ERRORS.swieMsgFailed });
    }
    else {
      //Create JWT to send back to client TODO: we dont need this JWT since Privy gives us a token we can use instead
      const token = jwt.sign(wallet.address, "jwt-secret");
      const existingUser = await findExistingUser(wallet.address)
      //If existing user exists return it, TODO: update jwt in user table from Privy auth token
      if (existingUser?.wallet_address) {
        //await updateUserTokenAtLogin("")
        rep.code(STANDARD.SUCCESS).send({ user: existingUser, jwt: token });
      } else {
        const createdUser = await createUser(wallet.address)
        rep.code(STANDARD.SUCCESS).send({ user: createdUser, jwt: token });

      }
    }
  } catch (error) {
    console.error('Error verifying message:', error);
    rep.code(ERROR500.statusCode).send({ msg: ERROR500.message });
  }
}


//DB HELPER FUNCTIONS:
async function updateUserTokenAtLogin(privyAuthToken: string) {
  const updatedNonceUser = await prisma.users.update({
    where: { wallet_address: privyAuthToken },
    data: {
      //jwt: privyAuthToken
    },
    select: {
      wallet_address: true,
    },
  });
  return updatedNonceUser
}

async function findExistingUser(publicAddress: string) {
  const existingUser = await prisma.users.findUnique({
    where: { wallet_address: publicAddress },
    select: {
      id: true,
      email: true,
      created_at: true,
      wallet_address: true,

    },
  });
  return existingUser
}



//TODO add email embedded wallet edge case, since user object from Privy is different then
async function createUser(walletAddress: string) {
  const createdUser = await prisma.users.create({
    data: {
      wallet_address: walletAddress,
      email: "",
      //jwt: privyAuthToken
    },
  });
  return createdUser
}







