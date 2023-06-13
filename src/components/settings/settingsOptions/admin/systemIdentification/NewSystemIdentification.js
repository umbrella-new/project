import styled, { css } from 'styled-components';
import {
  flexboxCenter,
  justifyContentSpaceAround,
} from '../../../../../styles/commonStyles';
import { useState } from 'react';
import SelectBox from './SelectBox';
import { useSelector } from 'react-redux';
import { selectSelectSystemUOS } from '../../../../../store/slices/settingsSelectSystemUOSSlice';

const NewSystemIdentification = () => {
  const [select, setSelect] = useState({});
  const [openSelectBox, setOpenSelectBox] = useState(false);

  const reduxState = useSelector(selectSelectSystemUOS);

  // !!!! PROBLEM WITH SELECT SYSTEM UOS SLICE!!!!
  console.log(reduxState, '/*/*/*/*/*/redux');

  const handleAssignButton = (select) => {};

  const handleSelectBox = () => {
    setOpenSelectBox(!openSelectBox);
  };

  return (
    <BaseLayer>
      <Wrapper>
        <SelectUOSWrapper>
          <SelectBoxLabel>
            assign uos control panel identification
          </SelectBoxLabel>
          <InputBaseLayer>
            <InputWrapper>
              <SelectBoxDisplay>{select?.select}</SelectBoxDisplay>
              <Icon src='/images/arrow-down.svg' onClick={handleSelectBox} />
              {openSelectBox && (
                <SelectBoxWrapper>
                  <SelectBox
                    select={select}
                    setSelect={setSelect}
                    // data={data}
                    handleAssignButton={handleAssignButton}
                    handleSelectBox={handleSelectBox}
                  />
                </SelectBoxWrapper>
              )}
            </InputWrapper>
          </InputBaseLayer>
        </SelectUOSWrapper>
        <SubWrapper isFirstRow={true}>
          <DisplayLabel isLocationName={true}>location name</DisplayLabel>
          <Display isFirstRow={true}></Display>
          <DisplayLabel isCivicAddress={true}>civic address</DisplayLabel>
          <Display isFirstRow={true}></Display>
        </SubWrapper>
        <SubWrapper isSecondRow={true}>
          <DisplayLabel isSecondRow={true}>
            number of <br />
            uos panels
          </DisplayLabel>
          <Display isSecondRow={true}></Display>
          <DisplayLabel isSecondRow={true}>
            ssr <br /> qty.
          </DisplayLabel>
          <Display isSecondRow={true}></Display>
          <DisplayLabel isSecondRow={true}>
            number of <br /> switches
          </DisplayLabel>
          <Display isSecondRow={true}></Display>
        </SubWrapper>
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
          {/* all the display info */}

          <InfoBaseLayer>
            <InfoWrapper>
              <Display isUOS={true}></Display>
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
            </InfoWrapper>
          </InfoBaseLayer>
        </SubWrapper>
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
      </Wrapper>
    </BaseLayer>
  );
};

export default NewSystemIdentification;

const BaseLayer = styled.div`
  width: 544px;
  height: 262px;

  background: transparent linear-gradient(89deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat;
  box-shadow: inset 0px 1px 1px #ffffff24, 0px 0px 2px #000000;
  border: 1px solid #000000;
  border-radius: 9px;
`;

const Wrapper = styled.div`
  width: 538px;
  height: 214px;

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

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 10px;
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

  ${({ isFirstRow, isSecondRow, isThirdRow, isFourthRow }) =>
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
      : isFourthRow &&
        css`
          width: 99%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
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
          color: #ffffff;
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
      : isAppli &&
        css`
          top: 4px;
          left: 460px;
        `}
`;

const Display = styled.div`
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

          background: #142033 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 2px #000000;
          border-radius: 12px;
        `
      : isSwitchName
      ? css`
          width: 60px;
          height: 18px;

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

          background: #233a54 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 2px #000000;
          border-radius: 12px;
        `}
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
        `
      : css`
          width: 531px;
          height: 36px;
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

          ${justifyContentSpaceAround}
        `
      : css`
          width: 529px;
          height: 34px;

          ${justifyContentSpaceAround}
        `}
`;

const ButtonWrapper = styled.div`
  width: 132px;
  height: 35px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 18px;

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
`;

const ButtonIndent = styled.div`
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  ${flexboxCenter}

  ${({ isFirstLayer }) =>
    isFirstLayer
      ? css`
          width: 126px;
          height: 29px;
          border-radius: 15px;
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

  ${({ isFirstLayer }) =>
    isFirstLayer
      ? css`
          width: 124px;
          height: 27px;
          ${flexboxCenter}
        `
      : css`
          width: 116px;
          height: 19px;
          font-size: 10px;
          letter-spacing: 1px;
          color: #ffffff;
        `}
`;
