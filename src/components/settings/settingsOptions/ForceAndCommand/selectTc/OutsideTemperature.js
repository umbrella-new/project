import styled from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSettingsOfEss } from '../../../../../store/slices/settingsOfEssSlice';
import { selectUserState } from '../../../../../store/slices/userSlice';
import RadioBox from '../RadioBox';
import ConfirmButton from '../ConfirmButton';

function OutsideTemperature({
  handleChecked,
  onConfirmHandler,
  displayOptions,
  isClicked,
  select,
  checked,
  essOutsideTemp,
  tgsTesOutsideTemp,
  burningChamberTemp,
}) {
  const tempMeasurementSelection = ['internet', 'thermocouple'];
  const whiteTriangle = './images/whiteTriangle.svg';
  const greyTriangle = './images/greyTriangle.svg';

  // states
  const [temperatureSelection, setTemperatureSelection] = useState(0);
  const [activeSelect, setActiveSelect] = useState(false);

  // redux
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;

  const stateOfEssTgs = useSelector(selectUserState);
  const essSwitch = stateOfEssTgs.isEssSwitch;

  const editState = state.buttonsOfSettings.settingsEditButton;

  // functions
  const handleToggle = (index) => {
    if (index !== temperatureSelection) return setTemperatureSelection(index);
  };

  const handleSelect = (index) => {
    if (index === 0) return setActiveSelect(!activeSelect);
    else return setActiveSelect(!activeSelect);
  };

  return (
    <Wrapper>
      <SubTitleWrapper>
        <SubTitleWrapper2>
          <SubTitle>{'outside temperature'}</SubTitle>
        </SubTitleWrapper2>
      </SubTitleWrapper>
      <ControlContainer mode={mode}>
        {tempMeasurementSelection.map((data, index) => {
          return (
            <ContainerOfSelections key={index}>
              <ContainerOfCircles>
                <OutsideRingGreenCircle
                  onClick={() => {
                    editState && handleToggle(index);
                    editState && handleSelect(index);
                  }}
                  mode={mode}
                >
                  <InsideFilledGreenCircle
                    mode={mode}
                    color={index === temperatureSelection ? true : false}
                  ></InsideFilledGreenCircle>
                </OutsideRingGreenCircle>
              </ContainerOfCircles>
              <IndividualContainer mode={mode}>
                <Text mode={mode}>{data}</Text>
              </IndividualContainer>
            </ContainerOfSelections>
          );
        })}
      </ControlContainer>

      <SelectionShadowWrapper>
        <SelectionWrapper color={activeSelect}>
          <WrapperTitleAndImg>
            <SelectionIndentWrapper color={activeSelect}>
              <Selection color={activeSelect}>select t/c</Selection>
            </SelectionIndentWrapper>

            <Img
              src={`${activeSelect ? whiteTriangle : greyTriangle}`}
              onClick={() =>
                activeSelect && essSwitch
                  ? displayOptions(essOutsideTemp)
                  : activeSelect && displayOptions(tgsTesOutsideTemp)
              }
            />
          </WrapperTitleAndImg>
          {(activeSelect && isClicked.essOutsideTemp) ||
          (activeSelect && isClicked.tgsTesOutsideTemp) ? (
            <WrapperSelectAndConfirmButton>
              <SelectWrapper>
                {select.map((option) => (
                  <RadioBox
                    data={`${option}`}
                    checked={checked}
                    onHandler={handleChecked}
                    key={option}
                  />
                ))}
              </SelectWrapper>
              <WrapperButton>
                <ConfirmButton
                  onConfirm={onConfirmHandler}
                  essOutsideTemp={essOutsideTemp}
                  tgsTesOutsideTemp={tgsTesOutsideTemp}
                />
              </WrapperButton>
            </WrapperSelectAndConfirmButton>
          ) : (
            ''
          )}
        </SelectionWrapper>
      </SelectionShadowWrapper>

      {/* burning chamber */}
      {!essSwitch && (
        <SubTitleSelectionWrapper>
          <SubTitleWrapper>
            <SubTitleWrapper2>
              <SubTitle>burning chamber current temp</SubTitle>
            </SubTitleWrapper2>
          </SubTitleWrapper>
          <SelectionShadowWrapper1>
            <SelectionWrapper1>
              <WrapperTitleAndImg>
                <SelectionIndentWrapper1>
                  <Selection1>select t/c</Selection1>
                </SelectionIndentWrapper1>

                <Img
                  src={'./images/whiteTriangle.svg'}
                  onClick={() =>
                    editState && displayOptions(burningChamberTemp)
                  }
                />
              </WrapperTitleAndImg>
              {isClicked.burningChamberTemp && (
                <WrapperSelectAndConfirmButton>
                  <SelectWrapper>
                    {select.map((option) => (
                      <RadioBox
                        data={`${option}`}
                        checked={checked}
                        onHandler={handleChecked}
                        key={option}
                      />
                    ))}
                  </SelectWrapper>
                  <WrapperButton>
                    <ConfirmButton
                      onConfirm={onConfirmHandler}
                      burningChamberTemp={burningChamberTemp}
                    />
                  </WrapperButton>
                </WrapperSelectAndConfirmButton>
              )}
            </SelectionWrapper1>
          </SelectionShadowWrapper1>
        </SubTitleSelectionWrapper>
      )}
    </Wrapper>
  );
}

