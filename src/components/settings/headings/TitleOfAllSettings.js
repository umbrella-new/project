import styled from "styled-components";

function TitleOfAllSettings({
  windFactorTrigger,
  Units,
  SnowSensorTrigger,
  ForceAndCommand,
  Admin,
}) {
  return (
    <>
      <Container>
        <SettingTitle>
          SETTINGS//SETTINGS OPTIONS//<Span>{ForceAndCommand}</Span>
        </SettingTitle>
        <ContainerOptions>
          <UnitSettings>
            {windFactorTrigger}
            <Dots>
              .................................................................................................
            </Dots>
          </UnitSettings>
        </ContainerOptions>
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

const ContainerOptions = styled.div`
  height: 23px;
  width: 822px;
  display: flex;
  flex-direction: row;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Span = styled.span`
  color: #95ff45;
  font-size: var(--font-size3);
  text-transform: uppercase;
`;

const UnitSettings = styled.p`
  font-size: var(--font-size6);
  color: #fff;
  letter-spacing: 2px;
  border-bottom: 1px solid #fff;
  margin-top: -2px;
  margin-right: 13px;
  padding-bottom: 0.5px;
  text-transform: uppercase;
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

export default TitleOfAllSettings;
