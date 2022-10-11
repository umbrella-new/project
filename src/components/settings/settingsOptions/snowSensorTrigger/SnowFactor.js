import styled from "styled-components";
import { flexboxCenter } from "../../../../styles/commonStyles";

function SnowFactor() {
  return (
    <ContainerWindFactors>
      <TitleContainer>
        <Title>ess-snow sensor trigger</Title>
      </TitleContainer>

      <ValueContainer>
        <SmallContainer>
          <Temperature> ° c</Temperature>
        </SmallContainer>
      </ValueContainer>
    </ContainerWindFactors>
  );
}

export default SnowFactor;

const ContainerWindFactors = styled.div`
  width: 286px;
  height: 94px;
  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-evenly;
  box-sizing: border-box;
  border: 0.5px solid #000000;
  border-radius: 12px;
  background-image: -webkit-linear-gradient(
    ${(props) => (props.gradient ? 180 : 360)}deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
`;

const TitleContainer = styled.div`
  width: 278px;
  height: 32px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter}
`;

const Title = styled.p`
  font-size: var(--font-size7);
  text-transform: uppercase;
`;

const ValueContainer = styled.div`
  width: 278px;
  height: 42px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 21px;
  opacity: 1;
  ${flexboxCenter};
`;

const SmallContainer = styled.div`
  width: 269px;
  height: 32px;

  border: 1px solid #142033;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter}
`;

const Temperature = styled.span`
  font-size: var(--font-size7);
  margin-right: var(--font-size6);
  text-transform: uppercase;
`;
