import styled from "styled-components";

function TitleOfUnitsSettings() {
  return (
    <>
      <Container>
        <SettingTitle>
          SETTINGS//SETTINGS OPTIONS//<Span>UNITS SETTINGS</Span>
        </SettingTitle>
        <UnitSettings>
          UNIT SETTINGS
          <Dots>
            .........................................................................
          </Dots>
        </UnitSettings>
        <Img src={"/images/logoBrighter.svg"} />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 878px;
  height: 52px;

  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 9px;
  margin-left: 5px;
  padding-left: 6px;
  padding-top: 6px;
  border-radius: 6px;
  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 4px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 4px #000000;
  opacity: 1;
`;

const SettingTitle = styled.p`
  font-size: 14px;
  color: #fff;
  letter-spacing: 1.4px;
`;

const Span = styled.span`
  color: #95ff45;
  font-size: var(--font-size3);
`;

const UnitSettings = styled.p`
  font-size: var(--font-size6);
  color: #fff;
  letter-spacing: 2px;
  border-bottom: 1px solid #fff;
  margin-top: -2px;
  margin-right: 13px;
  padding-bottom: 0.5px;
`;

const Dots = styled.span`
  letter-spacing: 4px;
`;

const Img = styled.img`
  height: 34px;
  width: 36px;
  position: absolute;
  top: 13%;
  left: 94.5%;
`;

export default TitleOfUnitsSettings;
