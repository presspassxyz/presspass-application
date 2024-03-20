import { FastifyInstance } from 'fastify';
import { methods } from '@/helpers/api';
import { getUser, updateUser } from './handler';


const User = async (app: FastifyInstance) => {

  app.route({
    method: methods.GET,
    url: '/:id',
    handler: getUser,
  });


  app.route({
    method: methods.PUT,
    url: '/:id',
    //preHandler: [authenticationMiddleware],
    handler: updateUser,
  });



};

export default User;
