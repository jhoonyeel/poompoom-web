function ReviewPostBody({ expanded }) {
  return (
    <div className="body">
      {expanded ? (
        <div>
          <p>본문 내용입니다.</p>
          <p>추가적인 내용</p>
        </div>
      ) : null}
    </div>
  );
}

export default ReviewPostBody;
