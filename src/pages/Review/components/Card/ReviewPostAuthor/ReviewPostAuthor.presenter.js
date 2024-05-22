function ReviewPostAuthorUI({ internal }) {
  return (
    <div>
      {internal ? (
        <>
          <span>프로필사진</span>
          <span>닉네임</span>
          <span>
            <button type="button">구독</button> {/** 추후에 컴포넌트 사용 */}
          </span>
        </>
      ) : (
        <div>from Instagram</div>
      )}
    </div>
  );
}

export default ReviewPostAuthorUI;
