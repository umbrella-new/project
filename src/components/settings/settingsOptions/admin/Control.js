import { useState } from "react";
import styled from "styled-components";
import { flexboxCenter } from "../../../../styles/commonStyles";

function Control() {
  const enableSwitch = "./images/greenEnableSwitch.png";
  const disableSwitch = "./images/redDisableSwitch.png";
  const notActiveSwitch = "./images/greyEnableDisableSwitch.png";

  const [toggleLeftEnableDisable, setToggleLeftEnableDisable] =
    useState(enableSwitch);
  const [toggleRightEnableDisable, setToggleRightEnableDisable] =
    useState(enableSwitch);

  const handleLeftSwitch = () => {
    if (toggleLeftEnableDisable === enableSwitch) {
      return setToggleLeftEnableDisable(disableSwitch);
    } else setToggleLeftEnableDisable(enableSwitch);
  };

  const handleRightSwitch = () => {
    if (toggleRightEnableDisable === enableSwitch) {
      return setToggleRightEnableDisable(disableSwitch);
    } else setToggleRightEnableDisable(enableSwitch);
  };

  return (
    <Wrapper>
      <WrapperLeftSwitch>
        <WrapperLeftSwitch2>
          <ThermocoupleAndForceWrapper>
            <P>Thermocouple</P>
          </ThermocoupleAndForceWrapper>
          <NoThermocoupleWrapper>
            <PlacementP>
              <P>
                No thermocouple temperature control (will run on full power)
              </P>
            </PlacementP>
          </NoThermocoupleWrapper>
          <ImageWrapper
            onClick={() => {
              handleLeftSwitch();
            }}
          >
            <Img src={toggleLeftEnableDisable} />
          </ImageWrapper>
        </WrapperLeftSwitch2>
      </WrapperLeftSwitch>
      <WrapperRightSwitch>
        <WrapperRightSwitch2>
          <ThermocoupleAndForceWrapper>
            <PlacementP2>
              <P>Force - gas & electric system simultaneously on.</P>
            </PlacementP2>
          </ThermocoupleAndForceWrapper>
          <ImageWrapper
            onClick={() => {
              handleRightSwitch();
            }}
          >
            <Img src={toggleRightEnableDisable} />
          </ImageWrapper>
        </WrapperRightSwitch2>
      </WrapperRightSwitch>
    </Wrapper>
  );
}

export default Control;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border: 0.5px solid #142033;
  border-radius: 13px;
  opacity: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const WrapperLeftSwitch = styled.div`
  width: 270px;
  height: 145px;
  margin-top: 5px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border: 1px solid #142033;
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter}
`;

const WrapperLeftSwitch2 = styled.div`
  width: 264px;
  height: 139px;

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

const ThermocoupleAndForceWrapper = styled.div`
  width: 253px;
  height: 32px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 24px;
  opacity: 1;
  ${flexboxCenter}
`;

const P = styled.p`
  font-size: var(--space2);
  text-align: center;
  letter-spacing: 0.9px;
  color: #ffffff;
  text-transform: uppercase;
`;

const NoThermocoupleWrapper = styled.div`
  width: 253px;
  height: 44px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 24px;
  opacity: 1;
  ${flexboxCenter}
`;

const PlacementP = styled.div`
  width: 168px;
  height: 29px;
`;

const ImageWrapper = styled.div`
  width: 124px;
  height: 28px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const WrapperRightSwitch = styled.div`
  width: 270px;
  height: 88px;
  margin-top: 5px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border: 1px solid #142033;
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter}
`;

const WrapperRightSwitch2 = styled.div`
  width: 264px;
  height: 82px;

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

const PlacementP2 = styled.div`
  width: 206px;
  height: 20px;
`;
