import { rest } from 'msw';

export const reviewSearchHandler = rest.get('/review/search', (req, res, ctx) => {
  const keyword = req.url.searchParams.get('keyword');
  return res(
    ctx.status(200),
    ctx.json({
      values: [
        {
          reviewId: 1,
          body: `검색된 리뷰 - ${keyword}`,
          profilePhoto: '/mock/profile.jpg',
          nickname: '테스트유저',
          bodyPhoto: '/mock/review.jpg',
          reviewType: 'RECEIVED',
          hashTags: ['예시', keyword],
          likeAmount: 3,
        },
      ],
      nextPageId: 2,
      hasNext: true,
    }),
  );
});
