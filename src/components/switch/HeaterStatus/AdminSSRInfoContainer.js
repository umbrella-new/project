import { useState } from 'react';
import styled, { css } from 'styled-components';
import { flexboxCenter } from '../../../styles/commonStyles';
import AdminSSRInfoDetailItems from './AdminSSRInfoDetailItems';
import DescriptionButtonContainer from './DescriptionButtonContainer';
import HoverMessageBox from './HoverMessageBox';
import SettingButton from './SettingButton';

const AdminSSRInfoContainer = ({ data, id }) => {
  console.log(data);
  const titles = Object.keys(data).slice(2);

  // this two variables will be merged as one with 3 conditions
  // isEnable is for styling  [false:color gray-deActivated color]
  const isEnable =
    data.buttonStatus === 'flt' ? false : data.buttonStatus ? true : false;
  // isEnable is for styling  [true:red border]
  const isFault = data.buttonStatus === 'flt' ? true : false;

  const [isSettingOpen, setIsSettingOpen] = useState(false);
  // const [selectDescript, setSelectDescript] = useState('1st');
  const [displayHiddenMessage, setDisplayHiddenMessage] = useState(false);

  const handleSelectDescript = (descriptionNumber) => {
    // add business logic
    console.log('selected', `ssr${id}`, descriptionNumber);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{titles[0]} (a)</Title>
        <Title>{titles[1]} (w)</Title>
        <Title>{titles[2]} (v)</Title>
        <Title>{titles[3]} (m)</Title>
        <Title>{titles[4]}</Title>
      </TitleWrapper>

      <ItemWrapper
        isSettingOpen={isSettingOpen}
        isEnable={isEnable}
        isFault={isFault}
      >
        {isSettingOpen ? (
          <>
            <DescriptionAndButtonWrapper>
              <AdminSSRInfoDetailItems
                data={data}
                isSettingOpen={isSettingOpen}
                setIsSettingOpen={setIsSettingOpen}
                onSelect={handleSelectDescript}
                displayHiddenMessage={displayHiddenMessage}
                setDisplayHiddenMessage={setDisplayHiddenMessage}
                descriptionNumber={`1st`}
              />
              <SettingButton
                isSettingOpen={isSettingOpen}
                setIsSettingOpen={setIsSettingOpen}
                displayHiddenMessage={displayHiddenMessage}
                setDisplayHiddenMessage={setDisplayHiddenMessage}
                isFault={isFault}
              />
            </DescriptionAndButtonWrapper>

            <DescriptionAndButtonWrapper>
              <AdminSSRInfoDetailItems
                data={data}
                isSettingOpen={isSettingOpen}
                setIsSettingOpen={setIsSettingOpen}
                onSelect={handleSelectDescript}
                descriptionNumber={`2nd`}
              />
              <SettingHoleInvisible></SettingHoleInvisible>
            </DescriptionAndButtonWrapper>

            <DescriptionAndButtonWrapper>
              <AdminSSRInfoDetailItems
                data={data}
                isSettingOpen={isSettingOpen}
                setIsSettingOpen={setIsSettingOpen}
                onSelect={handleSelectDescript}
                descriptionNumber={`3rd`}
              />
              <SettingHoleInvisible></SettingHoleInvisible>
            </DescriptionAndButtonWrapper>
          </>
        ) : (
          <AdminSSRInfoDetailItems
            data={data}
            isSettingOpen={isSettingOpen}
            setIsSettingOpen={setIsSettingOpen}
            displayHiddenMessage={displayHiddenMessage}
            setDisplayHiddenMessage={setDisplayHiddenMessage}
          />
        )}
      </ItemWrapper>

      {isSettingOpen && <DescriptionButtonContainer />}
    </Wrapper>
  );
};

export default AdminSSRInfoContainer;
const Wrapper = styled.div`
  margin-top: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`;

const TitleWrapper = styled.div`
  width: 100%;
  ${flexboxCenter}
  justify-content: flex-start;
  margin-bottom: 0.5rem;
  padding: 0 1.3rem;
`;
const Title = styled.span`
  text-transform: uppercase;
  font-size: 8px;
  &:first-child {
    margin-right: 2.2rem;
  }
  &:nth-child(2) {
    margin-right: 2.2rem;
  }
  &:nth-child(3) {
    margin-right: 3rem;
  }
  &:nth-child(4) {
    margin-right: 9rem;
  }
`;

const ItemWrapper = styled.div`
  width: 692px;
  /* height: 24px; */

  /* background: transparent
    linear-gradient(
      ${(p) => (p.isSettingOpen ? '90deg' : '180deg')},
      #233a54 0%,
      #060d19 100%
    )
    0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
  border: 0.5px solid #000000;

  opacity: 1; */

  display: flex;
  /* align-items: stretch; */
  align-items: ${(p) => (p.isSettingOpen ? 'space-evenly' : 'center')};
  border-radius: ${(p) => (p.isSettingOpen ? '12px 12px 0 12px' : '12px')};
  flex-direction: ${(p) => (p.isSettingOpen ? 'column' : 'row')};
  height: ${(p) => (p.isSettingOpen ? 'none' : '24px')};
  padding-right: ${(p) => (p.isSettingOpen ? '0.1rem' : '0')};

  ${(p) =>
    p.isEnable
      ? css`
          background: transparent
            linear-gradient(180deg, #233a54 0%, #060d19 100%) 0% 0% no-repeat
            padding-box;
          box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
          border: 0.5px solid #000000;
          border-radius: 12px;
          opacity: 1;
        `
      : css`
          box-shadow: 0px 0px 1px var(--unnamed-color-000000);
          border: 0.5px solid var(--unnamed-color-000000);
          background: transparent
            linear-gradient(180deg, #565656 0%, #1d1d1d 100%) 0% 0% no-repeat
            padding-box;
          box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
          border: 0.5px solid #000000;
          border-radius: 12px;
          opacity: 1;
        `}

  border: ${(p) => (p.isFault ? '1px solid red' : '')}
`;

const DescriptionAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const SettingHole = styled.button`
  width: 17px;
  height: 17px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  opacity: 1;

  ${flexboxCenter}
`;
const SettingHoleInvisible = styled.div`
  width: 17px;
  height: 17px;
`;

const SettingTop = styled.div`
  width: 13px;
  height: 13px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 20px;
  opacity: 0.8;

  ${flexboxCenter}
`;
const SettingIcon = styled.img``;

const HiddenMessageWrapper = styled.div`
  position: absolute;

  z-index: 10000;
  border: 1px solid red;
  display: ${(p) => (p.displayHiddenMessage ? 'block' : 'none')};
`;
