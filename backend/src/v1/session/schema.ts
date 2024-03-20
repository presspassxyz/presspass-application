import { Type as t } from '@sinclair/typebox';
import { SiweMessage } from 'siwe';


export const SiweMessageInput = {
  body: t.Object({
    publicAddress: t.String(),
  }),

  response: {
    200: t.Object({
      data: t.Any(),
    }),
    404: t.Object({
      msg: t.String(),
    }),
    500: t.Object({
      msg: t.String(),
    }),
  },
};

export const VerifySiweMessageInput = {
  body: t.Object({
    wallet: t.Any(),
  }),
  response: {
    200: t.Object({
      user: t.Any(),
      jwt: t.String(),
    }),
    404: t.Object({
      msg: t.String(),
    }),
    500: t.Object({
      msg: t.String(),
    }),
  },
};

