import styled from "styled-components";
import { flexboxCenter } from "../../../styles/commonStyles";

function Legend() {
  return (
    <Wrapper>
      <ContentsWrapper>
        <ContentsInnerWrapper>
          <TitleWrapper>
            <Title>LEGEND :</Title>
          </TitleWrapper>

          <ItemWrapper>
            <Img src={"/images/orange-dot.svg"} />
            <HeaterTemp>HT-HEATER TEMPERATURE</HeaterTemp>
            <Img src={"/images/green-dot.svg"} />
            <EnclosureTemp>ET-ENCLOSURE TEMPERATURE</EnclosureTemp>
            <Img src={"/images/blue-dot.svg"} />
            <OutsideTemp>OT-OUTSIDE TEMPERATURE</OutsideTemp>
          </ItemWrapper>
        </ContentsInnerWrapper>
      </ContentsWrapper>
    </Wrapper>
  );
}

export default Legend;

const Wrapper = styled.div`
  height: 24px;
  width: 100%;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 7px;

  ${flexboxCenter}
`;

const ContentsWrapper = styled.div`
  width: 574px;
  height: 20px;

  background: transparent linear-gradient(90deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 6px;

  ${flexboxCenter}
`;

const ContentsInnerWrapper = styled.div`
  width: 566px;
  height: 12px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 3px;

  ${flexboxCenter}
  justify-content: space-between;
  padding: 0 5px;
`;

const TitleWrapper = styled.div`
  ${flexboxCenter}
  justify-content: flex-start;
`;

const Title = styled.span`
  font-size: 7px;
  letter-spacing: 0.7px;
  color: #ffffff;
  opacity: 1;
`;

const ItemWrapper = styled.div`
  ${flexboxCenter}
  justify-content: space-between;
`;

const Img = styled.img`
  width: 6px;
  margin-right: 7px;
`;

const HeaterTemp = styled.span`
  font-size: 8px;
  color: #ff7800;

  font: normal normal 800 7px/10px Orbitron;
  letter-spacing: 0.7px;
  color: #ff7800;

  margin-right: 10px;
`;

const EnclosureTemp = styled.span`
  font-size: 8px;
  color: #4baf00;

  font: normal normal 800 7px/10px Orbitron;
  letter-spacing: 0.7px;
  opacity: 1;
  margin-right: 10px;
`;

const OutsideTemp = styled.span`
  font-size: 8px;
  color: #2b6fc1;

  font: normal normal 800 7px/10px Orbitron;
  letter-spacing: 0.7px;
  color: #2b6fc1;
`;
