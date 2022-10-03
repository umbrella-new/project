import styled from 'styled-components';
import { flexboxCenter } from '../../../styles/commonStyles';

function ChartTitles() {
  const gpState = true;
  const espState = true;
  const wifiState = true;
  const alarmState = false;
  return (
    <Wrapper>
      <Title>SWITCH GENERATED TELEMETRY </Title>

      <ItemsWrapperUl>
        <GpEbpWrapper>
          <ItemTitle isActivated={gpState}>GP</ItemTitle>
          <BatteryImage
            src={
              gpState
                ? '/images/battery-activated.svg'
                : '/images/battery-inactivated.svg'
            }
          />
        </GpEbpWrapper>

        <GpEbpWrapper>
          <ItemEbpTitle isActivated={espState}>EBP</ItemEbpTitle>
          <BatteryImage
            src={
              espState
                ? '/images/battery-activated-orange.svg'
                : '/images/battery-inactivated.svg'
            }
          />
        </GpEbpWrapper>

        <WifiAlertIconsWrapper>
          <Img
            src={
              wifiState
                ? '/images/wifi-activated.svg'
                : '/images/wifi-inactivated.svg'
            }
          />
        </WifiAlertIconsWrapper>
        <WifiAlertIconsWrapper>
          <Img
            src={
              alarmState
                ? '/images/alarm-activated.svg'
                : '/images/alarm-inactivated.svg'
            }
          />
        </WifiAlertIconsWrapper>
      </ItemsWrapperUl>
    </Wrapper>
  );
}

export default ChartTitles;

const Wrapper = styled.div`
  width: var(--chart-width);
  height: 22px;
  /* UI Properties */
  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;

  ${flexboxCenter}
  justify-content: space-between;

  padding-right: 0.1rem;
  padding-left: 0.5rem;

  position: relative;
`;

const Title = styled.span`
  font-size: 10px;
  text-align: start;
  height: 14px;

  border-bottom: 1px solid white;
  width: 63%;
  margin-right: var(--space3);
`;

const ItemsWrapperUl = styled.ul`
  ${flexboxCenter}
  justify-content: space-between;
  padding: 0 0.05rem;

  width: 187px;
  height: 18px;

  background: var(--unnamed-color-1b2b44) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px var(--unnamed-color-000000);
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 18px;
  opacity: 1;
`;

const GpEbpWrapper = styled.li`
  width: 56px;
  height: 16px;

  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 8px;
  opacity: 1;

  ${flexboxCenter}
  justify-content: space-evenly;
`;

const ItemTitle = styled.span`
  color: ${(p) => (p.isActivated ? '#95ff45' : `#808080`)};
  font-size: 11px;
`;

const ItemEbpTitle = styled.span`
  color: ${(p) => (p.isActivated ? '#FF7800' : `#808080`)};
  font-size: 11px;
`;

const BatteryImage = styled.img``;

const WifiAlertIconsWrapper = styled.li`
  width: 27px;
  height: 16px;

  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 8px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img``;
