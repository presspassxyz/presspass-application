import { FastifyInstance } from 'fastify';
import { methods } from '@/helpers/api';
import { createNonce, getAutheticatedData, verifyLoginOrSignup } from './handler';
import { SiweMessageInput, VerifySiweMessageInput } from './schema';
import { authenticationMiddleware } from '../middleware';

const Session = async (app: FastifyInstance) => {

  /** @description verify a user session */
  app.route({
    method: methods.POST,
    url: '/verify',
    schema: VerifySiweMessageInput,
    handler: verifyLoginOrSignup,
  });

  app.route({
    method: methods.GET,
    url: '/nonce',
    handler: createNonce,
  });

  app.route({
    method: methods.GET,
    url: '/authenticated/data',
    preHandler: [authenticationMiddleware],
    handler: getAutheticatedData,
  });



};

export default Session;
