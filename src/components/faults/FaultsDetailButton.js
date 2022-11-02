import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { selectFaults } from '../../store/slices/faultsSlice';
import { flexboxCenter } from '../../styles/commonStyles';

const FaultsDetailButton = ({
  name,
  title,
  handleButtonClick,
  column,
  faultsNumber,
  buttonNum,
}) => {
  const faultsState = useSelector(selectFaults);
  const { isForceButtonClicked, isForceButtonActivated } = faultsState.ess;

  // Make button disabled depending on tgs fault types
  const tgsDisable =
    name === 'tgs' && faultsNumber === 2 && buttonNum === 0 ? true : false;

  // Make button disabled depending on ess and tes fault types (more conditions than tgs)
  const essDisable =
    (name !== 'tgs' && faultsNumber == 0) || faultsNumber == 3 ? true : false;
  const essDisableMoreCondition = essDisable && buttonNum === 1;

  const disable = name === 'tgs' ? tgsDisable : essDisableMoreCondition;

  // Make some buttons invisible depending on ess, tes fault types
  const inVisible =
    name !== 'tgs' && buttonNum == 0 && faultsNumber !== 2 ? true : false;

  // ***************for styling in force button **************
  const forceBtnClicked = isForceButtonClicked && title === 'force';
  const forceBtnActivated = isForceButtonActivated && title === 'force';
  // ******************************************

  return (
    <WrapperHole
      onClick={() => handleButtonClick(name, title, column, faultsNumber)}
      inVisible={inVisible}
      disable={disable}
      forceBtnClicked={forceBtnClicked}
    >
      <ButtonInner disable={disable} forceBtnActivated={forceBtnActivated}>
        <ButtonInnerHole
          disable={disable}
          forceBtnActivated={forceBtnActivated}
        >
          <ButtonTop disable={disable} forceBtnActivated={forceBtnActivated}>
            <Title forceBtnActivated={forceBtnActivated}>{title}</Title>
          </ButtonTop>
        </ButtonInnerHole>
      </ButtonInner>
    </WrapperHole>
  );
};

export default FaultsDetailButton;

const WrapperHole = styled.button`
  cursor: pointer;
  ${flexboxCenter};

  width: 88px;
  height: 28px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 27px;

  margin-left: 0.2rem;
  ${(p) =>
    p.inVisible &&
    css`
      display: none;
    `}
  ${(p) =>
    p.inVisible &&
    css`
      display: none;
    `}

    ${(p) =>
    p.disable &&
    css`
      pointer-events: none;
    `}

    ${(p) =>
    p.forceBtnClicked &&
    css`
      border: 1px solid #95ff45;
    `}
`;
const ButtonInner = styled.div`
  ${flexboxCenter};

  width: 86px;
  height: 26px;

  border: 0.5px solid var(--unnamed-color-000000);
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px;
  border-radius: 25px;

  ${(p) =>
    p.disable &&
    css`
      background: transparent linear-gradient(180deg, #565656 0%, #1d1d1d 100%)
        0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
      border: 0.5px solid #000000;
    `}

  ${(p) =>
    p.forceBtnActivated &&
    css`
      background: transparent linear-gradient(180deg, #db9d0c 0%, #946f18 100%)
        0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
      border: 0.5px solid #000000;
    `}
`;
const ButtonInnerHole = styled.div`
  ${flexboxCenter};

  width: 82px;
  height: 20px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 20px;
  ${(p) =>
    p.disable &&
    css`
      background: #3b3b3b 0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0px 1px #000000;
    `}

  ${(p) =>
    p.forceBtnActivated &&
    css`
      background: #946f18 0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0px 1px #000000;
    `}
`;
const ButtonTop = styled.div`
  ${flexboxCenter};

  width: 80px;
  height: 18px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  ${(p) =>
    p.disable &&
    css`
      background: transparent linear-gradient(180deg, #565656 0%, #1d1d1d 100%)
        0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
      border: 0.5px solid #000000;
    `}

  ${(p) =>
    p.forceBtnActivated &&
    css`
      background: transparent linear-gradient(180deg, #db9d0c 0%, #946f18 100%)
        0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
      border: 0.5px solid #000000;
    `}
`;
const Title = styled.span`
  font-size: 8px;
  text-align: center;

  ${(p) =>
    p.forceBtnActivated &&
    css`
      color: #233a54;
    `}
`;
