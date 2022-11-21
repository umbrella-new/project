import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';

const RadioBox = ({ data, checked, onHandler }) => {
  return (
    <Wrapper onClick={(e) => onHandler(data, e)}>
      <OptionChecker>
        <CheckedCircle
          checked={checked === data ? true : false}
        ></CheckedCircle>
      </OptionChecker>
      <Label>{data}</Label>
    </Wrapper>
  );
};

export default RadioBox;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 236px;
  height: 20px;
  border: 1px solid #233a54;
  border-radius: 16px;
  opacity: 1;

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
  width: 70%;
  letter-spacing: 0.8px;
  /* border: 1px solid red; */
  z-index: 100;
`;
const OptionChecker = styled.div`
  ${flexboxCenter}
  width: 30%;
  height: 14px;
  width: 14px;
  border: 1px solid #95ff45;
  border-radius: 50%;
  z-index: 100;
`;
const CheckedCircle = styled.div`
  border-radius: 50%;
  height: 6px;
  width: 6px;
  background-color: ${(p) => (p.checked ? '#95ff45' : 'none')};
  z-index: 100;
`;
