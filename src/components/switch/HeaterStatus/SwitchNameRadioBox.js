import styled from 'styled-components';
import { flexboxCenter } from '../../../styles/commonStyles';

const SwitchNameRadioBox = ({ data, checked, handleClick }) => {
  return (
    <Wrapper onClick={() => handleClick(data)}>
      <OptionChecker>
        <CheckedCircle checked={checked == data ? true : false}></CheckedCircle>
      </OptionChecker>
      <Label>{data}</Label>
    </Wrapper>
  );
};

export default SwitchNameRadioBox;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 56px;
  height: 14px;
  border: 1px solid #142033;
  border-radius: 9px;
  opacity: 1;

  padding: 0 0.05rem;
  margin-bottom: 0.1rem;
  &:first-child {
    margin-top: 0.13rem;
  }
  &:last-child {
    margin-bottom: 0.13rem;
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
  font-size: 6px;
  text-align: center;
  width: 70%;
  /* border: 1px solid red; */
`;
const OptionChecker = styled.div`
  ${flexboxCenter}
  width: 30%;
  height: 10px;
  width: 10px;
  border: 1px solid #95ff45;
  border-radius: 50%;
`;
const CheckedCircle = styled.div`
  border-radius: 50%;
  height: 6px;
  width: 6px;
  background-color: ${(p) => (p.checked ? '#95ff45' : 'none')};
`;
