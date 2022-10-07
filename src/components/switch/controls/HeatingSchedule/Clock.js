import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
const Clock = ({ time }) => {
  return (
    <Wrapper>
      <WatchBackground src={'/images/watch.svg'} />
      <Hour>
        <ClockHr time={time.hour * 6}></ClockHr>
      </Hour>
      <Minute>
        <ClockMm time={time.minute * 6}></ClockMm>
      </Minute>
    </Wrapper>
  );
};
export default Clock;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flexboxCenter}
  position: relative;
`;
const WatchBackground = styled.img``;

const Hour = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
`;

const ClockHr = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 1rem;
  border-radius: 50%;
  ::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 30px;
    z-index: 10;
    border-radius: 6px 6px 0 0;
    background-color: #fff;
  }
  transform: rotateZ(${(p) => p.time}deg);
`;

const Minute = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
`;
const ClockMm = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
  transform: rotateZ(${(p) => p.time}deg);
  ::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 50px;
    z-index: 10;
    border-radius: 6px 6px 0 0;
    background-color: red;
  }
`;
