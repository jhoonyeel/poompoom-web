import styled from 'styled-components';
import { useState } from 'react';
import Counter from './Section/Counter';
import Search from './Section/Search';
import DatePlan from './Section/DatePlan';
import Alarm from './Section/Alarm';
import Theme from './Section/Theme';
import ImportCalender from './Section/ImportPlan';
import AddDatePlan from './Section/AddDatePlan';
import DatePlanModal from '../Modal/DatePlanModal';
import useModal from '../../../../hooks/useModal';
import PoomPoom from './Section/PoomPoom';

export default function Sidebar({
  isOpen,
  toggleSidebar,
  posts,
  events,
  selectedEvent,
  handleCloseDetailModal,
  setIsPostModalOpen,
  handleEventClick,
}) {
  const [isAddDatePlan, setAddDatePlan] = useState(false);
  const { isOpen: isModalOpen, closeModal } = useModal();

  console.log('모달', isModalOpen);

  console.log('isoepn', isOpen);
  return (
    <div>
      <ToggleButton isOpen={isOpen} onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </ToggleButton>
      <SidebarWrapper isOpen={isOpen}>
        {isOpen &&
          (isAddDatePlan ? (
            <SidebarContent>
              <AddDatePlan setAddDatePlan={setAddDatePlan} closeModal={closeModal} />
            </SidebarContent>
          ) : (
            <SidebarContent>
              <Counter />
              <Search />
              <PoomPoom
                events={events}
                posts={posts}
                selectedEvent={selectedEvent}
                handleCloseDetailModal={handleCloseDetailModal}
                setIsPostModalOpen={setIsPostModalOpen}
                handleEventClick={handleEventClick}
              />
              <DatePlan />
              <Alarm />
              <Theme />
              <ImportCalender />
            </SidebarContent>
          ))}
        {isModalOpen && (
          <Modal>
            <DatePlanModal isModalOpen={isModalOpen} closeModal={closeModal} />
          </Modal>
        )}
      </SidebarWrapper>
    </div>
  );
}

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const SidebarContent = styled.div``;

const ToggleButton = styled.button`
  position: absolute;
  top: 400px;
  left: ${({ isOpen }) => (isOpen ? '320px' : '0px')};
  background-color: #fff;
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  z-index: 99999;

  &:hover {
    background-color: rgb(250, 217, 217);
  }

  transition: left 0.3s ease;
`;

const SidebarWrapper = styled.div`
  position: relative;
  width: ${({ isOpen }) => (isOpen ? '320px' : '0px')};
  height: 1000px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(204, 204, 204);
  transition: width 0.3s ease; /* 애니메이션 효과 추가 */

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(255, 255, 255);
    border-radius: 4px;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background: rgb(211, 206, 206);
    }
  }
`;
