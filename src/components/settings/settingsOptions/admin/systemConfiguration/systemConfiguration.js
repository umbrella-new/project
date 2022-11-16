import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';
import { selectSettingsOfEss } from '../../../../../store/slices/settingsOfEssSlice';
import ConfirmButton from '../../ConfirmButton';
import { useContext } from 'react';
import { SettingsContext } from '../../../../../context/ContextOfSettings';
import { selectUserState } from '../../../../../store/slices/userSlice';

function SystemConfiguration() {
  const tgsTesDescription = [
    'tgs-typhoon gas system',
    'tes-typhoon electric system',
  ];

  // redux
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;
  const editState = state.buttonsOfSettings.settingsEditButton;
  const userState = useSelector(selectUserState);
  const tesState = userState.isTesSwitch;

  // states
  const [options, setOptions] = useState(false);
  // const [buttonName, setButtonName] = useState('save');

  // useContext
  const {
    SetSavedSelection,
    sysConfiguration,
    setSysConfiguration,
    configurationButtonName,
    setConfigurationButtonName,
  } = useContext(SettingsContext);

  // sets the green circles to either Tgs and Tes or Tgs only
  useEffect(() => {
    if (tesState) {
      setOptions(true);
    }
  }, [tesState]);

  useEffect(() => {
    setSysConfiguration(false);
  }, []);

  // toggles the green circle and button name
  const handleSelect = (index) => {
    index === 1 ? setOptions(true) : setOptions(false);
    setConfigurationButtonName('save');
    setSysConfiguration(false);
  };
  // handles save button to activate or deactivate the use of Tes system depending on customer need and change button name.
  const handleActivationOfTes = () => {
    SetSavedSelection(options);
    setSysConfiguration(true);
    setConfigurationButtonName('saved');
    return;
  };

  return (
    <Wrapper>
      <Wrapper2>
        <Wrapper3>
          <WrapperTitle>
            <Title>system configuration</Title>
          </WrapperTitle>

          <WrapperSelection>
            <ControlContainer mode={mode}>
              {tgsTesDescription.map((data, index) => {
                return (
                  <ContainerOfSelections key={index}>
                    <ContainerOfCircles>
                      <OutsideRingGreenCircle
                        onClick={() => {
                          editState && handleSelect(index);
                        }}
                        mode={mode}
                      >
                        <InsideFilledGreenCircle
                          mode={mode}
                          color={index}
                          options={options}
                          savedSelection={tesState}
                        ></InsideFilledGreenCircle>
                      </OutsideRingGreenCircle>
                    </ContainerOfCircles>
                    <IndividualContainer mode={mode}>
                      <Text mode={mode}>
                        {index === 0 && (
                          <img
                            src={'./images/blueTgsButtonWithoutButtonHole.svg'}
                          />
                        )}
                        {index === 1 && (
                          <img
                            src={'./images/blueTesButtonWithoutButtonHole.svg'}
                          />
                        )}
                        {data}
                      </Text>
                    </IndividualContainer>
                  </ContainerOfSelections>
                );
              })}
            </ControlContainer>
          </WrapperSelection>
          <WrapperButton
          // onClick={() => {
          //   handleActivationOfTes();
          // }}
          >
            <ConfirmButton
              name={configurationButtonName}
              buttonColor={sysConfiguration}
              handleClick={handleActivationOfTes}
              editState={editState}
            />
          </WrapperButton>
        </Wrapper3>
      </Wrapper2>
    </Wrapper>
  );
}

export default SystemConfiguration;

const Wrapper = styled.div`
  width: 270px;
  height: 168px;
  margin-top: 5px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter}
`;

const Wrapper2 = styled.div`
  width: 264px;
  height: 162px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  box-shadow: inset 1px 1px 2px rgb(255, 255, 255, 0.1);
  border: 0.5px solid #142033;
  border-radius: 9px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Wrapper3 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const WrapperTitle = styled.div`
  width: 252px;
  height: 32px;

  background: #233a54;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter}
`;

const WrapperTitle2 = styled.div`
  width: 246px;
  height: 26px;

  border: 1px solid #142033;
  border-radius: 13px;
  opacity: 1;
  ${flexboxCenter}
