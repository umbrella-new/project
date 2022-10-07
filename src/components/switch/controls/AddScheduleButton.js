import styled from 'styled-components';
const AddScheduleButton = () => {
  return (
    <Wrapper>
      <InnerLayer>
        <AddSign>+</AddSign>
      </InnerLayer>
    </Wrapper>
  );
};

export default AddScheduleButton;

const Wrapper = styled.button`
  cursor: pointer;
  width: 42px;
  height: 19px;
  background: transparent
    linear-gradient(180deg, var(--unnamed-color-233a54) 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 0px 1px var(--unnamed-color-000000);
  border: 0.5px solid var(--unnamed-color-000000);
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  opacity: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-sizing: border-box;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AddSign = styled.div`
  font-size: 20px;
`;
