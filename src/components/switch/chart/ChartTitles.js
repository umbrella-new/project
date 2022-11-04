import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { selectChart } from "../../../store/slices/chartSlice";
import { selectFaults } from "../../../store/slices/faultsSlice";
import { selectUserState } from "../../../store/slices/userSlice";
import { flexboxCenter } from "../../../styles/commonStyles";

function ChartTitles() {
  const state = useSelector(selectChart);
  const { gpState, ebpState, wifiState } = state;
  const faultsState = useSelector(selectFaults);
  const userState = useSelector(selectUserState);
  const { isEssSwitch } = userState;
  const location = useLocation();

  const essFaults = faultsState.ess.message.length > 0;
  const tgsFaults = faultsState.tgs.message.length > 0;
  const alarmState = isEssSwitch
    ? essFaults
    : location.pathname === "/"
    ? tgsFaults
    : essFaults;
  return (
    <Wrapper>
      <Title>SWITCH GENERATED TELEMETRY </Title>

      <ItemsWrapperUl>
        <GpEbpWrapper>
          <ItemTitle isActivated={gpState}>GP</ItemTitle>
          <BatteryImage
            src={
              gpState
                ? "/images/battery-activated.svg"
                : "/images/battery-inactivated.svg"
            }
          />
        </GpEbpWrapper>

        <GpEbpWrapper>
          <ItemEbpTitle isActivated={ebpState}>EBP</ItemEbpTitle>
          <BatteryImage
            src={
              ebpState
                ? "/images/battery-activated-orange.svg"
                : "/images/battery-inactivated.svg"
            }
          />
        </GpEbpWrapper>

        <WifiAlertIconsWrapper>
          <Img
            src={
              wifiState
                ? "/images/wifi-activated.svg"
                : "/images/wifi-inactivated.svg"
            }
          />
        </WifiAlertIconsWrapper>
        <WifiAlertIconsWrapper>
          <Img
            faluts={true}
            src={
              alarmState
                ? "/images/alarm-activated.svg"
                : "/images/alarm-inactivated.svg"
            }
          />
        </WifiAlertIconsWrapper>
      </ItemsWrapperUl>
    </Wrapper>
  );
}

export default ChartTitles;

const Wrapper = styled.div`
  width: 100%;
  height: 22px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;

  ${flexboxCenter}
  justify-content: space-between;

  padding-right: 0.15rem;
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

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 18px;
`;

const GpEbpWrapper = styled.li`
  width: 56px;
  height: 16px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 8px;

  ${flexboxCenter}
  justify-content: space-evenly;
`;

const ItemTitle = styled.span`
  color: ${(p) => (p.isActivated ? "#95ff45" : `#808080`)};
  font-size: 11px;
`;

const ItemEbpTitle = styled.span`
  color: ${(p) => (p.isActivated ? "#FF7800" : `#808080`)};
  font-size: 11px;
`;

const BatteryImage = styled.img``;

const WifiAlertIconsWrapper = styled.li`
  width: 27px;
  height: 16px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 8px;
  ${flexboxCenter}
`;

const Img = styled.img`
  ${(p) =>
    p.faluts &&
    css`
      margin-left: 0.17rem;
    `}
`;