`;

const Title = styled.p`
  width: 120px;
  height: 18px;
  margin-bottom: 1px;

  text-align: center;
  font-size: var(--space2);
  letter-spacing: 0.8px;
  color: #ffffff;
  opacity: 1;
`;

const WrapperSelection = styled.div`
  width: 252px;
  height: 74px;

  background: #233a54;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter}
`;

const ControlContainer = styled.div`
  width: 252px;
  height: 74px;

  background: ${(props) => (props.mode ? '#FFFFFF' : '#233a54')};
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

const ContainerOfCircles = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

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

const InsideFilledGreenCircle = styled.span`
  width: 14px;
  height: 14px;

  background-color: ${({ color }) => color === 0 && '#95ff45'};

  ${({ options }) =>
    options ? 'background-color:#95ff45' : 'background-color:none'};

  border-radius: 50%;
`;

const IndividualContainer = styled.div`
  width: 218px;
  height: 32px;
  margin-left: 4px;
  border: 1.5px solid #142033;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter};
`;

const Text = styled.span`
  width: 218px;
  font-size: var(--space2);

  text-transform: uppercase;
  color: ${(props) => (props.mode ? '#233a54' : '#FFFFFF')};
  letter-spacing: 1.2px;
  opacity: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const WrapperButton = styled.div`
  width: 252px;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// function SelectGasType({ gasType, gasSelection, handleSelect, handleToggle }) {
//   // redux

//   return (
//     <Wrapper>
//       <WrapperSelection>
//         <ControlContainer mode={mode}>
//           {gasType.map((data, index) => {
//             return (
//               <ContainerOfSelections key={index}>
//                 <ContainerOfCircles>
//                   <OutsideRingGreenCircle
//                     onClick={() => {
//                       handleToggle(index);
//                       handleSelect(index);
//                     }}
//                     mode={mode}
//                   >
//                     <InsideFilledGreenCircle
//                       mode={mode}
//                       color={index === gasSelection ? true : false}
//                     ></InsideFilledGreenCircle>
//                   </OutsideRingGreenCircle>
//                 </ContainerOfCircles>
//                 <IndividualContainer mode={mode}>
//                   <Text mode={mode}>{data}</Text>
//                 </IndividualContainer>
//               </ContainerOfSelections>
//             );
//           })}
//         </ControlContainer>
//       </WrapperSelection>
//     </Wrapper>
//   );
// }

// export default SelectGasType;

// const Wrapper = styled.div`
//   ${flexboxCenter}
// `;

// const WrapperSelection = styled.div`
//   width: 252px;
//   height: 74px;

//   background: #233a54;
//   box-shadow: inset 0px 0px 3px #000000;
//   border-radius: 16px;
//   opacity: 1;
//   ${flexboxCenter}
// `;

// const ControlContainer = styled.div`
//   width: 252px;
//   height: 74px;

//   background: ${(props) => (props.mode ? '#FFFFFF' : '#233a54')};
//   box-shadow: inset 0px 0px 3px #000000;
//   border-radius: 18px;
//   opacity: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   align-items: flex-start;
// `;

// const ContainerOfSelections = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-left: 1px;
// `;

// const ContainerOfCircles = styled.div``;

// const OutsideRingGreenCircle = styled.span`
//   width: 22px;
//   height: 22px;
//   margin-left: 4px;
//   margin-top: 2px;
//   border: 1.5px solid #95ff45;
//   border-radius: 50%;
//   ${flexboxCenter};
//   background: #1b2b44;
// `;

// const InsideFilledGreenCircle = styled.div`
//   width: 12px;
//   height: 12px;
//   background-color: ${(props) => (props.color ? '#95ff45' : 'none')};
//   border-radius: 50%;
// `;

// const IndividualContainer = styled.div`
//   width: 218px;
//   height: 26px;
//   margin-left: 4px;
//   border: 1.5px solid #142033;
//   border-radius: 16px;
//   opacity: 1;
//   ${flexboxCenter};
// `;

// const Text = styled.p`
//   font-size: var(--font-size7);
//   margin-left: 10px;
//   text-transform: uppercase;
//   color: ${(props) => (props.mode ? '#233a54' : '#FFFFFF')};
//   letter-spacing: 1.2px;
//   opacity: 1;
// `;
