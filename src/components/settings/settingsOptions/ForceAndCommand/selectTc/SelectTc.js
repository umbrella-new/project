import styled from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';
import ButtonSelect from '../ButtonSelect';
import CurrentEncloseAndBurningTemp from './CurrentEncloseAndBurningTemp';
import OutsideTemperature from './OutsideTemperature';

function SelectTc({ ess, tgs, essSwitch }) {
  const essData = [
    { title: `current ${ess} heater temperature`, selection: 'select t/c' },
    { title: 'enclosure temperature', selection: 'select t/c' },
  ];

  const tgsData = [
    { title: `current ${tgs[0]} heater temperature`, selection: 'select t/c' },
    { title: `current ${tgs[1]} heater temperature`, selection: 'select t/c' },
    { title: 'enclosure temperature', selection: 'select t/c' },
  ];

  return (
    <WrapperTelemetry>
      <WrapperTelemetry1>
        <WrapperTelemetry2>
          <TitleWrapper>
            <P>select t/c telemetry</P>
          </TitleWrapper>
          <Wrapper>
            <OutsideTemperature />
            <CurrentEncloseAndBurningTemp
              data={essSwitch ? essData : tgsData}
              essSwitch={essSwitch}
            />
          </Wrapper>
          <WrapperButton>
            <ButtonSelect />
          </WrapperButton>
        </WrapperTelemetry2>
      </WrapperTelemetry1>
    </WrapperTelemetry>
  );
}

export default SelectTc;

const WrapperTelemetry = styled.div`
  width: 552px;
  height: auto;
  margin: 2px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  /* border: 1px solid #142033; */
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter}
`;

const WrapperTelemetry1 = styled.div`
  width: 548px;
  height: auto;
  margin: 2px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter}
`;

const WrapperTelemetry2 = styled.div`
  width: 544px;
  height: auto;
  margin: 2px;

  background: transparent
    linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(35, 58, 84) 100%) 0% 0% no-repeat
    padding-box;
  box-shadow: inset 0px 0px 2px rgb(255, 255, 255, 0.1);
  border: 1px solid #142033;
  border-radius: 9px;
  opacity: 1;
  ${flexboxCenter}
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const P = styled.p`
  font-size: var(--font-size7);
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #ffffff;
`;

const TitleWrapper = styled.div`
  width: 532px;
  height: 32px;
  margin-top: 4px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 24px;
  opacity: 1;
  ${flexboxCenter}
`;

const Wrapper = styled.div`
  width: 546px;
  height: 234px;
  height: auto;
  margin: 2px 0 2px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
`;

const WrapperButton = styled.div`
  width: 130px;
  height: 46px;
  margin-top: 10px;
  margin-bottom: 10px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 38px;
  opacity: 1;
  ${flexboxCenter}
`;
