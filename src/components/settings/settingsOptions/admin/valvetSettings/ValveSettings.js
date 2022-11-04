import styled from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';
import { useState, useRef } from 'react';
import ValveConfirmButton from './ValveConfirmButton';
import { useSelector } from 'react-redux';
import { selectSettingsOfEss } from '../../../../../store/slices/settingsOfEssSlice';

function ValveSettings({ setWarningMessage, setInputValue, inputValue }) {
  const data = [
    { title: 'start position:' },
    { title: 'min position:' },
    { title: 'max position:' },
  ];

  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;
  const editState = state.buttonsOfSettings.settingsEditButton;

  const handleInputs = (e, index) => {
    e.stopPropagation();
    const value = Number(e.target.value);

    if (value >= 0 && value <= 100) {
      if (index === 0) {
        return setInputValue(() => ({ ...inputValue, first: value }));
      } else if (index === 1) {
        return setInputValue(() => ({ ...inputValue, second: value }));
      } else return setInputValue(() => ({ ...inputValue, third: value }));
    } else {
      setWarningMessage(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return inputValue;
  };

  return (
    <WrapperTitleAndSettings>
      <WrapperTitleAndSettings2>
        <WrapperTitle>
          <Title>valve settings</Title>
        </WrapperTitle>
        <WrapperMachineNameData>
          <MachineSerialNumberBackground
            src={'./images/machineSerialNumberBackground.svg'}
          />
          <MachineName>we-cove-03-04-05 #10 s.t.tgs</MachineName>
          <WrapperData>
            <WrapperData2>
              <WrapperData3>
                <SmallTitle>gas value position</SmallTitle>
                <Form onSubmit={editState && handleSubmit}>
                  <WrapperIndent>
                    {data.map((value, index) => {
                      return (
                        <MapDiv key={index}>
                          <DataSubtitle>{value.title}</DataSubtitle>
                          <DataContainer>
                            <DataIndent>
                              <DataInput
                                type='number'
                                value={
                                  index === 0
                                    ? inputValue.first
                                    : index === 1
                                    ? inputValue.second
                                    : inputValue.third
                                }
                                onChange={(e) => {
                                  editState && handleInputs(e, index);
                                }}
                              ></DataInput>
                            </DataIndent>
                            <PercentageSign>%</PercentageSign>
                          </DataContainer>
                        </MapDiv>
                      );
                    })}
                  </WrapperIndent>
                  <WrapperButton>
                    <ValveConfirmButton type='submit' />
                  </WrapperButton>
                </Form>
              </WrapperData3>
            </WrapperData2>
          </WrapperData>
        </WrapperMachineNameData>
      </WrapperTitleAndSettings2>
    </WrapperTitleAndSettings>
  );
}

export default ValveSettings;

const WrapperTitleAndSettings = styled.div`
  width: 548px;
  height: 135px;
  /* UI Properties */
  background: var(--unnamed-color-1b2b44) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px var(--unnamed-color-000000);
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter}
`;
const WrapperTitleAndSettings2 = styled.div`
  width: 542px;
  height: 129px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  border: 0.5px solid #142033;
  border-radius: 9px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const WrapperTitle = styled.div`
  width: 535px;
  height: 32px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 24px;
  opacity: 1;
  ${flexboxCenter}
`;

const Title = styled.p`
  text-align: center;
  font-size: var(--space0);
  letter-spacing: 1.2px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
`;

const WrapperMachineNameData = styled.div`
  width: 535px;
  height: 77px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 6px 6px 26px 26px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const MachineSerialNumberBackground = styled.img`
  position: absolute;
  left: -1.2%;
  top: -5%;
`;

const MachineName = styled.p`
  font-size: var(--space0);
  letter-spacing: 1.2px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
  position: absolute;
  left: 3%;
  top: 7%;
`;

const WrapperData = styled.div`
  width: 530px;
  height: 50px;
  margin-bottom: 2px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #00000029;
  border: 0.5px solid #000000;
  border-radius: 0px 25px 25px 25px;
  opacity: 1;
  ${flexboxCenter}
`;

const WrapperData2 = styled.div`
  width: 519px;
  height: 40px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 24px;
  opacity: 1;
  ${flexboxCenter}
`;
const WrapperData3 = styled.div`
  width: 515px;
  height: 36px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 33px;
  opacity: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SmallTitle = styled.p`
  width: 70px;
  text-align: center;
  font-size: var(--space2);
  letter-spacing: 0.8px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
`;

const WrapperIndent = styled.div`
  width: 358px;
  height: 30px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 24px;
  opacity: 1;
  ${flexboxCenter}
`;

const MapDiv = styled.div`
  height: 100%;
  width: 100%;
  padding-right: 1px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DataSubtitle = styled.p`
  width: 58px;
  height: auto;
  text-align: center;
  font-size: var(--space2);
  letter-spacing: 0.8px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
  &:first-child {
    padding-left: 2px;
  }
`;

const DataContainer = styled.div`
  width: 60px;
  height: 28px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 15px;
  opacity: 1;
  ${flexboxCenter}
`;

const DataIndent = styled.div`
  width: 33px;
  height: 20px;
  margin-left: -4px;

  background: #233a54;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 18px 6px 6px 18px;
  opacity: 1;
  ${flexboxCenter}
`;

const DataInput = styled.input`
  width: 29px;
  height: 18px;
  border-radius: 15px;
  font-size: var(--space1);
  letter-spacing: 1px;
  background-color: transparent;
  opacity: 1;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const PercentageSign = styled.p`
  margin-left: 6px;
  font-size: var(--space2);
`;

const WrapperButton = styled.div`
  margin-left: 6px;
`;
