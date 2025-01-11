import styled from 'styled-components';
import { useState } from 'react';
import Counter from './Section/Counter';
import Search from './Section/Search';
import PoomPoomLog from './Section/PoomPoomLog';
import DatePlan from './Section/DatePlan';
import Alarm from './Section/Alarm';
import Theme from './Section/Theme';
import ImportCalender from './Section/ImportPlan';
import AddDatePlan from './Section/AddDatePlan';
import DatePlanModal from '../Modal/DatePlanModal';
import useModal from '../../../../hooks/useModal';

export default function Sidebar({ isOpen, toggleSidebar, posts }) {
  const [isAddDatePlan, setAddDatePlan] = useState(false);
  const { isOpen: isModalOpen, closeModal } = useModal();

  console.log('모달', isModalOpen);
  return (
    <SidebarWrapper isOpen={isOpen}>
      <ToggleButton onClick={toggleSidebar}>{isOpen ? 'Close' : 'Open'}</ToggleButton>
      {isOpen &&
        (isAddDatePlan ? (
          <AddDatePlan setAddDatePlan={setAddDatePlan} closeModal={closeModal} />
        ) : (
          <SidebarContent>
            <Counter />
            <Search />
            <PoomPoomLog posts={posts} />
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

const SidebarWrapper = styled.div`
  width: ${({ isOpen }) => (isOpen ? '320px' : '0')};
  height: 982px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(204, 204, 204);

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

const SidebarContent = styled.div`
  position: relative;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 10px;
  left: 30px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: rgb(250, 217, 217);
  }
`;
