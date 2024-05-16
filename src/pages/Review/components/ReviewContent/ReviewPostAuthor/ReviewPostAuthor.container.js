import { useState } from 'react';
import ReviewPostAuthorUI from './ReviewPostAuthor.presenter';

function ReviewPostAuthor() {
  const [internal, setInternal] = useState(true);

  // DB 가져와서 비교
  if (new Date() < 0) {
    setInternal(false);
  }

  return <ReviewPostAuthorUI internal={internal} />;
}

export default ReviewPostAuthor;
