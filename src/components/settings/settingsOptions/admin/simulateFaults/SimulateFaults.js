import styled, { css } from 'styled-components';
import {
  flexboxCenter,
  justifyContentSpaceEvenly,
  justifyContentSpaceBetween,
  alignItemsFlexStart,
} from '../../../../../styles/commonStyles';
import ButtonForceStop from './ButtonForceStop';

function SimulateFaults({ titles, index, color }) {
  // Ess/Tes: Sf: each fault's title.
  const essTesSfTitles = [
    'ground fault',
    'ssr fault',
    'thermocouple failure',
    'ssr - load exceed',
  ];

  // Tgs: Sf: each fault's title.
  const tgsSfTitles = ['timeout fault', 'hp/lp fault', 'bms fault'];

  // buttons: force and stop
  const buttonNames = ['force', 'stop'];

  // the slice is called settingsOfAdminSlice.js
  return (
    <>
      {index === 0 && (
        <WrapperEssSf>
          <WrapperEssSf1 color={color}>
            <WrapperSfTitle color={color}>
              <Title>{titles}</Title>
            </WrapperSfTitle>
            <WrapperSfContents color={color}>
              {/* each content mapped. this one is mapped 4 times */}
              {essTesSfTitles?.map((value, ind) => {
                return (
                  <WrapperSfIndividualContent
                    color={color}
                    key={Math.floor(Math.random() * 1555555)}
                  >
                    <SmallTitle>{value}</SmallTitle>
                    <WrapperButtons>
                      {/* buttons mapped for force and stop */}
                      {buttonNames?.map((value, bIndex) => {
                        return (
                          <WrapperButtonForceStop
                            key={Math.floor(Math.random() * 1555555)}
                          >
                            <ButtonForceStop
                              name={value}
                              color={color}
                              indexButton={bIndex}
                              indexOfFault={ind}
                            />
                          </WrapperButtonForceStop>
                        );
                      })}
                    </WrapperButtons>
                  </WrapperSfIndividualContent>
                );
              })}
            </WrapperSfContents>
          </WrapperEssSf1>
        </WrapperEssSf>
      )}

      {index === 1 && (
        <WrapperEssSf>
          <WrapperEssSf1 color={color}>
            <WrapperSfTitle color={color}>
              <Title>{titles}</Title>
            </WrapperSfTitle>
            <WrapperSfContents color={color}>
              {/* each content mapped. this one is mapped 3 times */}
              {tgsSfTitles?.map((value, ind) => {
                return (
                  <WrapperSfIndividualContent
                    color={color}
                    key={Math.floor(Math.random() * 1555555)}
                  >
                    <SmallTitle color={color}>{value}</SmallTitle>
                    <WrapperButtons>
                      {/* buttons mapped for force and stop */}
                      {buttonNames?.map((value, bIndex) => {
                        return (
                          <WrapperButtonForceStop
                            key={Math.floor(Math.random() * 1555555)}
                          >
                            <ButtonForceStop
                              name={value}
                              color={color}
                              indexButton={bIndex}
                              indexOfFault={ind}
                            />
                          </WrapperButtonForceStop>
                        );
                      })}
                    </WrapperButtons>
                  </WrapperSfIndividualContent>
                );
              })}
            </WrapperSfContents>
          </WrapperEssSf1>
        </WrapperEssSf>
      )}

      {index === 2 && (
        <WrapperEssSf>
          <WrapperEssSf1 color={color}>
            <WrapperSfTitle color={color}>
              <Title>{titles}</Title>
            </WrapperSfTitle>
            <WrapperSfContents color={color}>
              {/* each content mapped. this one is mapped 4 times */}
              {essTesSfTitles?.map((value, ind) => {
                return (
                  <WrapperSfIndividualContent
                    color={color}
                    key={Math.floor(Math.random() * 1555555)}
                  >
                    <SmallTitle>{value}</SmallTitle>
                    <WrapperButtons>
                      {/* buttons mapped for force and stop */}
                      {buttonNames?.map((value, bIndex) => {
                        return (
                          <WrapperButtonForceStop
                            key={Math.floor(Math.random() * 1555555)}
                          >
                            <ButtonForceStop
                              name={value}
                              color={color}
                              indexButton={bIndex}
                              indexOfFault={ind}
                            />
                          </WrapperButtonForceStop>
                        );
                      })}
                    </WrapperButtons>
                  </WrapperSfIndividualContent>
                );
              })}
            </WrapperSfContents>
          </WrapperEssSf1>
        </WrapperEssSf>
      )}
    </>
  );
}

export default SimulateFaults;

const WrapperEssSf = styled.div`
  width: 548px;
  height: 226px;
  /* margin-bottom: 6px; */

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter};
`;

const WrapperEssSf1 = styled.div`
  width: 544px;
  height: 222px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  border: 0.5px solid #142033;

  ${({ color }) =>
    color &&
    css`
      background: transparent linear-gradient(180deg, #565656 0%, #1d1d1d 100%)
        0% 0% no-repeat padding-box;
      border: 1px solid #142033;
    `}

  box-shadow: 0px 0px 2px #000000;
  border-radius: 9px;
  opacity: 1;
  ${justifyContentSpaceEvenly};
  flex-direction: column;
  column-gap: 4px;
`;

const WrapperSfTitle = styled.div`
  width: 534px;
  height: 32px;

  background: #233a54 0% 0% no-repeat padding-box;

  ${({ color }) =>
    color &&
    css`
      background: #3b3b3b 0% 0% no-repeat padding-box;
    `};
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter};
`;

const Title = styled.div`
  text-align: center;
  font: normal normal 800 10px/10px Orbitron;
  letter-spacing: 1px;
  color: #ffffff;
  display: inline-block;
  opacity: 1;
`;

const WrapperSfContents = styled.div`
  width: 534px;
  height: auto;
  padding-top: 6px;
  padding-bottom: 6px;

  background: #233a54 0% 0% no-repeat padding-box;
  ${({ color }) =>
    color &&
    css`
      background: #3b3b3b;
    `}
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 20px;
  opacity: 1;
  ${justifyContentSpaceEvenly};
  flex-direction: column;
  gap: 6px;
`;

const WrapperSfIndividualContent = styled.div`
  width: 528px;
  height: 34px;

  border: 1px solid #ffffff;
  border-radius: 17px;
  ${({ color }) =>
    color &&
    css`
      border: 1px solid #808080;
    `}
  opacity: 1;
  ${justifyContentSpaceBetween};
`;

const SmallTitle = styled.div`
  margin-left: 10px;
  text-align: left;
  font: normal normal 800 9px/9px Orbitron;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

const WrapperButtons = styled.div`
  ${flexboxCenter};
  margin-right: 2px;
`;

const WrapperButtonForceStop = styled.div`
  width: auto;
  height: auto;
  &:first-child {
    margin-right: 6px;
  }
  ${flexboxCenter};
`;
