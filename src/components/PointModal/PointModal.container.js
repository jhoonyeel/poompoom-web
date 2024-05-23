import PointModalUI from './PointModal.presenter';

export default function PointModal({ post, onClose, onConfirm }) {
  return <PointModalUI post={post} onClose={onClose} onConfirm={onConfirm} />;
}
