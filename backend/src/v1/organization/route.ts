import { FastifyInstance } from 'fastify';
import { methods } from '@/helpers/api';
import { getAllOrganizations, createOrganization } from './handler';


const Organization = async (app: FastifyInstance) => {

  app.route({
    method: methods.GET,
    url: '/:id',
    handler: getAllOrganizations,
  });


  app.route({
    method: methods.POST,
    url: '/:id',
    //preHandler: [authenticationMiddleware],
    handler: createOrganization,
  });



};

export default Organization;
