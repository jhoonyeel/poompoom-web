import PointModalUI from './PointModal.presenter';

function PointModal({ post, onClose, onConfirm }) {
  return <PointModalUI post={post} onClose={onClose} onConfirm={onConfirm} />;
}

export default PointModal;
