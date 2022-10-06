import { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../../../context/Context';
import { flexboxCenter } from '../../../../styles/commonStyles';

import DisplayBox from '../../DisplayBox';

const DisplayTemperatureStates = ({ state }) => {
  // console.log(state.instantHeat.instantHeatTemp);

  const g = '___';
  const setTemp =
    state.instantHeat.instantHeatTemp === 0
      ? '___'
      : state.instantHeat.instantHeatTemp;
  const currTemp = g;
  return (
    <Wrapper>
      <InnerHole>
        <DisplayBox currData={setTemp} unit={null} label='set temperature' />
        <DisplayBox
          currData={currTemp}
          unit={null}
          label='current temperature'
        />
      </InnerHole>
    </Wrapper>
  );
};

export default DisplayTemperatureStates;

const Wrapper = styled.li`
  width: var(--controller-width);
  height: 50px;
  box-sizing: border-box;
  /* UI Properties */
  background: transparent
    linear-gradient(90deg, var(--unnamed-color-233a54) 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 0px 1px var(--unnamed-color-000000);
  border: 0.5px solid var(--unnamed-color-000000);
  background: transparent linear-gradient(90deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 4px 4px 9px 9px;
  opacity: 1;

  ${flexboxCenter}
`;

const InnerHole = styled.div`
  width: 270px;
  height: 43px;
  /* UI Properties */
  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 5px;
  opacity: 1;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
