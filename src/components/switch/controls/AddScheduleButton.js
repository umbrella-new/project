import styled from 'styled-components';
import { flexboxCenter } from '../../../styles/commonStyles';
const AddScheduleButton = ({ handleAddSchedule, isVisible }) => {
  return (
    <Wrapper onClick={handleAddSchedule} isVisible={isVisible}>
      <InnerLayer>
        <AddSign src={'/images/add-sign.svg'} />
      </InnerLayer>
    </Wrapper>
  );
};

export default AddScheduleButton;

const Wrapper = styled.button`
  cursor: pointer;
  width: 42px;
  height: 19px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  opacity: 1;
  box-sizing: border-box;

  ${flexboxCenter}
  visibility: ${(p) => p.isVisible || 'hidden'};
`;

const InnerLayer = styled.div`
  width: 36px;
  height: 14px;
  background: var(--unnamed-color-1b2b44) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px var(--unnamed-color-000000);
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 20px;
  opacity: 0.8;
  ${flexboxCenter}
`;
const AddSign = styled.img`
  height: 75%;
`;
