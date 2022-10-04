import { useContext } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { Context } from '../../../context/Context';
import { HeaterStatusContext } from '../../../context/HeaterStatusContext';
import { toggle } from '../../../store/slices/heaterStatusSlice';
import { dummy } from '../../../store/slices/testSlice';

import { flexboxCenter } from '../../../styles/commonStyles';

const ToggleSWitch = ({ data, id }) => {
  const { ssrDispatch } = useContext(HeaterStatusContext);
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
  const handleToggler = () => {
    dispatch(toggle(`ssr${id}`));
    // dispatch(dummy(7));
  };

  return (
    <Wrapper>
      <Title>
        ssr{id} <br></br> {machineName}
      </Title>
      <SwitchButton
        disabled={status === 'flt' ? true : false}
        onClick={() => ssrDispatch({ type: `toggle`, id: `ssr${id}` })}
        // onClick={handleToggler}
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
