import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import {
  selectUserState,
  setAdminAccess,
} from '../../../store/slices/userSlice';
import {
  flexboxCenter,
  ItemBackground,
  ItemBackgroundDisable,
} from '../../../styles/commonStyles';
import ContainerLogin from '../../adminPassword/ContainerLogin';
import AdminSSRItemDetails from './AdminSSRItemDetails';
import DescriptionButton from './SSRDetailAddButton';
import SettingButton from './SettingButton';
import SSRItemDetails from './SSRItemDetails';
import SSRInfoDetailItems from './SSRItemDetails';

const SSRInfoContainer = ({ data, id, isSettingOpen, setIsSettingOpen }) => {
  const userState = useSelector(selectUserState);
  const { isAdministrator } = userState;
  const [openPasswordBox, setOpenPasswordBox] = useState(false);
  const { specs } = data;
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAdministrator) {
      setOpenPasswordBox(false);
    }
  }, [isAdministrator]);

  const isEnable =
    data.buttonStatus === 'flt' ? false : data.buttonStatus ? true : false;

  // isEnable is for styling  [true:red border]
  const isFault = data.buttonStatus === 'flt' ? true : false;

  const handleButtonClick = (id) => {
    if (id === 1) {
      if (isAdministrator) {
        // admin? open the settings
        setIsSettingOpen(true);
      } else {
        // no admin ?
        if (openPasswordBox) {
          // 1. close password box
          setOpenPasswordBox(false);
        } else {
          // 2. Login process => Display Password require box
          setOpenPasswordBox(true);
        }
      }
    } else {
      // id === 2  Close the setting and logout
      setIsSettingOpen(false);
      dispatch(setAdminAccess(false));
    }
  };

  return (
    <Wrapper>
      <TitleWrapper>
        {isSettingOpen ? (
          <>
            <AdminTitle>part number</AdminTitle>
            <AdminTitle>current (a)</AdminTitle>
            <AdminTitle>wattage (kw)</AdminTitle>
            <AdminTitle>voltage (v)</AdminTitle>
            <AdminTitle>length (m)</AdminTitle>
            <AdminTitle>description</AdminTitle>
          </>
        ) : (
          <>
            <Title>current (a)</Title>
            <Title>wattage (kw)</Title>
            <Title>voltage (v)</Title>
            <Title>length (m)</Title>
            <Title>description</Title>
          </>
        )}
      </TitleWrapper>

      {isSettingOpen ? (
        <AdminSSRItemDetails
          isEnable={isEnable}
          isFault={isFault}
          // To distinguish between admin or not
          option={2}
          // id is column number
          id={id}
          data={data}
          isSettingOpen={isSettingOpen}
          setIsSettingOpen={setIsSettingOpen}
          handleButtonClick={handleButtonClick}
          openPasswordBox={openPasswordBox}
          isAdministrator={isAdministrator}
        />
      ) : (
        // I need map depends on the column number

        <SSRItemDetails
          isEnable={isEnable}
          isFault={isFault}
          // id is column number
          id={id}
          // To distinguish between admin or not
          option={1}
          data={data}
          isSettingOpen={isSettingOpen}
          setIsSettingOpen={setIsSettingOpen}
          handleButtonClick={handleButtonClick}
          openPasswordBox={openPasswordBox}
          isAdministrator={isAdministrator}
        />
      )}

      {openPasswordBox && (
        <PasswordWrapper>
          <ContainerLogin />
        </PasswordWrapper>
      )}
    </Wrapper>
  );
};

export default SSRInfoContainer;
const Wrapper = styled.div`
  margin-top: 0.7rem;
  position: relative;
`;

const TitleWrapper = styled.div`
  ${flexboxCenter}
  justify-content: flex-start;
  margin-bottom: 0.5rem;
  padding: 0 1rem;
`;

const AdminTitle = styled.span`
  text-transform: uppercase;
  font-size: 8px;
  &:first-child {
    margin-right: 2.3rem;
  }
  &:nth-child(2) {
    margin-right: 2.2rem;
  }
  &:nth-child(3) {
    margin-right: 2.1rem;
  }
  &:nth-child(4) {
    margin-right: 2.5rem;
  }
  &:nth-child(5) {
    margin-right: 5rem;
  }
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

const ItemWrapper = styled.ul`
  width: 692px;
  height: 24px;

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

  ${flexboxCenter}
  justify-content: space-between;
  padding: 0 0.1rem;

  border: ${(p) => (p.isFault ? '1px solid red' : '')};
`;

const ItemCurrentWrapper = styled.div`
  display: flex;
  width: 91px;
  justify-content: space-between;
`;

const ItemCurrent = styled.li`
  ${flexboxCenter}

  width: 44px;
  height: 20px;
  ${ItemBackground}

  ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `}
`;
const ItemWattage = styled.li`
  ${flexboxCenter}
  width: 93px;
  height: 20px;
  ${ItemBackground}
  ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `}
`;
const ItemVoltage = styled.li`
  ${flexboxCenter}

  width: 93px;
  height: 20px;
  ${ItemBackground}
  ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `}
`;
const ItemLength = styled.li`
  ${flexboxCenter}

  width: 93px;
  height: 20px;
  ${ItemBackground}
  ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `}
`;
const ItemDescription = styled.li`
  ${flexboxCenter}

  width: 265px;
  height: 20px;
  ${ItemBackground}
  ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `}

  padding: 0 0.1rem;
`;
const ItemData = styled.span`
  font-size: 8px;
  text-align: center;
  text-transform: uppercase;

  ${(p) =>
    p.isDescription &&
    css`
      font-size: 6px;
    `}

  color: ${(p) => p.isDefault && '#95ff45'};
  color: ${(p) => p.isEnable || `#808080;`};
`;

const DescriptionAndButtonWrapper = styled.div`
  width: 285px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PasswordWrapper = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 1rem;
  position: absolute;
  top: 0rem;
  right: 5rem;
  z-index: 10000;
`;
