// 각 구독자의 기본 상태
export const DEFAULT_SUBSCRIBER_STATE = {
  profilePhotoPath: '',
  nickname: '',
  id: null,
  followingMemberId: null,
  subscribeDate: '',
  hashtagList: [],
};

// 기본 응답 상태 (페이징 포함)
export const DEFAULT_SUBSCRIPTION_RESPONSE = {
  values: [DEFAULT_SUBSCRIBER_STATE], // 구독자 리스트
  nextPageId: 0,
  hasNext: true,
};
