import { useState } from 'react';
import styled, { css } from 'styled-components';
import { flexboxCenter } from '../../../styles/commonStyles';

import AdminSSRInfoDetailItems from './AdminSSRInfoDetailItems';
import DescriptionButtonContainer from './DescriptionButtonContainer';

const AdminSSRInfoContainer = ({ data, id }) => {
  // id is ssr number
  const titles = Object.keys(data).slice(2);

  // isEnable is for styling  [false:color gray-deActivated color]
  const isEnable =
    data.buttonStatus === 'flt' ? false : data.buttonStatus ? true : false;
  // isEnable is for styling  [true:red border]
  const isFault = data.buttonStatus === 'flt' ? true : false;

  // Local states
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [displayHiddenMessage, setDisplayHiddenMessage] = useState(false);

  const handleSelectDescript = (descriptionNumber) => {
    // add business logic
    console.log('selected', `ssr${id}`, descriptionNumber);
  };

  const array = [
    {
      current: data.current[0],
      wattage: data.wattage[0],
      voltage: data.voltage[0],
      length: data.length[0],
      description: data.description[0],
    },
    {
      current: data.current[1],
      wattage: data.wattage[1],
      voltage: data.voltage[1],
      length: data.length[1],
      description: data.description[1],
    },
    {
      current: data.current[2],
      wattage: data.wattage[2],
      voltage: data.voltage[2],
      length: data.length[2],
      description: data.description[2],
    },
  ];

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
          array.map((data, index) => (
            <DescriptionAndButtonWrapper>
              <AdminSSRInfoDetailItems
                key={index}
                data={data}
                isSettingOpen={isSettingOpen}
                setIsSettingOpen={setIsSettingOpen}
                onSelect={handleSelectDescript}
                displayHiddenMessage={displayHiddenMessage}
                setDisplayHiddenMessage={setDisplayHiddenMessage}
                descriptionNumber={`1st`}
                id={id}
                isEnable={isEnable}
                isFault={isFault}
                column={index}
              />
            </DescriptionAndButtonWrapper>
          ))
        ) : (
          <AdminSSRInfoDetailItems
            data={array[0]}
            isSettingOpen={isSettingOpen}
            setIsSettingOpen={setIsSettingOpen}
            displayHiddenMessage={displayHiddenMessage}
            setDisplayHiddenMessage={setDisplayHiddenMessage}
            id={id}
            isEnable={isEnable}
            isFault={isFault}
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
    margin-right: 1.8rem;
  }
  &:nth-child(2) {
    margin-right: 2rem;
  }
  &:nth-child(3) {
    margin-right: 2.5rem;
  }
  &:nth-child(4) {
    margin-right: 8rem;
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

  border: ${(p) => (p.isFault ? '1px solid red' : '')};
`;

const DescriptionAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
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