export default OutsideTemperature;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubTitleWrapper = styled.div`
  width: 252px;
  height: 32px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter}
`;

const SubTitleWrapper2 = styled.div`
  width: 246px;
  height: 26px;

  border: 1px solid #142033;
  border-radius: 13px;
  opacity: 1;
  ${flexboxCenter}
`;

const SubTitle = styled.div`
  font-size: var(--space2);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ControlContainer = styled.div`
  width: 252px;
  height: 74px;

  background: ${(props) => (props.mode ? '#FFFFFF' : '#233a54')} 0% 0% no-repeat
    padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 18px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const ContainerOfSelections = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 1px;
`;

const ContainerOfCircles = styled.div``;

const OutsideRingGreenCircle = styled.span`
  width: 22px;
  height: 22px;
  margin-left: 4px;
  margin-top: 2px;
  border: 1.5px solid #95ff45;
  border-radius: 50%;
  ${flexboxCenter};
  background: #1b2b44;
`;

const InsideFilledGreenCircle = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => (props.color ? '#95ff45' : 'none')};
  border-radius: 50%;
`;

const IndividualContainer = styled.div`
  width: 218px;
  height: 26px;
  margin-left: 4px;
  border: 1.5px solid #142033;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter};
`;

const Text = styled.p`
  font-size: var(--font-size7);
  margin-left: 10px;
  text-transform: uppercase;
  color: ${(props) => (props.mode ? '#233a54' : '#FFFFFF')};
  letter-spacing: 1.2px;
  opacity: 1;
`;

const SelectionShadowWrapper = styled.div`
  width: 252px;
  height: auto;
  margin-top: 4px;

  background: #142033 0% 0% no-repeat padding-box;
  border-radius: 31px;
  opacity: 1;
  ${flexboxCenter}
`;

const SelectionWrapper = styled.div`
  width: 248px;
  height: auto;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-bottom: 2px;

  background: transparent
    linear-gradient(
      180deg,
      ${({ color }) =>
        color ? ' #233a54 0%, #060d19 100%' : '#565656 0%, #1D1D1D 100%'}
    )
    0% 0;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 33px;
  opacity: 1;
  ${flexboxCenter}

  justify-content: space-around;
  flex-direction: column;
`;

const WrapperTitleAndImg = styled.div`
  display: flex;
  flex-direction: row;
`;

const SelectionIndentWrapper = styled.div`
  width: 195px;
  height: 38px;

  background: ${({ color }) => (color ? ' #233a54' : '#3B3B3B')};
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 22px;
  opacity: 1;
  ${flexboxCenter}
`;

const Selection = styled.p`
  font-size: var(--font-size7);
  text-transform: uppercase;
  color: ${({ color }) => (color ? '#ffff' : '#808080')};
`;

const Img = styled.img`
  margin-top: 6px;
  margin-right: 4px;
  color: #808080 0% 0% no-repeat padding-box;
`;

const SubTitleSelectionWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const SelectionShadowWrapper1 = styled.div`
  width: 252px;
  height: auto;
  margin-top: 4px;

  background: #142033 0% 0% no-repeat padding-box;
  /* box-shadow: inset 0px 0px 1px #000000; */
  border-radius: 31px;
  opacity: 1;
  ${flexboxCenter}
`;

const SelectionWrapper1 = styled.div`
  width: 248px;
  height: auto;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-bottom: 2px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0% 0;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 33px;
  opacity: 1;
  ${flexboxCenter}
  justify-content: space-around;
  flex-direction: column;
`;
const SelectionIndentWrapper1 = styled.div`
  width: 195px;
  height: 38px;
  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 22px;
  opacity: 1;
  ${flexboxCenter}
`;

const Selection1 = styled.div`
  font-size: var(--font-size7);
  text-transform: uppercase;
`;

const WrapperSelectAndConfirmButton = styled.div`
  margin-top: 2px;
  margin-bottom: 2px;
`;

const SelectWrapper = styled.div`
  width: 239px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 11px;
  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;
  /* space between options and button */
  margin-bottom: 0.2rem;
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;
