import { rest } from 'msw';

export const authHandler = [
  rest.post('/auth/login', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        accessToken: 'mock-token',
        user: {
          memberId: 1,
          nickname: 'mockUser',
          email: 'mock@example.com',
        },
      }),
    );
  }),

  rest.post('/auth/join', (req, res, ctx) => {
    return res(ctx.status(201));
  }),
];
