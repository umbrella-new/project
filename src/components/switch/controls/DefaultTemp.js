import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLoaderData, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { selectSettingsOfEss } from '../../../store/slices/settingsOfEssSlice';
import { selectSettingsOfTgsTes } from '../../../store/slices/settingsOfTgsTesSlice';
import { selectUnitsState } from '../../../store/slices/unitsSlice';
import { selectUserState } from '../../../store/slices/userSlice';
import { flexboxCenter } from '../../../styles/commonStyles';
import InputTempMessage from '../../userMessages/InputTempMessage';

const DefaultTemp = ({ defaultTemp }) => {
  const unitsState = useSelector(selectSettingsOfEss);
  const { unitsMeasurement } = unitsState.buttonsOfSettings;
  const [displayMessage, setDisplayMessage] = useState(false);

  const userState = useSelector(selectUserState);
  const { isEssSwitch } = userState;
  const settingState = useSelector(selectSettingsOfTgsTes);
  const { thermocouple } = settingState;
  const location = useLocation();
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (isEssSwitch) {
      thermocouple && setDisabled(true);
    } else if (location.pathname === '/') {
    } else {
      thermocouple && setDisabled(true);
    }
  });

  const handleClose = (event) => {
    event.stopPropagation();
    setDisplayMessage(false);
  };

  return (
    <Wrapper
      onClick={() => {
        if (isEssSwitch) {
          thermocouple || setDisplayMessage(true);
        } else if (location.pathname === '/') {
          setDisplayMessage(true);
        } else {
          thermocouple || setDisplayMessage(true);
        }
      }}
    >
      <InnerLayer thermocouple={disabled}>
        <Title thermocouple={disabled}>
          default<br></br> temp.
        </Title>
        <Divider thermocouple={disabled} />
        {unitsMeasurement ? (
          <DefaultDegree thermocouple={disabled}>
            {Number(defaultTemp) * 1.8 + 32}&deg;F
          </DefaultDegree>
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

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;

  ${flexboxCenter};
`;
const InnerLayer = styled.div`
  width: 122px;
  height: 21px;
  /* UI Properties */

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 7px;
  box-sizing: border-box;

  ${(p) =>
    p.thermocouple &&
    css`
      background-color: #3b3b3b;
    `}
`;
const Title = styled.span`
  /* Layout Properties */

  width: 50px;
  height: 18px;
  /* UI Properties */

  text-align: center;
  font-size: 8px;
  letter-spacing: 0.8px;
  line-height: 110%;
  ${(p) =>
    p.thermocouple &&
    css`
      color: #808080;
    `}
`;

const Divider = styled.div`
  width: 0px;
  height: 14px;

  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ffffff;

  ${(p) =>
    p.thermocouple &&
    css`
      background: #808080 0% 0% no-repeat padding-box;
      border: 1px solid #808080;
    `}
`;

const DefaultDegree = styled.span`
  /* Layout Properties */

  width: 42px;
  height: 12px;
  /* UI Properties */

  text-align: left;
  font-size: 10px;
  letter-spacing: 1px;

  ${(p) =>
    p.thermocouple &&
    css`
      color: #808080;
    `}
`;
