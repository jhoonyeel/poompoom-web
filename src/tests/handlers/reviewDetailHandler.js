import { rest } from 'msw';

export const reviewDetailHandler = [
  rest.get('/review/:id', (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        reviewId: Number(id),
        body: '상세 리뷰입니다.',
        profilePhoto: '/profile/user.jpg',
        nickname: '재훈',
        bodyPhoto: '/review/body.jpg',
        reviewType: 'RECEIVED',
        hashTags: ['생일', '로맨틱'],
        likeAmount: 12,
      }),
    );
  }),
];
