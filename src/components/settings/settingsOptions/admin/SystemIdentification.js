import { useState } from 'react';
import styled, { css } from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
import SysIdRadioBox from './SysIdRadioBox';

const SystemIdentification = () => {
  const initialInputState = {
    locationName: null,
    switchName: null,
    heatingSystem: null,
    application: null,
    switchSize: null,
    ssrRating: null,
    sysId: null,
  };

  const initialSelectBox = {
    heatingSystem: false,
    switchSize: false,
    ssrRating: false,
  };

  const [inputData, setInputData] = useState(initialInputState);
  const [focusedName, setFocusedName] = useState(null);
  const [activateKeyboard, setActivateKeyboard] = useState(false);
  const [displaySelectBox, setDisplaySelectBox] = useState(initialSelectBox);
  const [isChecked, setIsChecked] = useState(null);

  const heatingSysOptions = [
    'ess - electric switch system',
    'tgs - typhoon gas system',
    'tes - typhoon electric system',
  ];
  const switchSizeOptions = ['# 10', '# 15', '# 20', '# 50', '# 100'];
  const ssrRatingOptions = [
    '10 amps',
    '15 amps',
    '20 amps',
    '30 amps',
    '40 amps',
    '50 amps',
    '70 amps',
    '100 amps',
    'add ssr rating',
  ];

  const buttonNames = ['edit system', 'save'];

  const handleButtonClick = (name) => {
    if (name === 'save') {
      // do send all input data
      console.log('save');
    } else {
      // do send all input data
      console.log('edit');
    }
  };

  const handleOnChange = (input) => {
    const copyInput = { ...inputData };
    copyInput[focusedName] = input;
    setInputData(copyInput);
  };

  // Handler for Select box
  const handleSelector = (selected) => {
    if (selected === 'add ssr rating') {
    } else {
      setIsChecked(selected);
      const copyInput = { ...inputData };
      copyInput[focusedName] = selected;
      setInputData(copyInput);
    }
    setDisplaySelectBox(initialSelectBox);
  };

  const handleDisplaySelectBox = (name) => {
    setFocusedName(name);
    // To open radio box
    const currentState = displaySelectBox[name];
    const copyInput = { ...initialSelectBox };
    copyInput[name] = !currentState;
    setDisplaySelectBox(copyInput);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <TitleWrapper>
          <TitleTop>system identification</TitleTop>
        </TitleWrapper>
        {/* input location name and select heating system */}
        <Section>
          <ComponentWrapperHole>
            <ComponentWrapper>
              <ContentSpan>
                location <br></br>name :
              </ContentSpan>
              <ContentInput
                type='text'
                onChange={(event) => handleOnChange(event.target.value)}
                onClick={() => {
                  setActivateKeyboard(true);
                  setFocusedName('locationName');
                }}
              />
            </ComponentWrapper>
          </ComponentWrapperHole>

          <ComponentWrapperHole
            displayRadioBox={displaySelectBox.heatingSystem}
          >
            <ComponentWrapper displayRadioBox={displaySelectBox.heatingSystem}>
              <TitleAndButtonWrapper>
                <DisplaySelectedOne>
                  {inputData.heatingSystem
                    ? inputData.heatingSystem
                    : `select heating system`}
                </DisplaySelectedOne>
                <SelectButton
                  onClick={() => {
                    // Open select box
                    handleDisplaySelectBox('heatingSystem');
                  }}
                >
                  <img src={'/images/sys-id-select-btn.svg'} />
                </SelectButton>
              </TitleAndButtonWrapper>

              {displaySelectBox.heatingSystem && (
                <RadioBoxWrapper>
                  <RadioBoxContentWrapper>
                    {heatingSysOptions.map((name, index) => (
                      <SysIdRadioBox
                        data={name}
                        isChecked={isChecked}
                        selectHandler={handleSelector}
                      />
                    ))}
                  </RadioBoxContentWrapper>
                </RadioBoxWrapper>
              )}
            </ComponentWrapper>
          </ComponentWrapperHole>
        </Section>
        {/* input switch name and input application */}
        <Section>
          <ComponentWrapperHole>
            <ComponentWrapper>
              <ContentSpan>
                switch <br></br>name :
              </ContentSpan>
              <ContentInput
                type='text'
                onChange={(event) => handleOnChange(event.target.value)}
                onClick={() => {
                  setActivateKeyboard(true);
                  setFocusedName('switchName');
                }}
              />
            </ComponentWrapper>
          </ComponentWrapperHole>

          <ComponentWrapperHole>
            <ComponentWrapper>
              <ContentSpan>application :</ContentSpan>
              <ContentInput
                type='text'
                onChange={(event) => handleOnChange(event.target.value)}
                onClick={() => {
                  setActivateKeyboard(true);
                  setFocusedName('application');
                }}
              />
            </ComponentWrapper>
          </ComponentWrapperHole>
        </Section>

        {/* select switch size and select ssr rating */}
        <Section>
          <ComponentWrapperHole displayRadioBox={displaySelectBox.switchSize}>
            <ComponentWrapper displayRadioBox={displaySelectBox.switchSize}>
              <TitleAndButtonWrapper>
                <DisplaySelectedOne>
                  {inputData.switchSize
                    ? inputData.switchSize
                    : `select switch size`}
                </DisplaySelectedOne>
                <SelectButton
                  onClick={() => handleDisplaySelectBox('switchSize')}
                >
                  <img src={'/images/sys-id-select-btn.svg'} />
                </SelectButton>
              </TitleAndButtonWrapper>

              {displaySelectBox.switchSize && (
                <RadioBoxWrapper>
                  <RadioBoxContentWrapper>
                    {switchSizeOptions.map((name, index) => (
                      <SysIdRadioBox
                        data={name}
                        isChecked={isChecked}
                        selectHandler={handleSelector}
                      />
                    ))}
                  </RadioBoxContentWrapper>
                </RadioBoxWrapper>
              )}
            </ComponentWrapper>
          </ComponentWrapperHole>

          <ComponentWrapperHole displayRadioBox={displaySelectBox.ssrRating}>
            <ComponentWrapper displayRadioBox={displaySelectBox.ssrRating}>
              <TitleAndButtonWrapper>
                <DisplaySelectedOne>
                  {inputData.ssrRating
                    ? inputData.ssrRating
                    : `select ssr rating`}
                </DisplaySelectedOne>
                <SelectButton
                  onClick={() => handleDisplaySelectBox('ssrRating')}
                >
                  <img src={'/images/sys-id-select-btn.svg'} />
                </SelectButton>
              </TitleAndButtonWrapper>

              {displaySelectBox.ssrRating && (
                <RadioBoxWrapper>
                  <RadioBoxContentWrapper>
                    {ssrRatingOptions.map((name, index) => (
                      <SysIdRadioBox
                        data={name}
                        isChecked={isChecked}
                        selectHandler={handleSelector}
                      />
                    ))}
                  </RadioBoxContentWrapper>
                </RadioBoxWrapper>
              )}
            </ComponentWrapper>
          </ComponentWrapperHole>
        </Section>
        {/* input system id */}
        <Section>
          <ComponentWrapperHole>
            <ComponentWrapper>
              <ContentSpan>system i.d. :</ContentSpan>
              <ContentInput
                type='text'
                onChange={(event) => handleOnChange(event.target.value)}
                onClick={() => {
                  setActivateKeyboard(true);
                  setFocusedName('sysId');
                }}
              />
            </ComponentWrapper>
          </ComponentWrapperHole>
        </Section>

        <Section>
          <ButtonGroupWrapper>
            {buttonNames.map((name) => (
              <ButtonWrapper onClick={() => handleButtonClick(name)}>
                <ButtonHole>
                  <ButtonTop>{name}</ButtonTop>
                </ButtonHole>
              </ButtonWrapper>
            ))}
          </ButtonGroupWrapper>
        </Section>
      </InnerWrapper>
    </Wrapper>
  );
};

