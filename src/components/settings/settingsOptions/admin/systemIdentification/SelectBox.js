import styled, { css } from 'styled-components';
import {
  alignItemsFlexStart,
  flexboxCenter,
  justifyContentFlexStart,
  justifyContentSpaceAround,
} from '../../../../../styles/commonStyles';
import { useEffect } from 'react';
import { useState } from 'react';

const SelectBox = ({
  select,
  data,
  handleAssignButton,
  setSelect,
  handleSelectBox,
}) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    if (data) {
      const selectionList = data?.map((location, locationIdx) => {
        return location.map((UOS, UOSIdx) => {
          if (UOS.length > 1) {
            const combinedSwitchesName = UOS.reduce((acc, prev) => {
              const combinedName = `${prev.switchName} ${prev.switchSize} ${
                prev.application
              } ${
                prev.heatingSys === 'tgs/tes'
                  ? 'tgs:' + `${prev.gasType}` + 'tes'
                  : prev.heatingSys === 'tgs'
                  ? 'tgs:' + `${prev.gasType}`
                  : prev.heatingSys
              }/`;
              return acc + combinedName;
            }, '');
            return combinedSwitchesName;
          } else {
            return `${UOS[0].switchName} ${UOS[0].switchSize} ${
              UOS[0].application
            } ${
              UOS[0].heatingSys === 'tgs/tes'
                ? 'tgs:' + `${UOS[0].gasType}` + 'tes'
                : UOS[0].heatingSys === 'tgs'
                ? 'tgs:' + `${UOS[0].gasType}`
                : UOS[0].heatingSys
            }`;
          }
        });
      });
      setDataList(selectionList);
    }
  }, [data]);

  console.log(dataList, 'dataList');

  return (
    <Wrapper>
      <FlexWrapper>
        <Display>{select?.select}</Display>
        <Icon src='/images/arrow-down.svg' onClick={handleSelectBox} />
      </FlexWrapper>
      <ListWrapper>
        <List>
          {dataList?.map((location, locationIdx) =>
            location.map((UOS, UOSIdx) => {
              return (
                <IndivSelectionWrapper
                  key={UOSIdx}
                  onClick={() =>
                    setSelect({
                      locationIdx,
                      UOSIdx,
                      select: UOS,
                    })
                  }
                >
                  <OuterCircle>
                    <InnerCircle
                      isSelected={
                        UOSIdx === select?.UOSIdx &&
                        locationIdx === select?.locationIdx
                      }
                    ></InnerCircle>
                  </OuterCircle>
                  <IndivSelection>{UOS}</IndivSelection>
                </IndivSelectionWrapper>
              );
            })
          )}
        </List>
      </ListWrapper>
      <ButtonWrapper>
        <Button onClick={() => handleAssignButton(select)}>
          <ButtonIndent>
            <ButtonTop>assign</ButtonTop>
          </ButtonIndent>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default SelectBox;

const Wrapper = styled.div`
  width: 364px;
  height: 144px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 11px 11px 14px 14px;

  ${justifyContentSpaceAround}
  flex-direction: column;
`;

const FlexWrapper = styled.div`
  width: 100%;
  ${justifyContentSpaceAround};
`;

const Display = styled.div`
  width: 341px;
  height: 18px;
  font-size: 8px;
  letter-spacing: 0.8px;
  text-overflow: clip;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 10px;
  ${flexboxCenter}
`;

const Icon = styled.img`
  cursor: pointer;
`;

const ListWrapper = styled.div`
  width: 360px;
  height: 82px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 13px 8px 8px 13px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const List = styled.ul`
  width: 356px;
  max-height: 78px;
  min-height: 60px;
  padding: 2px;

  background: transparent;
  border-radius: 13px 8px 8px 13px;

  overflow-y: auto;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 10px;
    border: 1px solid #ffffff;
    border-radius: 13px;
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

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2px;
  flex-direction: column;
`;

const IndivSelectionWrapper = styled.li`
  width: 340px;
  height: 24px;

  border: 1px solid #18253a;
  border-radius: 12px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const IndivSelection = styled.li`
  max-width: 317px;
  text-overflow: clip;
  font-size: 8px;
  letter-spacing: 0.8px;
  color: #ffffff;
`;

const OuterCircle = styled.div`
  min-width: 18px;
  height: 18px;
  margin-left: 1px;
  margin-right: 2px;

  border-radius: 50%;

  border: 1px solid #95ff45;

  ${flexboxCenter}
`;

const InnerCircle = styled.div`
  width: 12px;
  height: 12px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-radius: 50%;
      background-color: #95ff45;
    `}
`;

const ButtonWrapper = styled.div`
  width: 360px;
  height: 24px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 27px;

  ${flexboxCenter}
`;

const Button = styled.button`
  width: 358px;
  height: 22px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;

  ${flexboxCenter}
`;

const ButtonIndent = styled.div`
  width: 352px;
  height: 16px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 20px;

  ${flexboxCenter}
`;

const ButtonTop = styled.div`
  width: 350px;
  height: 14px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;

  font-size: 8px;
  letter-spacing: 0.8px;
  color: #ffffff;
`;
