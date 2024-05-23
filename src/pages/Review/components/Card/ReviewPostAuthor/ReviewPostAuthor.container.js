import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewPostAuthorUI from './ReviewPostAuthor.presenter';

function ReviewPostAuthor({ post }) {
  const [internal, setInternal] = useState(true);

  const navigate = useNavigate();

  const handleSub = () => {};

  // DB 가져와서 비교
  if (!post) {
    setInternal(false);
  }

  return <ReviewPostAuthorUI post={post} internal={internal} navigate={navigate} handleSub={handleSub} />;
}

export default ReviewPostAuthor;
