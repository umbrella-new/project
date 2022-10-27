import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectSettingsOfEss } from '../../../store/slices/settingsOfEssSlice';
import { selectUnitsState } from '../../../store/slices/unitsSlice';
import { flexboxCenter } from '../../../styles/commonStyles';
import InputTempMessage from '../../userMessages/InputTempMessage';

const DefaultTemp = ({ defaultTemp }) => {
  const unitsState = useSelector(selectSettingsOfEss);
  const { unitsMeasurement } = unitsState.buttonsOfSettings;
  const [displayMessage, setDisplayMessage] = useState(false);

  console.log(displayMessage);

  const handleClose = (event) => {
    event.stopPropagation();
    setDisplayMessage(false);
  };

  return (
    <Wrapper onClick={() => setDisplayMessage(true)}>
      <InnerLayer>
        <Title>
          default<br></br> temp.
        </Title>
        <Divider />
        {unitsMeasurement ? (
          <DefaultDegree>{Number(defaultTemp) * 1.8 + 32}&deg;F</DefaultDegree>
        ) : (
          <DefaultDegree>{defaultTemp}&deg;C</DefaultDegree>
        )}
      </InnerLayer>
      {displayMessage && (
        <InputTempMessage
          onClose={handleClose}
          title='default temperature'
          message='In order to change default temperature, you need to go the SETTING PAGE'
        />
      )}
    </Wrapper>
  );
};

export default DefaultTemp;

const Wrapper = styled.div`
  /* Layout Properties */
  width: 133px;
  height: 30px;
  /* UI Properties */
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

  ${flexboxCenter};
`;
const InnerLayer = styled.div`
  width: 122px;
  height: 21px;
  /* UI Properties */
  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 20px;
  opacity: 1;

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 7px;
  box-sizing: border-box;
`;
const Title = styled.span`
  /* Layout Properties */

  width: 50px;
  height: 18px;
  /* UI Properties */
  color: var(--unnamed-color-ffffff);
  text-align: center;
  font-size: 8px;
  letter-spacing: 0.8px;
  color: #ffffff;
  opacity: 1;
  text-transform: uppercase;
  line-height: 110%;
`;

const Divider = styled.div`
  width: 0px;
  height: 14px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border: 1px solid var(--unnamed-color-ffffff);
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ffffff;
  opacity: 1;
`;

const DefaultDegree = styled.span`
  /* Layout Properties */

  width: 42px;
  height: 12px;
  /* UI Properties */
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font-size: 10px;
  letter-spacing: 1px;
  color: #ffffff;
  opacity: 1;
`;