export default SystemIdentification;

const Wrapper = styled.div`
  ${flexboxCenter}

  width: 548px;
  height: 206px;
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 11px;
`;
const InnerWrapper = styled.div`
  width: 544px;
  height: 201px;
  background: transparent linear-gradient(90deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff24, 0px 0px 2px #000000;
  border: 0.5px solid #000000;
  border-radius: 9px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 0.15rem 0;
`;
const TitleWrapper = styled.div`
  ${flexboxCenter}

  width: 539px;
  height: 32px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
`;
const TitleTop = styled.div`
  ${flexboxCenter}
  width: 533px;
  height: 26px;
  border: 1px solid #142033;
  border-radius: 13px;

  font-size: 10px;

  text-transform: uppercase;
`;

const Section = styled.div`
  width: 539px;
  display: flex;

  align-items: center;
  justify-content: space-between;

  &:last-child {
    justify-content: flex-end;
  }
`;

const ComponentWrapperHole = styled.div`
  width: 260px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 13px;
  ${flexboxCenter}

  ${(p) =>
    p.displayRadioBox &&
    css`
      position: relative;
    `}
`;

const ComponentWrapper = styled.div`
  width: 258px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 12px;
  display: flex;
  ${(p) =>
    p.displayRadioBox
      ? css`
          flex-direction: column;
          position: absolute;
          z-index: 100;
          top: -0.75rem;
          padding-top: 0.1rem;
        `
      : css`
          align-items: center;
          justify-content: space-between;
          height: 24px;
        `}
`;

const ContentSpan = styled.span`
  font-size: 8px;
  text-transform: uppercase;
  text-align: left;

  padding-left: 0.4rem;
`;

const ContentInput = styled.input`
  font-size: 8px;
  text-transform: uppercase;
  text-align: center;

  width: 177px;
  height: 20px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 10px;

  margin-right: 0.1rem;
`;

const DisplaySelectedOne = styled.div`
  width: 228px;
  height: 20px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;

  text-transform: uppercase;
  text-align: left;

  font-size: 8px;
  display: flex;
  align-items: center;
  /* for text */
  padding-left: 0.3rem;
  /* for gap with its parents */
  margin-left: 0.1rem;
`;

const TitleAndButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectButton = styled.button`
  ${flexboxCenter}

  margin-right: 0.4rem;
  margin-top: 0.2rem;
`;

const ButtonGroupWrapper = styled.div`
  width: 260px;
  height: 26px;
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 0.1rem;
`;
const ButtonWrapper = styled.button`
  width: 124px;
  height: 24px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;

  ${flexboxCenter}
`;
const ButtonHole = styled.div`
  ${flexboxCenter}

  width: 116px;
  height: 16px;
  background: #142033 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 18px;
`;
const ButtonTop = styled.div`
  ${flexboxCenter}

  width: 114px;
  height: 14px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;

  ${flexboxCenter}
  font-size: 10px;
  text-transform: uppercase;
`;

const RadioBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 0.1rem 0;
`;

const RadioBoxContentWrapper = styled.ul`
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 11px;
  width: 254px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
