import styled from "styled-components";
import { flexboxCenter } from "../../../../styles/commonStyles";
import ButtonSelect from "./ButtonSelect";

function SelectTc() {
  const data = [
    { title: "current heater temperature", selection: "select t/c" },
    { title: "enclosure temperature", selection: "select t/c" },
    { title: "outside temperature", selection: "select t/c" },
  ];

  return (
    <WrapperTelemetry>
      <WrapperTelemetry2>
        <TitleWrapper>
          <P>select t/c telemetry</P>
        </TitleWrapper>
        <FlexWrapper>
          {data.map((value) => {
            return (
              <SubTitleSelectionWrapper
                key={Math.floor(Math.random() * 1555555)}
              >
                <SubTitleWrapper>
                  <SubTitleWrapper2>
                    <SubTitle>{value.title}</SubTitle>
                  </SubTitleWrapper2>
                </SubTitleWrapper>
                <SelectionShadowWrapper>
                  <SelectionWrapper>
                    <SelectionIndentWrapper>
                      <Selection>{value.selection}</Selection>
                    </SelectionIndentWrapper>

                    <Img src={"./images/whiteTriangle.svg"} />
                  </SelectionWrapper>
                </SelectionShadowWrapper>
              </SubTitleSelectionWrapper>
            );
          })}
          <WrapperButton>
            {" "}
            <ButtonSelect />
          </WrapperButton>
        </FlexWrapper>
        {/* <Triangle></Triangle> */}
      </WrapperTelemetry2>
    </WrapperTelemetry>
  );
}

export default SelectTc;

const WrapperTelemetry = styled.div`
  width: 546px;
  height: 234px;
  margin-top: 2px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  /* border: 1px solid #142033; */
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter}
`;

const WrapperTelemetry2 = styled.div`
  width: 542px;
  height: 230px;

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

const FlexWrapper = styled.div`
  width: 562px;
  height: 238px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const SubTitleSelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const SubTitleWrapper = styled.div`
  width: 252px;
  height: 32px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter}
`;

const SubTitleWrapper2 = styled.div`
  width: 246px;
  height: 26px;

  border: 1px solid #142033;
  border-radius: 13px;
  opacity: 1;
  ${flexboxCenter}
`;

const SubTitle = styled.div`
  font-size: var(--space2);
  text-transform: uppercase;
`;

const SelectionShadowWrapper = styled.div`
  width: 252px;
  height: 51px;
  margin-top: 4px;

  background: #142033 0% 0% no-repeat padding-box;
  /* box-shadow: inset 0px 0px 1px #000000; */
  border-radius: 31px;
  opacity: 1;
  ${flexboxCenter}
`;

const SelectionWrapper = styled.div`
  width: 248px;
  height: 47px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0% 0;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 33px;
  opacity: 1;
  ${flexboxCenter}
  justify-content: space-around;
`;
const SelectionIndentWrapper = styled.div`
  width: 195px;
  height: 38px;
  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 22px;
  opacity: 1;
  ${flexboxCenter}
`;

const Selection = styled.div`
  font-size: var(--font-size7);
  text-transform: uppercase;
`;

const Img = styled.img`
  margin-top: 6px;
  margin-right: 4px;
`;

const WrapperButton = styled.div`
  width: 130px;
  height: 46px;
  margin-top: 20px;
  margin-bottom: 20px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 38px;
  opacity: 1;
  ${flexboxCenter}
`;
