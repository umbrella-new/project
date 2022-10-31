import styled, { css } from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';

const SysIdRadioBox = ({ data, isChecked, selectHandler }) => {
  return (
    <Wrapper onClick={() => selectHandler(data)}>
      <OptionChecker>
        <CheckedCircle isChecked={isChecked === data}></CheckedCircle>
      </OptionChecker>
      <Label>{data}</Label>
    </Wrapper>
  );
};
export default SysIdRadioBox;

const Wrapper = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 252px;
  height: 20px;
  border: 1px solid #233a54;
  border-radius: 16px;

  padding: 0 0.1rem;
  margin-bottom: 0.2rem;
  &:first-child {
    margin-top: 0.05rem;
  }
  &:last-child {
    margin-bottom: 0.05rem;
  }
  &:hover {
    background: #233a54 0% 0% no-repeat padding-box;
    box-shadow: inset 0px 0px 2px #000000;

    opacity: 1;
  }
  z-index: 100;
`;
const Label = styled.span`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 8px;
  text-align: center;
  width: 100%;
`;
const OptionChecker = styled.div`
  ${flexboxCenter}

  height: 14px;
  width: 14px;
  border: 1px solid #95ff45;
  border-radius: 50%;
`;
const CheckedCircle = styled.div`
  border-radius: 50%;
  height: 10px;
  width: 10px;
  ${(p) =>
    p.isChecked &&
    css`
      background: #95ff45;
    `}
`;
