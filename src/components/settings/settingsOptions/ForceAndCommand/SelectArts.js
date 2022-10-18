import { useState } from 'react';
import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
import { useSelector } from 'react-redux';
import { selectSettingsOfEss } from '../../../../store/slices/settingsOfEssSlice';
import EditCancelApplyButtons from '../../settingsOptions/EditCancelApplyButtons';

function SelectArts({ activateOnOffSwitch }) {
  const switchOnImage = './images/greenOnOffSwitch.png';
  const switchOffImage = './images/redOnOffSwitch.png';
  const gpEbp = [
    'block and do not allow ess to operate when on ebp-emergency backup power',
    'reactivates ess when powered by ebp emergency backup power',
  ];

  // states
  const [switchImage, setSwitchImage] = useState(switchOffImage);
  const [gpEbpPowering, setGpEbpPowering] = useState(null);

  // redux
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;

  // functions
  const handleImages = () => {
    if (switchImage === switchOffImage) {
      return setSwitchImage(switchOnImage);
    } else return setSwitchImage(switchOffImage);
  };

  const handleClick = (index) => {
    if (index !== gpEbpPowering) return setGpEbpPowering(index);
  };

  return (
    <Wrapper>
      <Wrapper2>
        <TitleWrapper>
          <TitleWrapper2>
            <Title>select arts</Title>
            <GreenConnectionSignal src={'./images/ConnectionSignal.svg'} />
          </TitleWrapper2>
        </TitleWrapper>
        <SubTitleWrapper>
          <SubTitle>ess</SubTitle>
          <SubTitleDescription>electric switch system</SubTitleDescription>
          <GpEbpWrapper>
            <Span1>gp</Span1>
            <BigGreenConnectionSignal
              src={'./images/bigGreenConnectionSignal.svg'}
            />
            <Span2>ebp</Span2>
          </GpEbpWrapper>
        </SubTitleWrapper>
        <FlexSelections>
          {gpEbp.map((data, index) => {
            return (
              <EachContainerOfSelection key={index}>
                <ContainerDarkLight>
                  <ContainerImages>
                    <OutsideRingGreenCircle
                      onClick={() => {
                        handleClick(index);
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
        </FlexSelections>
        <EditCancelApplyButtons />
      </Wrapper2>
    </Wrapper>
    // <Wrapper>
    //   <Wrapper2>
    //     <WrapperTitle>
    //       <Title>Select Arts</Title>
    //     </WrapperTitle>
    //     <WrapperText>
    //       <P>when system is on & power goes out the system will not run</P>
    //     </WrapperText>
    //     {activateOnOffSwitch ? (
    //       <OnOffSwitch onClick={() => handleImages()}>
    //         <Img src={switchImage} />
    //       </OnOffSwitch>
    //     ) : (
    //       <OnOffSwitch>
    //         <Img src={switchOffImage} />
    //       </OnOffSwitch>
    //     )}
    //   </Wrapper2>
    // </Wrapper>
  );
}

export default SelectArts;

const Wrapper = styled.div`
  width: 275px;
  height: 243px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter};
`;

const Wrapper2 = styled.div`
  width: 269px;
  height: 238px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  border: 0.5px solid #142033;
  border-radius: 9px;
  opacity: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width: 258px;
  height: 32px;
  margin-top: 6px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter};
`;

const TitleWrapper2 = styled.div`
  width: 252px;
  height: 26px;
  /* UI Properties */
  border: 1px solid #142033;
  border-radius: 13px;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  text-align: left;
  font-size: var(--space1);
  letter-spacing: 1px;
  color: #ffffff;
  opacity: 1;
  margin-left: 8px;
`;

const GreenConnectionSignal = styled.img`
  width: 30px;
  height: 20px;
  margin-right: 8px;
`;

const SubTitleWrapper = styled.div`
  margin-top: 6px;
`;

const SubTitle = styled.p`
  font-size: var(--space0);
  text-align: center;
  letter-spacing: NaNpx;
  color: #ff7800;
  text-transform: uppercase;
  opacity: 1;
`;

const SubTitleDescription = styled.p`
  font-size: var(--space2);
  text-align: center;

  color: #ff7800;
  text-transform: uppercase;
  opacity: 1;
`;
const Span1 = styled.span`
  font-size: 22px;
  margin-left: 24px;

  font-size: 22px;
  letter-spacing: 2.2px;
  color: #95ff45;
  opacity: 1;
  text-transform: uppercase;
`;

const GpEbpWrapper = styled.div`
  margin-top: 4px;
`;

const BigGreenConnectionSignal = styled.img``;

const Span2 = styled.span`
  text-align: left;
  font-size: 22px;
  letter-spacing: 2.2px;
  color: #ff7800;
  opacity: 1;
  text-transform: uppercase;
`;

const FlexSelections = styled.div`
  width: auto;
  height: 80px;
  margin-top: 2px;

  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

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
`;

// const Wrapper = styled.div`
//   width: 277px;
//   height: 164px;
//   margin-top: 2px;

//   background: #1b2b44 0% 0% no-repeat padding-box;
//   box-shadow: inset 0px 0px 2px #000000;
//   /* border: 1px solid #142033; */
//   border-radius: 12px;
//   opacity: 1;
//   ${flexboxCenter}
// `;

// const Wrapper2 = styled.div`
//   width: 273px;
//   height: 160px;

//   background: transparent
//     linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(35, 58, 84) 100%) 0% 0% no-repeat
//     padding-box;
//   box-shadow: inset 0px 0px 2px rgb(255, 255, 255, 0.1);
//   border: 1px solid #142033;
//   border-radius: 9px;
//   opacity: 1;
//   ${flexboxCenter}
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
// `;

// const WrapperTitle = styled.div`
//   width: 262px;
//   height: 36px;
//   margin-top: 1px;

//   background: #233a54;
//   box-shadow: inset 0px 0px 3px #000000;
//   border-radius: 27px;
//   opacity: 1;
//   ${flexboxCenter}
//   justify-content: space-between;
// `;

// const Title = styled.p`
//   margin-left: 12px;
//   font-size: var(--space1);
//   text-transform: uppercase;
// `;

// const WrapperText = styled.div`
//   width: 262px;
//   height: 54px;

//   background: #233a54 0% 0% no-repeat padding-box;
//   box-shadow: inset 0px 0px 3px #000000;
//   border-radius: 27px;
//   opacity: 1;
//   ${flexboxCenter}
// `;

// const P = styled.p`
//   margin-right: 4px;
//   margin-left: 4px;
//   font-size: var(--space2);
//   text-align: center;
//   text-transform: uppercase;
// `;

// const OnOffSwitch = styled.div`
//   width: 107px;
//   height: 42px;

//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Img = styled.img`
//   width: 100%;
//   height: 100%;
// `;
