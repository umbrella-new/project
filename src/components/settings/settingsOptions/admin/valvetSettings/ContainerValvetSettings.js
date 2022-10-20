import styled from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';
import ValveSettings from './ValveSettings';
import SelectGasType from './SelectGasType';

function ContainerValveSettings() {
  return (
    <Wrapper>
      <WrapperValveSettings>
        <ValveSettings />
      </WrapperValveSettings>
      <WrapperSelectGasType>
        <SelectGasType />
      </WrapperSelectGasType>
    </Wrapper>
  );
}

export default ContainerValveSettings;

const Wrapper = styled.div`
  width: 554px;
  height: 318px;
  /* height: auto; */
  margin-bottom: 20px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 13px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

const WrapperValveSettings = styled.div`
  margin-left: 3px;
`;

const WrapperSelectGasType = styled.div`
  margin-left: 3px;
`;
