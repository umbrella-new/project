import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { toggle } from '../../../store/slices/heaterStatusSlice';

const ToggleSWitch = ({ data, id }) => {
  // reducer test
  // const testData = useSelector(selectSSRState);
  // console.log(testData.buttonStatus);

  const machineName = 'we-cove-02';

  // true || false || 'flt
  const status = data === 'flt' ? 'flt' : data ? 'on' : 'off';
  const switchIconSrc =
    status === 'on'
      ? '/images/ssr-switch-on.svg'
      : status === 'off'
      ? '/images/ssr-switch-off.svg'
      : '/images/ssr-switch-flt.svg';

  const dispatch = useDispatch();
  const handleToggler = () => {};

  return (
    <Wrapper>
      <Title>
        ssr{id} <br></br> {machineName}
      </Title>
      <SwitchButton
        disabled={status === 'flt' ? true : false}
        onClick={() => dispatch(toggle(`ssr${id}`))}
      >
        <SwitchImg src={switchIconSrc} />
      </SwitchButton>
    </Wrapper>
  );
};

export default ToggleSWitch;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
  text-transform: uppercase;
  font-size: 10px;
  color: #fcff01;
  height: 50%;
`;
const SwitchButton = styled.button`
  height: 34px;
`;

const SwitchImg = styled.img``;
