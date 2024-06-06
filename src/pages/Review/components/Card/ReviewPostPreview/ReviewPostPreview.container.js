import ReviewPostPreviewUI from './ReviewPostPreview.presenter';

export default function ReviewPostPreview({ body }) {
  const MAX_LENGTH = 100;

  const truncatedBody = body.length > MAX_LENGTH ? `${body.slice(0, MAX_LENGTH)}...` : body;

  return <ReviewPostPreviewUI body={truncatedBody} />;
}
