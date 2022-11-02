import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { handleTimerOff } from '../../store/slices/faultsSlice';
import { flexboxCenter } from '../../styles/commonStyles';

const MaxHeat12HrsTimer = () => {
  const [hour, setHour] = useState(12);
  const dispatch = useDispatch();

  const handleHour = () => {
    setHour(hour - 1);
  };

  useEffect(() => {
    if (hour > 0) {
      const timer = setInterval(handleHour, 2000);
      return () => {
        clearInterval(timer);
      };
    } else {
      dispatch(handleTimerOff());
    }
  }, [hour]);

  return (
    <Wrapper>
      <InnerHole>
        <Top>
          <Content>max heat</Content>
          <Divider></Divider>
          <Content>{hour} hours</Content>
        </Top>
      </InnerHole>
    </Wrapper>
  );
};
export default MaxHeat12HrsTimer;

const Wrapper = styled.div`
  width: 137px;
  height: 34px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 27px;

  ${flexboxCenter}
`;
const InnerHole = styled.div`
  width: 133px;
  height: 30px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  ${flexboxCenter}
`;
const Top = styled.div`
  width: 122px;
  height: 21px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 20px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Content = styled.span`
  text-align: center;
  font-size: 8px;
  color: #fcff01;
`;
const Divider = styled.div`
  width: 0px;
  height: 14px;
  border: 0.5px solid #fcff01;
`;
