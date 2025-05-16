// 초기 상태를 정의하는 파일

export const DEFAULT_POST_STATE = {
  reviewId: null,
  body: '',
  profilePhoto: '',
  nickname: '',
  bodyPhoto: '',
  reviewType: '',
  hashTags: [],
  likeAmount: 0,
};

export const DEFAULT_REVIEW_RESPONSE = {
  values: [DEFAULT_POST_STATE], // post 리스트
  nextPageId: 0,
  hasNext: true,
};
