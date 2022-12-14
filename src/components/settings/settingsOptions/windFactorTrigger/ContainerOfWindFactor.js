import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { SettingsContext } from '../../../../context/ContextOfSettings';
import {
  selectSettingsOfEss,
  setResetAllSettingsButtons,
  setSettingsCancelButton,
  setSettingsEditButton,
} from '../../../../store/slices/settingsOfEssSlice';
import {
  selectSettingsOfTgsTes,
  setTgsTesSettingsApplyWindFactor,
} from '../../../../store/slices/settingsOfTgsTesSlice';
import { flexboxCenter } from '../../../../styles/commonStyles';
import InputKeyPad from '../../../keyboard/InputKeyPad';
import SettingAppliedMessage from '../../../userMessages/SettingAppliedMessage';
import InvisibleDivForEditButton from '../editAndApplyMessageBoxes/InvisibleDivForEditButton';
import EditCancelApplyButtons from '../EditCancelApplyButtons';
import WindFactor from './WindFactor';

function ContainerOfWindFactor() {
  const content = [
    {
      title: 'low wind factor',
      windMiles: '15-24',
      temperatureF: '302',
      windKilo: '24-39',
      temperatureC: '150',
    },
    {
      title: 'high wind factor',
      windMiles: '38-52',
      temperatureF: '392',
      windKilo: '61-84',
      temperatureC: '200',
    },
    {
      title: 'med wind factor',
      windMiles: '25-37',
      temperatureF: '347',
      windKilo: '40-60',
      temperatureC: '175',
    },
    {
      title: 'extreme wind factor',
      windMiles: '53-62',
      temperatureF: '437',
      windKilo: '85-100',
      temperatureC: '225',
    },
  ];

  // useContext
  const { windFactor, setWindFactor } = useContext(SettingsContext);
  // const { windInputValue, setWindInputValue } = useContext(SettingsContext);
  // the 3 buttons
  const buttonsName = ['edit', 'cancel', 'apply'];
  // for invisible div
  const height = '150px';
  // useState
  const [activateKeypad, setActivateKeypad] = useState(false);
  const [options, setOptions] = useState('');
  const [inputFocus, setInputFocus] = useState(null);
  const [messageBox, setMessageBox] = useState(false);
  const [messageBoxContent, setMessageBoxContent] = useState({});

  // Redux
  const dispatch = useDispatch();
  const state = useSelector(selectSettingsOfEss);
  const tgsTesState = useSelector(selectSettingsOfTgsTes);
  const unitsMeasurement = state.buttonsOfSettings.unitsMeasurement;
  const settingsEditButton = state.buttonsOfSettings.settingsEditButton;
  const { low, med, high, extreme, isF } = tgsTesState.windFactorTemp;

  // set backs the data into input fields to what was entered previously
  useEffect(() => {
    if (low > 0 || med > 0 || high > 0 || extreme > 0) {
      if (unitsMeasurement === isF) {
        setWindFactor({
          lowWind: low,
          medWind: med,
          highWind: high,
          extremeWind: extreme,
        });
      } else {
        if (isF) {
          // saved unit is F but current unit is C -> formula c = (f-32) * 5/9
          setWindFactor({
            lowWind: `${Math.round(((low - 32) * 5) / 9)}`,
            medWind: `${Math.round(((med - 32) * 5) / 9)}`,
            highWind: `${Math.round(((high - 32) * 5) / 9)}`,
            extremeWind: `${Math.round(((extreme - 32) * 5) / 9)}`,
          });
        } else {
          // saved unit is C but current unit is F -> formula f = c * 1.8 + 32
          setWindFactor({
            lowWind: `${Math.round(low * 1.8 + 32)}`,
            medWind: `${Math.round(med * 1.8 + 32)}`,
            highWind: `${Math.round(high * 1.8 + 32)}`,
            extremeWind: `${Math.round(extreme * 1.8 + 32)}`,
          });
        }
      }
    }
  }, []);

  // 3 buttons(edit, cancel and apply). dispatch on click of apply button. it will sends the data to tgs tes slice which ess and tgs/tes will share the slice since they never operate at the same time so no need to seperate them into 2 slices
  const handleButtons = (value) => {
    const buttonsIndex = Number(value);
    switch (buttonsIndex) {
      case 0:
        dispatch(setSettingsEditButton());
        break;
      case 1:
        dispatch(setSettingsCancelButton());
        setWindFactor({
          lowWind: '',
          medWind: '',
          highWind: '',
          extremeWind: '',
        });
        break;
      case 2:
        if (
          typeof windFactor.lowWind === 'number' &&
          typeof windFactor.highWind === 'number' &&
          typeof windFactor.medWind === 'number' &&
          typeof windFactor.extremeWind === 'number'
        ) {
          dispatch(setResetAllSettingsButtons());
          dispatch(
            setTgsTesSettingsApplyWindFactor({
              windFactor,
              isF: unitsMeasurement,
            })
          );
        }
        setMessageBox(true);
        handleWindFactorMessageBox();
        break;
      default:
        return;
    }
  };

  // handles the 3 input fields to direct each data entered gets save at the right place in useState at useContext
  const handleInput = (index, inputNumber) => {
    switch (index) {
      case 0:
        setWindFactor(() => ({ ...windFactor, lowWind: inputNumber }));
        break;
      case 1:
        setWindFactor(() => ({ ...windFactor, highWind: inputNumber }));
        break;
      case 2:
        setWindFactor(() => ({ ...windFactor, medWind: inputNumber }));
        break;
      case 3:
        setWindFactor(() => ({ ...windFactor, extremeWind: inputNumber }));
        break;
      default:
        break;
    }
  };

  const handleWindFactorMessageBox = () => {
    if (
      typeof windFactor.lowWind === 'number' &&
      typeof windFactor.highWind === 'number' &&
      typeof windFactor.medWind === 'number' &&
      typeof windFactor.extremeWind === 'number'
    ) {
      setMessageBoxContent({
        title: ['wind factor trigger'],
        content: 'settings have been applied',
      });
    } else {
      setMessageBoxContent({
        title: ['input fields incomplete'],
        content: 'please field all the input fields',
      });
    }
    return;
  };

  const handleCloseMessageBox = () => {
    setMessageBox(false);
    return;
  };

  // handles the keypad
  const handleDisplayKeyPad = (index) => {
    options !== index && setOptions(index);
    setActivateKeypad(true);
  };

  return (
    <Wrapper1>
      <Wrapper>
        {!settingsEditButton &&
          (low !== null || med !== null || high !== null || extreme) && (
            <InvisibleDivForEditButton height={height} />
          )}
        <FlexWrapper>
          {content.map((value, index) => {
            return (
              <div key={index}>
                <>
                  <WindFactor
                    contents={value}
                    index={index}
                    selectedMeasurement={unitsMeasurement}
                    handleKeypad={handleDisplayKeyPad}
                    setInputFocus={setInputFocus}
                    handleInputs={handleInput}
                  />
                </>
                {activateKeypad && options === index && (
                  <KeyboardWrapper index={options}>
                    {/* <PositionAbsoluteBox index={options}> */}
                    <InputKeyPad
                      closeKeyPad={() => setActivateKeypad(false)}
                      name={index}
                      handleOnSubmit={handleInput}
                      setMainInput={handleInput}
                    />
                    {/* </PositionAbsoluteBox> */}
                  </KeyboardWrapper>
                )}
              </div>
            );
          })}
        </FlexWrapper>

        {messageBox && (
          <SettingAppliedMessage
            title={'change options'}
            message={messageBoxContent}
            onClose={handleCloseMessageBox}
          />
        )}
      </Wrapper>
      <WrapperButtons>
        <EditCancelApplyButtons
          handleClick={handleButtons}
          buttonsName={buttonsName}
        />
      </WrapperButtons>
    </Wrapper1>
  );
}

export default ContainerOfWindFactor;

const Wrapper1 = styled.div`
  width: 596px;
  height: 383px;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Wrapper = styled.div`
  width: 596px;
  height: auto;
  margin-left: -3px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 18px;
  opacity: 1;
  ${flexboxCenter};
  flex-direction: column;
`;

const FlexWrapper = styled.div`
  width: 596px;
  height: 212px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;

const KeyboardWrapper = styled.div`
  position: absolute;
  height: 100px;
  width: auto;
  z-index: 2;
  ${({ index }) =>
    index === 0
      ? css`
          position: absolute;
          top: 6rem;
          right: 19rem;
        `
      : index === 1
      ? css`
          position: absolute;
          top: 13rem;
          right: 19rem;
        `
      : index === 2
      ? css`
          position: absolute;
          top: 6rem;
          right: 0rem;
        `
      : css`
          position: absolute;
          top: 13rem;
          right: 0rem;
        `}
`;

const WrapperButtons = styled.div`
  width: 578px;
  height: auto;
  margin-left: 1rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
