import { useContext } from 'react';
import { useRef } from 'react';
import styled, { css } from 'styled-components';
import { SettingsContext } from '../../../../context/ContextOfSettings';
import { flexboxCenter } from '../../../../styles/commonStyles';

function SnowFactor({
  tgsTes,
  ess,
  tesSwitch,
  essSwitch,
  editState,
  snowSensorState,
  tesSnowSensorState,
  metricImperialToggle,
}) {
  // useContext

  const { setEssSnowSensor, setTgsSnowSensor, setTesSnowSensor } =
    useContext(SettingsContext);

  return (
    <>
      {essSwitch ? (
        <FlexWrapper>
          <WrapperTgsTesSnowSensor>
            <TitleContainer>
              <Title>{ess}</Title>
            </TitleContainer>

            <ValueContainer>
              <SmallContainer essSwitch={essSwitch}>
                <Temperature>
                  {editState && (
                    <Input
                      type='number'
                      placeholder='enter temperature'
                      value={snowSensorState}
                      onChange={(e) => {
                        setEssSnowSensor(e.target.value);
                      }}
                    ></Input>
                  )}
                  ° c
                </Temperature>
              </SmallContainer>
            </ValueContainer>
          </WrapperTgsTesSnowSensor>
        </FlexWrapper>
      ) : (
        tgsTes?.map((value, index) => {
          return (
            <div key={index}>
              <FlexWrapper>
                <WrapperTgsTesSnowSensor
                  gradient={index === 0 ? true : index === 1 && false}
                  index={index}
                  tesSwitch={tesSwitch}
                >
                  <TitleContainer index={index} tesSwitch={tesSwitch}>
                    <Title>{value}</Title>
                  </TitleContainer>

                  <ValueContainer index={index} tesSwitch={tesSwitch}>
                    <SmallContainer index={index} tesSwitch={tesSwitch}>
                      <Temperature>
                        {editState && index === 0 && !tesSwitch && (
                          <Input
                            type='number'
                            placeholder='enter temperature'
                            index={index}
                            tesSwitch={tesSwitch}
                            value={tesSnowSensorState}
                            onChange={(e) => {
                              setTgsSnowSensor(e.target.value);
                            }}
                          ></Input>
                        )}
                        {editState &&
                          tesSwitch &&
                          (index === 0 || index === 1) && (
                            <Input
                              type='number'
                              placeholder='enter temperature'
                              index={index}
                              tesSwitch={tesSwitch}
                              value={
                                index === 0
                                  ? snowSensorState
                                  : tesSnowSensorState
                              }
                              onChange={(e) => {
                                index === 0
                                  ? setTgsSnowSensor(e.target.value)
                                  : setTesSnowSensor(e.target.value);
                              }}
                            ></Input>
                          )}
                        {metricImperialToggle === 0 ? '°c' : '°F'}
                      </Temperature>
                    </SmallContainer>
                  </ValueContainer>
                </WrapperTgsTesSnowSensor>
              </FlexWrapper>
            </div>
          );
        })
      )}
    </>
  );
}

export default SnowFactor;

const FlexWrapper = styled.div`
  width: 286px;
  height: 94px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const WrapperTgsTesSnowSensor = styled.div`
  width: 286px;
  height: 94px;
  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-evenly;
  box-sizing: border-box;
  border: 0.5px solid #000000;
  border-radius: 12px;

  background: -webkit-linear-gradient(
    ${({ gradient }) => (gradient ? 180 : 360)}deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  ${(p) =>
    p.tesSwitch ||
    (p.index === 1 &&
      css`
        background: -webkit-linear-gradient(180deg, #565656 0%, #1d1d1d 100%);
      `)}

  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
`;

const TitleContainer = styled.div`
  width: 278px;
  height: 32px;

  background: #233a54;
  ${(p) =>
    p.tesSwitch ||
    (p.index === 1 &&
      css`
        background: #3b3b3b;
      `)};
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

  background: #233a54;
  ${(p) =>
    p.tesSwitch ||
    (p.index === 1 &&
      css`
        background: #3b3b3b;
      `)};
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 21px;
  opacity: 1;
  ${flexboxCenter};
`;

const SmallContainer = styled.div`
  width: 269px;
  height: 32px;

  border: ${({ tesSwitch, index }) =>
    tesSwitch
      ? '1px solid #142033'
      : tesSwitch || (index === 1 && '1px solid #808080')};
  ${({ essSwitch }) => essSwitch && 'border: 1px solid #142033'};

  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter}
`;

const Temperature = styled.span`
  font-size: var(--space2);
  margin-right: var(--font-size6);
  text-transform: uppercase;
`;

const Input = styled.input`
  width: auto;
  height: auto;

  font-size: var(--space2);
  background-color: ${({ tesSwitch, index }) =>
    tesSwitch
      ? '#233a54'
      : (!tesSwitch && index === 1 && '#3b3b3b') || '#233a54'};
  border-radius: 21px;
  opacity: 1;
  text-transform: uppercase;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
