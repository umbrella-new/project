import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { toggle } from '../../../store/slices/heaterStatusSlice';
import { flexboxCenter } from '../../../styles/commonStyles';

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
  padding-top: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.span`
  text-transform: uppercase;
  font-size: 8px;
  color: #fcff01;
  margin-bottom: 0.2rem;
`;
const SwitchButton = styled.button`
  height: 20px;
  ${flexboxCenter}
  align-items: flex-start;
`;

const SwitchImg = styled.img``;
