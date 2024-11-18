import { useRef, useEffect } from 'react';

function createRootElement(id) {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

function addRootElement(rootElem) {
  document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
}

// 댓글 옵션 확인 창에 사용하는 개별 돔 요소
export default function usePortal(id) {
  const modalRoot = useRef(null); // Dom 요소 지정할 ref 생성

  useEffect(
    function setupElement() {
      const existingParent = document.querySelector(`#${id}`);

      const parentElem = existingParent || createRootElement(id);
      // 첫 랜더링 시 부모 요소 존재 유무 확인 후,

      if (!existingParent) {
        addRootElement(parentElem);
      } // 없다면 body에 부모 추가

      parentElem.appendChild(modalRoot.current); // 부모에 자식 추가

      return function removeElement() {
        modalRoot.current.remove();
        if (!parentElem.childElementCount) {
          parentElem.remove();
        }
      }; // 언마운트 시 요소 및 부모(자식이 없다면) 제거
    },
    [id],
  );

  function getRootElem() {
    // modalRoot 부재 시 div 생성 후 반환
    if (!modalRoot.current) {
      modalRoot.current = document.createElement('div');
    }
    return modalRoot.current;
  }

  return getRootElem();
}
