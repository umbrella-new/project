import styled, { css } from 'styled-components';
import {
  flexboxCenter,
  justifyContentSpaceAround,
  justifyContentSpaceBetween,
  justifyContentSpaceEvenly,
} from '../../../../../styles/commonStyles';
import { useState } from 'react';
import SelectBox from './SelectBox';
import { useSelector } from 'react-redux';
import { selectSelectSystemUOS } from '../../../../../store/slices/settingsSelectSystemUOSSlice';
import { useEffect } from 'react';

const NewSystemIdentification = () => {
  const [select, setSelect] = useState({});
  const [openSelectBox, setOpenSelectBox] = useState(false);
  const [data, setData] = useState([]);
  const [selectedUOSName, setSelectedUOSName] = useState('');
  const [selectedUOSInfo, setSelectedUOSInfo] = useState([]);
  const [selectedSwitchesInfo, setSelectedSwitchesInfo] = useState([]);
  const [openHeatLoadConfig, setOpenHeatLoadConfig] = useState(false);
  const [heatLoadConfigData, setHeatLoadConfigData] = useState([]);

  // redux
  const allLocations = useSelector(selectSelectSystemUOS);

  useEffect(() => {
    // format the data that I need to render at jsx
    if (allLocations) {
      const filteredLocation = allLocations.locations.map((location, idx) => {
        const sortedArr = [];
        location.switchInfo.forEach((el, switchIdx) => {
          const filteredSwitchesArr = [];
          location.switchInfo.forEach((switchEl) => {
            const UOSNum =
              switchIdx < 10 ? '0' + switchIdx : toString(switchEl);
            if (switchEl.UOS === UOSNum) {
              filteredSwitchesArr.push(switchEl);
            }
          });
          if (filteredSwitchesArr.length > 0) {
            sortedArr.push(filteredSwitchesArr);
          }
        });
        return sortedArr;
      });
      setData(filteredLocation);
    }
  }, []);

  // handle the assign button of select box of assign UOS Control Panel Identification
  const handleAssignButton = (select) => {
    handleSelectBox();
    setSelectedUOSInfo(allLocations.locations[select?.locationIdx]);
    setSelectedSwitchesInfo(data[select?.locationIdx][select?.UOSIdx]);
    setSelectedUOSName(select.select);
    handleHeatLoadConfigDataFormat(select);
  };

  const handleHeatLoadConfigDataFormat = (select) => {
    const sortedSSRArr = Array.from(
      { length: allLocations.locations[select?.locationIdx].numOfSSR },
      (_, i) => []
    );

    data[select?.locationIdx][select?.UOSIdx].forEach((UOS) => {
      UOS.selectedSSR.forEach((SSR, SSRIdx) => {
        const objKey = Object.keys(SSR)[0];
        let modifiedObj = {
          ...SSR,
          switchName: UOS.switchName,
        };

        if ('ssr' + (Number(SSRIdx) + 1) === objKey) {
          sortedSSRArr[SSRIdx].push(modifiedObj);
        }
      });
    });
    setHeatLoadConfigData(sortedSSRArr);
  };

  // open and closes the select box of assign UOS Control Panel Identification
  const handleSelectBox = () => {
    setOpenSelectBox(!openSelectBox);
  };

  const handleHeatLoadConfigButton = () => {
    if (selectedUOSName) {
      setOpenHeatLoadConfig(!openHeatLoadConfig);
    }
  };

  console.log(heatLoadConfigData, '-------HeatLoadConfigData');

  return (
    <BaseLayer isFirstLayer={true}>
      <Wrapper1>
        <TitleTop>system identification</TitleTop>
        <BaseLayer>
          <Wrapper2>
            {/* select box of UOS panel */}
            <SelectUOSWrapper>
              <SelectBoxLabel>
                assign uos control panel identification
              </SelectBoxLabel>
              <InputBaseLayer>
                <InputWrapper>
                  <SelectBoxDisplay>
                    {selectedUOSName && selectedUOSName}
                  </SelectBoxDisplay>
                  <Icon
                    src='/images/arrow-down.svg'
                    onClick={handleSelectBox}
                  />
                  {openSelectBox && (
                    <SelectBoxWrapper>
                      <SelectBox
                        select={select}
                        setSelect={setSelect}
                        data={data}
                        handleAssignButton={handleAssignButton}
                        handleSelectBox={handleSelectBox}
                      />
                    </SelectBoxWrapper>
                  )}
                </InputWrapper>
              </InputBaseLayer>
            </SelectUOSWrapper>

            {/* location name, civic address */}
            <SubWrapper isFirstRow={true}>
              <DisplayLabel isLocationName={true}>location name</DisplayLabel>
              <Display isFirstRow={true}>{selectedUOSInfo?.location}</Display>
              <DisplayLabel isCivicAddress={true}>civic address</DisplayLabel>
              <Display isFirstRow={true}>{selectedUOSInfo?.address}</Display>
            </SubWrapper>

            {/* Num of UOS panel, SSR Qty, Num of switches */}
            <SubWrapper isSecondRow={true}>
              <DisplayLabel isSecondRow={true}>
                number of <br />
                uos panels
              </DisplayLabel>
              <Display isSecondRow={true}>{selectedUOSInfo?.numOfUOS}</Display>
              <DisplayLabel isSecondRow={true}>
                ssr <br /> qty.
              </DisplayLabel>
              <Display isSecondRow={true}>{selectedUOSInfo?.numOfSSR}</Display>
              <DisplayLabel isSecondRow={true}>
                number of <br /> switches
              </DisplayLabel>
              <Display isSecondRow={true}>
                {selectedUOSInfo?.switchesNum}
              </Display>
            </SubWrapper>

            {/* subtitles of the info box of each switch */}
            <SubWrapper isThirdRow={true}>
              {/* all the labels */}
              <DisplayLabelWrapper>
                <DisplayLabel isUOS={true} isThirdRow={true}>
                  uos
                </DisplayLabel>
                <DisplayLabel isSwitchName={true} isThirdRow={true}>
                  switch <br /> name
                </DisplayLabel>
                <DisplayLabel isSwitchSize={true} isThirdRow={true}>
                  switch <br /> size
                </DisplayLabel>
                <DisplayLabel isSysID={true} isThirdRow={true}>
                  system i.d.
                </DisplayLabel>
                <DisplayLabel isHeatingSys={true} isThirdRow={true}>
                  heating <br /> system
                </DisplayLabel>
                <DisplayLabel isGasType={true} isThirdRow={true}>
                  gas <br /> type
                </DisplayLabel>
                <DisplayLabel isSSRQty={true} isThirdRow={true}>
                  ssr <br /> qty.
                </DisplayLabel>
                <DisplayLabel isSSRRating={true} isThirdRow={true}>
                  ssr <br /> rating
                </DisplayLabel>
                <DisplayLabel isAppli={true} isThirdRow={true}>
                  application
                </DisplayLabel>
              </DisplayLabelWrapper>

              {/* all the display info of each switch */}
              <InfoBaseLayer>
                <InfoWrapper>
                  <Flex isRow={true}>
                    <Display isUOS={true}>
                      {selectedSwitchesInfo && selectedSwitchesInfo[0]?.UOS}
                    </Display>
                    <Flex isColumn={true}>
                      {selectedSwitchesInfo.length > 0 ? (
                        selectedSwitchesInfo?.map((switchData, switchIdx) => {
                          return (
                            <InfoBaseLayer isSecondLayer={true}>
                              <InfoWrapper isSecondLayer={true} key={switchIdx}>
                                <Display isSwitchName={true}>
                                  <P> {switchData.switchName}</P>
                                </Display>
                                <Display isSwitchSize={true}>
                                  {switchData.switchSize}
                                </Display>
                                <Display isSysID={true}>
                                  {switchData.sysId}
                                </Display>
                                <Display isHeatingSysAndSSRRating={true}>
                                  {switchData.heatingSys}
                                </Display>

                                <Display
                                  isGasTypeAndSSRQty={true}
                                  disabled={
                                    switchData.heatingSys === 'ess' ||
                                    switchData.heatingSys === 'tes'
                                  }
                                >
                                  {switchData.gasType}
                                </Display>
                                <Display isGasTypeAndSSRQty={true}>
                                  {switchData.selectedSSR.length}
                                </Display>
                                <Display isHeatingSysAndSSRRating={true}>
                                  {switchData.heatingSys}
                                </Display>
                                <Display isAppli={true}>
                                  {switchData.application}
                                </Display>
                              </InfoWrapper>
                            </InfoBaseLayer>
                          );
                        })
                      ) : (
                        <InfoBaseLayer isSecondLayer={true}>
                          <InfoWrapper isSecondLayer={true}>
                            <Display isSwitchName={true}></Display>
                            <Display isSwitchSize={true}></Display>
                            <Display isSysID={true}></Display>
                            <Display isHeatingSysAndSSRRating={true}></Display>
                            <Display isGasTypeAndSSRQty={true}></Display>
                            <Display isGasTypeAndSSRQty={true}></Display>
                            <Display isHeatingSysAndSSRRating={true}></Display>
                            <Display isAppli={true}></Display>
                          </InfoWrapper>
                        </InfoBaseLayer>
                      )}
                    </Flex>
                  </Flex>
                  {/* Heat Load Configuration */}
                  {openHeatLoadConfig && (
                    <>
                      <Title>heat load configuration</Title>
                      <HeatLoadConfigWrapper>
                        {heatLoadConfigData.map((SSR, SSRIdx) => {
                          const isExisting = SSR.length > 0;
                          const SSRTitle = isExisting
                            ? Object.keys(SSR[0])[0]
                            : 'ssr' + (Number(SSRIdx) + 1);
                          return (
                            <div key={SSRIdx}>
                              {/* labels */}
                              <DisplayLabelWrapper isSecondRow={true}>
                                <DisplaySSRLabel>
                                  <SSR>{SSRTitle}</SSR>
                                  <TCWrapper>
                                    <TC>
                                      {isExisting &&
                                        SSR[0][SSRTitle].thermoCouple}
                                    </TC>
                                  </TCWrapper>
                                </DisplaySSRLabel>
                                <DisplayLabel isPartNum={true}>
                                  part number
                                </DisplayLabel>
                                <DisplayLabel isCurrent={true}>
                                  current (a)
                                </DisplayLabel>
                                <DisplayLabel isWattage={true}>
                                  wattage (w)
                                </DisplayLabel>
                                <DisplayLabel isVoltage={true}>
                                  voltage (v)
                                </DisplayLabel>
                                <DisplayLabel isLength={true}>
                                  length (m)
                                </DisplayLabel>
                              </DisplayLabelWrapper>
                              {SSR.map((el, elIdx) => {
                                return (
                                  <div key={elIdx * 14444}>
                                    {/* switch Info */}
                                    <SSRInfoWrapper>
                                      <IndivSSRInfo>
                                        <Display isSSRSwitchName={true}>
                                          {isExisting && el.switchName}
                                        </Display>
                                        <Display isPartNum={true}>
                                          {isExisting &&
                                            el[SSRTitle].specs.partNumber}
                                        </Display>
                                        <Display isCurrent={true}>
                                          {isExisting &&
                                            el[SSRTitle].specs.current}
                                        </Display>
                                        <Display isWattage={true}>
                                          {isExisting &&
                                            el[SSRTitle].specs.wattage}
                                        </Display>
                                        <Display isVoltage={true}>
                                          {isExisting &&
                                            el[SSRTitle].specs.voltage}
                                        </Display>
                                        <Display isLength={true}>
                                          {isExisting &&
                                            el[SSRTitle].specs.lengths}
                                        </Display>
                                      </IndivSSRInfo>
                                    </SSRInfoWrapper>

                                    {/* name of UOS */}
                                    <DescriptionWrapper>
                                      <DisplayLabel isDescription={true}>
                                        description
                                      </DisplayLabel>
                                      <Display isDescription={true}>
                                        {isExisting &&
                                          `${el.elementName} -
                                            ${el.partNumber}/
                                            ${el.current}/${el.wattage}/${el.voltage}/${el.lengths}`}
                                      </Display>
                                    </DescriptionWrapper>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}
                      </HeatLoadConfigWrapper>
                    </>
                  )}

                  {/* display the full name of UOS machine, the heat load button */}
                  <SubWrapper isFifthRow={true}>
                    <DisplayUOSName>{selectedUOSName}</DisplayUOSName>
                    <ButtonWrapper isHeatLoad={true}>
                      <Button
                        isHeatLoad={true}
                        onClick={handleHeatLoadConfigButton}
                      >
                        <ButtonIndent isHeatLoad={true}>
                          <ButtonTop isHeatLoad={true}>
                            {openHeatLoadConfig
                              ? 'close'
                              : 'heat load configuration'}
                          </ButtonTop>
                        </ButtonIndent>
                      </Button>
                    </ButtonWrapper>
                  </SubWrapper>
                </InfoWrapper>
              </InfoBaseLayer>
            </SubWrapper>

            {/* save button */}
            <SubWrapper isFourthRow={true}>
              <ButtonWrapper>
                <Button>
                  <ButtonIndent isFirstLayer={true}>
                    <ButtonTop isFirstLayer={true}>
                      <ButtonIndent>
                        <ButtonTop>save</ButtonTop>
                      </ButtonIndent>
                    </ButtonTop>
                  </ButtonIndent>
                </Button>
              </ButtonWrapper>
            </SubWrapper>
          </Wrapper2>
        </BaseLayer>
      </Wrapper1>
    </BaseLayer>
  );
};

export default NewSystemIdentification;

const BaseLayer = styled.div`
  width: auto;
  height: auto;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;

  ${({ isFirstLayer }) =>
    isFirstLayer
      ? css`
          border-radius: 11px;
          padding: 2px;
        `
      : css`
          border-radius: 8px;
          padding: 1px;
        `}
`;

const Wrapper1 = styled.div`
  width: 544px;
  min-height: 262px;

  background: transparent linear-gradient(89deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat;
  box-shadow: inset 0px 1px 1px #ffffff24, 0px 0px 2px #000000;
  border: 1px solid #000000;
  border-radius: 9px;

  ${justifyContentSpaceAround}
  flex-direction: column;
  gap: 4px;
`;

const TitleTop = styled.div`
  width: 539px;
  height: 32px;
  margin-top: 6px;

  font-size: 10px;

  background: #233a54;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;

  ${flexboxCenter}
`;

const Wrapper2 = styled.div`
  width: 538px;
  min-height: 214px;
  padding-top: 6px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 7px;

  ${justifyContentSpaceAround}
  flex-direction: column;
`;

const SelectUOSWrapper = styled.div`
  width: 100%;
  margin-bottom: 6px;
  ${justifyContentSpaceAround}
`;

const SelectBoxLabel = styled.div`
  width: 154px;
  height: 22px;

  font-size: 10px;
  letter-spacing: 1px;
  color: #ffffff;
`;

const InputBaseLayer = styled.div`
  width: 366px;
  height: 24px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 12px;

  ${flexboxCenter}
`;

const InputWrapper = styled.div`
  width: 364px;
  height: 22px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 12px;

  ${justifyContentSpaceAround}

  position:relative;
`;

const SelectBoxDisplay = styled.div`
  width: 341px;
  height: 18px;
  font-size: 8px;
  letter-spacing: 0.8px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 10px;

  ${flexboxCenter}
`;

const Icon = styled.img`
  cursor: pointer;
`;

const SelectBoxWrapper = styled.div`
  position: absolute;
  top: -1px;
  left: 0;
  z-index: 10;
`;

const SubWrapper = styled.div`
  width: 100%;
  margin-bottom: 6px;

  ${({ isFirstRow, isSecondRow, isThirdRow, isFourthRow, isFifthRow }) =>
    isFirstRow
      ? css`
          ${justifyContentSpaceAround}
        `
      : isSecondRow
      ? css`
          display: flex;
          justify-content: flex-start;
          align-items: center;
        `
      : isThirdRow
      ? css`
          ${flexboxCenter}
          flex-direction: column;
        `
      : isFourthRow
      ? css`
          width: 99%;
          margin-bottom: 4px;

          display: flex;
          justify-content: flex-end;
          align-items: center;
        `
      : isFifthRow &&
        css`
          width: 100%;
          margin-top: 8px;
          margin-bottom: 4px;
          ${justifyContentSpaceAround};
        `}
`;

const DisplayLabelWrapper = styled.div`
  width: 100%;
  height: 26px;
  position: relative;
`;

const DisplayLabel = styled.div`
  width: fit-content;

  font-size: 10px;
  letter-spacing: 1px;
  color: #ffffff;

  ${({ isLocationName, isCivicAddress }) =>
    isLocationName
      ? css`
          width: 66px;
          height: 22px;
        `
      : isCivicAddress &&
        css`
          width: 63px;
          height: 22px;
        `}

  ${({ isThirdRow, isSecondRow }) =>
    isThirdRow
      ? css`
          font-size: 8px;
          letter-spacing: 0.8px;
          text-align: center;

          position: absolute;
        `
      : isSecondRow &&
        css`
          margin-right: 4px;
          margin-left: 4px;
        `};

  ${({
    isUOS,
    isSwitchName,
    isSwitchSize,
    isSysID,
    isHeatingSys,
    isGasType,
    isSSRQty,
    isSSRRating,
    isAppli,
    isPartNum,
    isCurrent,
    isWattage,
    isVoltage,
    isLength,
  }) =>
    isUOS
      ? css`
          top: 4px;
          left: 12px;
        `
      : isSwitchName
      ? css`
          top: 0px;
          left: 50px;
        `
      : isSwitchSize
      ? css`
          top: 0px;
          left: 104px;
        `
      : isSysID
      ? css`
          top: 4px;
          left: 180px;
        `
      : isHeatingSys
      ? css`
          top: 0px;
          left: 282px;
        `
      : isGasType
      ? css`
          top: 0px;
          left: 336px;
        `
      : isSSRQty
      ? css`
          top: 0px;
          left: 376px;
        `
      : isSSRRating
      ? css`
          top: 0px;
          left: 412px;
        `
      : isAppli
      ? css`
          top: 4px;
          left: 460px;
        `
      : isPartNum
      ? css`
          font-size: 8px;
          letter-spacing: 0.8px;
        `
      : isCurrent
      ? css`
          font-size: 8px;
          letter-spacing: 0.8px;
        `
      : isWattage
      ? css`
          font-size: 8px;
          letter-spacing: 0.8px;
        `
      : isVoltage
      ? css`
          font-size: 8px;
          letter-spacing: 0.8px;
        `
      : isLength &&
        css`
          font-size: 8px;
          letter-spacing: 0.8px;
        `}
`;

const Display = styled.div`
  font-size: 8px;
  letter-spacing: 0.8px;
  ${flexboxCenter}

  ${({ isFirstRow, isSecondRow }) =>
    isFirstRow
      ? css`
          width: 185px;
          height: 24px;

          background: #233a54 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 6px #000000;
          border-radius: 12px;
        `
      : isSecondRow &&
        css`
          width: 34px;
          height: 24px;

          background: #233a54 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 6px #000000;
          border-radius: 12px;
        `}

  ${({
    isUOS,
    isSwitchName,
    isSwitchSize,
    isSysID,
    isGasTypeAndSSRQty,
    isHeatingSysAndSSRRating,
    isAppli,
  }) =>
    isUOS
      ? css`
          width: 28px;
          height: 18px;
          margin-top: 4px;

          background: #142033 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 2px #000000;
          border-radius: 12px;
        `
      : isSwitchName
      ? css`
          width: 60px;
          height: 18px;
          margin-left: 1px;

          background: #233a54 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 2px #000000;
          border-radius: 12px;
        `
      : isSwitchSize
      ? css`
          width: 42px;
          height: 18px;

          background: #233a54 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 2px #000000;
          border-radius: 12px;
        `
      : isSysID
      ? css`
          width: 128px;
          height: 18px;

          background: #233a54 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 2px #000000;
          border-radius: 12px;
        `
      : isHeatingSysAndSSRRating
      ? css`
          width: 54px;
          height: 18px;

          background: #233a54 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 2px #000000;
          border-radius: 12px;
        `
      : isGasTypeAndSSRQty
      ? css`
          width: 34px;
          height: 18px;

          background: #233a54 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 2px #000000;
          border-radius: 12px;
        `
      : isAppli &&
        css`
          width: 65px;
          height: 18px;
          margin-right: 1px;

          background: #233a54 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 2px #000000;
          border-radius: 12px;
        `}

        ${({ disabled }) =>
    disabled &&
    css`
      background-color: #3b3b3b;
    `}

    overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 13px;
    border: 1.5px solid transparent;
    background-clip: padding-box;
    height: 60%;
  }

  ::-webkit-scrollbar-button:start:decrement {
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
    height: 10px;

    background-image: url('/static/images/scrollbar-button-start.svg');
  }
  ::-webkit-scrollbar-button:end:increment {
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
    height: 10px;

    background-image: url('/static/images/scrollbar-button-end.svg');
  }
`;

const P = styled.div`
  max-height: 10px;
  max-width: 54px;

  white-space: nowrap;
`;

const InfoBaseLayer = styled.div`
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 13px;

  ${({ isSecondLayer }) =>
    isSecondLayer
      ? css`
          width: 493px;
          height: 26px;
          margin-bottom: 2px;
        `
      : css`
          width: 531px;
          min-height: 36px;
        `}

  ${flexboxCenter}
`;

const InfoWrapper = styled.div`
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 12px;

  ${({ isSecondLayer }) =>
    isSecondLayer
      ? css`
          width: 491px;
          height: 24px;

          ${justifyContentSpaceEvenly}
        `
      : css`
          width: 529px;
          min-height: 34px;
          padding-top: 2px;
          padding-bottom: 2px;

          ${justifyContentSpaceAround}
          flex-direction: column;
        `}
`;

const ButtonWrapper = styled.div`
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 18px;

  ${({ isHeatLoad }) =>
    isHeatLoad
      ? css`
          width: 221px;
          height: 29px;
        `
      : css`
          width: 132px;
          height: 35px;
        `}

  ${flexboxCenter}
`;

const Button = styled.button`
  width: 130px;
  height: 33px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 17px;
  ${flexboxCenter}

  ${({ isHeatLoad }) =>
    isHeatLoad
      ? css`
          width: 219px;
          height: 27px;
        `
      : css`
          width: 130px;
          height: 33px;
        `}
`;

const ButtonIndent = styled.div`
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  ${flexboxCenter}

  ${({ isFirstLayer, isHeatLoad }) =>
    isFirstLayer
      ? css`
          width: 126px;
          height: 29px;
          border-radius: 15px;
        `
      : isHeatLoad
      ? css`
          width: 213px;
          height: 21px;
          border-radius: 20px;
        `
      : css`
          width: 118px;
          height: 21px;
          border-radius: 20px;
        `}
`;

const ButtonTop = styled.div`
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  font-size: 10px;
  letter-spacing: 1px;
  color: #ffffff;

  ${flexboxCenter}

  ${({ isFirstLayer, isHeatLoad }) =>
    isFirstLayer
      ? css`
          width: 124px;
          height: 27px;
          /* ${flexboxCenter} */
        `
      : isHeatLoad
      ? css`
          width: 211px;
          height: 19px;
        `
      : css`
          width: 116px;
          height: 19px;
        `}
`;

const Flex = styled.div`
  ${({ isColumn, isRow }) =>
    isColumn
      ? css`
          display: flex;
          flex-direction: column;
        `
      : isRow &&
        css`
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
        `}
`;

const Title = styled.div`
  width: 100%;
  font-size: 10px;
  letter-spacing: 1px;

  ::before,
  ::after {
    background-color: #ffff;
    content: '';
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 30%;
  }
  ::before {
    right: 0.5em;
    margin-left: 2%;
  }

  ::after {
    left: 0.5em;
  }
`;

const HeatLoadConfigWrapper = styled.div``;

const DisplaySSRLabel = styled.div`
  width: 111px;
  height: 20px;

  background: #142033 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;

  ${justifyContentSpaceBetween}
`;

const SSR = styled.div`
  font-size: 8px;
  letter-spacing: 0.8px;
  color: #fcff01;
`;

const TCWrapper = styled.div`
  width: 60px;
  height: 18px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 12px;

  ${flexboxCenter}
`;

const TC = styled.div`
  width: 56px;
  height: 14px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;

  font-size: 8px;
  letter-spacing: 0.8px;
  color: #ffffff;
`;

const SSRInfoWrapper = styled.div``;

const IndivSSRInfo = styled.div``;

const DescriptionWrapper = styled.div``;

const Description = styled.div``;

const DisplayUOSName = styled.div`
  width: 287px;
  height: 29px;
  padding-left: 16px;

  font-size: 10px;
  letter-spacing: 1px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 15px;

  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
  /* ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 13px;
    border: 1.5px solid transparent;
    background-clip: padding-box;
    height: 60%;
  }

  ::-webkit-scrollbar-button:start:decrement {
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
    height: 10px;

    background-image: url('/static/images/scrollbar-button-start.svg');
  }
  ::-webkit-scrollbar-button:end:increment {
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
    height: 10px;

    background-image: url('/static/images/scrollbar-button-end.svg');
  } */

  ${flexboxCenter}
`;
