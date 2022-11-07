import { selectSettingsOfEss } from '../../../store/slices/settingsOfEssSlice';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  handlePasswordPropagation,
  selectUserState,
  setAdminAccess,
} from '../../../store/slices/userSlice';

import { flexboxCenter } from '../../../styles/commonStyles';
import styled from 'styled-components';

import ContainerLogin from '../../adminPassword/ContainerLogin';
import AdminSSRItemDetails from './AdminSSRItemDetails';
import SSRItemDetails from './SSRItemDetails';

const SSRInfoContainer = ({ data, id, isSettingOpen, setIsSettingOpen }) => {
  const userState = useSelector(selectUserState);
  const { isAdministrator } = userState;
  const [openPasswordBox, setOpenPasswordBox] = useState(false);

  const unitsState = useSelector(selectSettingsOfEss);
  const { unitsMeasurement } = unitsState.buttonsOfSettings;

  // Compare current and currentCurrent
  const [isOverAmp, setIsOverAmp] = useState(false);

  useEffect(() => {
    openPasswordBox
      ? dispatch(handlePasswordPropagation(true))
      : dispatch(handlePasswordPropagation(false));
  }, [openPasswordBox]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAdministrator) {
      setOpenPasswordBox(false);
    }
  }, [isAdministrator]);

  // check current amp
  useEffect(() => {
    data.specs.filter(
      (spec) =>
        spec.currentCurrent > spec.current + spec.current * 0.2 ||
        (spec.currentCurrent < spec.current - spec.current * 0.2 &&
          setIsOverAmp(true))
    );
  }, [data]);

  // add styling by using isOverAmp state
  const isEnable =
    data.buttonStatus === 'flt' ? false : data.buttonStatus ? true : false;

  // isEnable is for styling  [true:red border]
  const isFault = data.buttonStatus === 'flt' ? true : false;
  const passwordBoxState = useSelector(selectUserState);
  const { isPasswordOpen } = passwordBoxState;

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
          isPasswordOpen || setOpenPasswordBox(true);
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
            <AdminTitle>wattage (w)</AdminTitle>
            <AdminTitle>voltage (v)</AdminTitle>
            {unitsMeasurement ? (
              <AdminTitle>length (ft)</AdminTitle>
            ) : (
              <AdminTitle>length (m)</AdminTitle>
            )}

            <AdminTitle>description</AdminTitle>
          </>
        ) : (
          <>
            <Title>current (a)</Title>
            <Title>wattage (w)</Title>
            <Title>voltage (v)</Title>
            {unitsMeasurement ? (
              <Title>length (ft)</Title>
            ) : (
              <Title>length (m)</Title>
            )}

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
          overAmp={isOverAmp}
        />
      )}

      {openPasswordBox && (
        <PasswordWrapper>
          <ContainerLogin
            setIsSettingOpen={setIsSettingOpen}
            isReadyToClose={true}
          />
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
  font-size: 8px;
  &:first-child {
    margin-right: 2.3rem;
  }
  &:nth-child(2) {
    margin-right: 2.2rem;
  }
  &:nth-child(3) {
    margin-right: 2.5rem;
  }
  &:nth-child(4) {
    margin-right: 2.5rem;
  }
  &:nth-child(5) {
    margin-right: 5rem;
  }
`;
const Title = styled.span`
  font-size: 8px;
  &:first-child {
    margin-left: 0.3rem;
    margin-right: 2rem;
  }
  &:nth-child(2) {
    margin-right: 2.5rem;
  }
  &:nth-child(3) {
    margin-right: 2.8rem;
  }
  &:nth-child(4) {
    margin-right: 8rem;
  }
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
