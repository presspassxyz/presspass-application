import { FastifyInstance } from 'fastify';
import { methods } from '@/helpers/api';
import { createOrganization, getAllOrganizations, getOrganizationById } from './handler';


const Organization = async (app: FastifyInstance) => {


  app.route({
    method: methods.GET,
    url: '/',
    handler: getAllOrganizations,
  });

  app.route({
    method: methods.GET,
    url: '/:id',
    handler: getOrganizationById,
  });


  app.route({
    method: methods.POST,
    url: '/',
    //preHandler: [authenticationMiddleware],
    handler: createOrganization
  });



};

export default Organization;
