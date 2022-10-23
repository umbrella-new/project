import styled from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';

function CurrentEncloseAndBurningTemp({ data, essSwitch, tesSwitch }) {
  return (
    <FlexWrapper>
      {data.map((value, index) => {
        return (
          <SubTitleSelectionWrapper key={Math.floor(Math.random() * 1555555)}>
            <SubTitleWrapper
              tesSwitch={tesSwitch}
              essSwitch={essSwitch}
              index={index}
            >
              <SubTitleWrapper2
                tesSwitch={tesSwitch}
                essSwitch={essSwitch}
                index={index}
              >
                <SubTitle
                  essSwitch={essSwitch}
                  color={index}
                  tesSwitch={tesSwitch}
                >
                  {value.title}
                </SubTitle>
              </SubTitleWrapper2>
            </SubTitleWrapper>
            <SelectionShadowWrapper
              tesSwitch={tesSwitch}
              essSwitch={essSwitch}
              index={index}
            >
              <SelectionWrapper
                tesSwitch={tesSwitch}
                essSwitch={essSwitch}
                index={index}
              >
                <SelectionIndentWrapper
                  tesSwitch={tesSwitch}
                  essSwitch={essSwitch}
                  index={index}
                >
                  <Selection
                    tesSwitch={tesSwitch}
                    essSwitch={essSwitch}
                    index={index}
                  >
                    {value.selection}
                  </Selection>
                </SelectionIndentWrapper>
                {essSwitch ? (
                  <Img src={'./images/whiteTriangle.svg'} />
                ) : !tesSwitch && index === 1 ? (
                  <Img src={'./images/greyTriangle.svg'} />
                ) : (
                  <Img src={'./images/whiteTriangle.svg'} />
                )}
              </SelectionWrapper>
            </SelectionShadowWrapper>
          </SubTitleSelectionWrapper>
        );
      })}
    </FlexWrapper>
  );
}

export default CurrentEncloseAndBurningTemp;

const FlexWrapper = styled.div`
  /* width: 562px;
  height: 238px; */
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const SubTitleSelectionWrapper = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const SubTitleWrapper = styled.div`
  width: 252px;
  height: 32px;

  background: ${({ tesSwitch, index }) =>
    !tesSwitch && index === 1 ? '#3B3B3B' : '#233a54'};
  background: ${({ essSwitch }) => essSwitch && '#233a54'};
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter}
`;

const SubTitleWrapper2 = styled.div`
  width: 246px;
  height: 26px;

  border: 1px solid
    ${({ tesSwitch, index }) =>
      !tesSwitch && index === 1 ? '#808080' : '#142033'};
  border: ${({ essSwitch }) => essSwitch && '1px solid #142033'};
  border-radius: 13px;
  opacity: 1;
  ${flexboxCenter}
`;

const SubTitle = styled.div`
  font-size: var(--space2);
  text-transform: uppercase;
  color: ${({ color, essSwitch, tesSwitch }) =>
    !essSwitch
      ? color === 0
        ? '#FF7800'
        : !tesSwitch && color === 1
        ? '#fff'
        : color === 1
        ? '#95FF45'
        : '#fff'
      : color === 0
      ? '#83ffff'
      : '#ffff'};
`;

const SelectionShadowWrapper = styled.div`
  width: 252px;
  height: 51px;
  margin-top: 4px;

  background: #142033;

  border-radius: 31px;
  opacity: 1;
  ${flexboxCenter}
`;

const SelectionWrapper = styled.div`
  width: 248px;
  height: 47px;

  background: ${({ tesSwitch, index }) =>
    tesSwitch
      ? 'transparent linear-gradient(180deg, #233a54 0%, #060d19 100%)'
      : index === 1
      ? 'transparent linear-gradient(180deg, #565656 0%, #1D1D1D 100%)'
      : 'transparent linear-gradient(180deg, #233a54 0%, #060d19 100%)'};
  background: ${({ essSwitch }) => essSwitch && '#233a54'};
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

  background: ${({ tesSwitch, index }) =>
    tesSwitch ? '#233a54' : index === 1 && '#3B3B3B'};
  background: ${({ essSwitch }) => essSwitch && '#233a54'};
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 22px;
  opacity: 1;
  ${flexboxCenter}
`;

const Selection = styled.div`
  font-size: var(--font-size7);
  text-transform: uppercase;
  color: ${({ tesSwitch, index }) =>
    tesSwitch ? '#fff' : index === 1 && '#808080'};
  color: ${({ essSwitch }) => essSwitch && '#fff'};
`;

const Img = styled.img`
  margin-top: 6px;
  margin-right: 4px;
`;
