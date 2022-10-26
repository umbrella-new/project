import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectSettingsOfEss } from '../../../../../store/slices/settingsOfEssSlice';
import { flexboxCenter } from '../../../../../styles/commonStyles';

function SelectBox({
  essGpEbp,
  mode,
  handleToggle,
  gpEbpPowering,
  tgsGpEbp,
  tesGpEbp,
  propIndex,
  essSwitch,
}) {
  // redux
  const state = useSelector(selectSettingsOfEss);
  const editState = state.buttonsOfSettings.settingsEditButton;

  return (
    <div>
      {essSwitch
        ? essGpEbp.map((data, index) => {
            return (
              <EachContainerOfSelection key={index}>
                <ContainerDarkLight>
                  <ContainerImages>
                    <OutsideRingGreenCircle
                      onClick={() => {
                        editState && handleToggle(index);
                      }}
                      mode={mode}
                    >
                      <InsideFilledGreenCircle
                        mode={mode}
                        color={index === gpEbpPowering ? true : false}
                      ></InsideFilledGreenCircle>
                    </OutsideRingGreenCircle>
                  </ContainerImages>
                  <IndividualContainer mode={mode}>
                    <Description mode={mode}>{data}</Description>
                  </IndividualContainer>
                </ContainerDarkLight>
              </EachContainerOfSelection>
            );
          })
        : propIndex === 0
        ? tgsGpEbp.map((data, index) => {
            return (
              <EachContainerOfSelection key={index}>
                <ContainerDarkLight>
                  <ContainerImages>
                    <OutsideRingGreenCircle
                      onClick={() => {
                        editState && handleToggle(index);
                      }}
                      mode={mode}
                    >
                      <InsideFilledGreenCircle
                        mode={mode}
                        color={index === gpEbpPowering ? true : false}
                      ></InsideFilledGreenCircle>
                    </OutsideRingGreenCircle>
                  </ContainerImages>
                  <IndividualContainer mode={mode}>
                    <Description mode={mode}>{data}</Description>
                  </IndividualContainer>
                </ContainerDarkLight>
              </EachContainerOfSelection>
            );
          })
        : tesGpEbp.map((data, index) => {
            return (
              <EachContainerOfSelection key={index}>
                <ContainerDarkLight>
                  <ContainerImages>
                    <OutsideRingGreenCircle
                      onClick={() => {
                        editState && handleToggle(index);
                      }}
                      mode={mode}
                    >
                      <InsideFilledGreenCircle
                        mode={mode}
                        color={index === gpEbpPowering ? true : false}
                      ></InsideFilledGreenCircle>
                    </OutsideRingGreenCircle>
                  </ContainerImages>
                  <IndividualContainer mode={mode}>
                    <Description mode={mode}>{data}</Description>
                  </IndividualContainer>
                </ContainerDarkLight>
              </EachContainerOfSelection>
            );
          })}
    </div>
  );
}

export default SelectBox;

const EachContainerOfSelection = styled.div`
  width: 258px;
  height: 38px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 19px;
  opacity: 1;
  display: flex;
  justify-content: space-evenly;
  justify-content: center;
`;

const ContainerDarkLight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: -1px;
`;

const ContainerImages = styled.div``;

const OutsideRingGreenCircle = styled.span`
  width: 24px;
  height: 24px;
  margin-left: 4px;
  margin-top: 2px;
  border: 1.5px solid #95ff45;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1b2b44;
`;

const InsideFilledGreenCircle = styled.div`
  width: 14px;
  height: 14px;
  background-color: ${(props) => (props.color ? '#95ff45' : 'none')};
  border-radius: 50%;
`;

const IndividualContainer = styled.div`
  width: 224px;
  height: 34px;
  margin-left: 4px;
  border: 1.5px solid #142033;
  border-radius: 18px;
  opacity: 1;
  ${flexboxCenter}
`;

const Description = styled.p`
  font-size: var(--space2);
  margin-left: 10px;
  text-transform: uppercase;
  color: ${(props) => (props.mode ? '#233a54' : '#FFFFFF')};
  letter-spacing: 1.2px;
  opacity: 1;
  max-width: 28ch;
  line-height: 7px;
  text-align: center;
`;
