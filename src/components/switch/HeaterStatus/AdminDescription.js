import styled, { css } from 'styled-components';
import {
  flexboxCenter,
  DisableApplyButtonBG,
  DisableApplyButtonHole,
} from '../../../styles/commonStyles';
import SettingButton from './SettingButton';

const AdminDescription = ({
  data,
  isSettingOpen,
  setIsSettingOpen,
  selectDescript,
  onSelect,
  id,
  displayHiddenMessage,
  setDisplayHiddenMessage,
  isFault,
  isEnable,
}) => {
  const status = isEnable ? false : isFault ? false : true;
  return (
    <Wrapper>
      {isSettingOpen ? (
        <DescriptionWrapper isSettingOpen={isSettingOpen} isFault={status}>
          <ItemDataWrapper>
            <ItemData isSettingOpen={isSettingOpen} isFault={status}>
              {data.description}
            </ItemData>
          </ItemDataWrapper>
          {isSettingOpen && (
            <RadioButtonWrapper onClick={() => onSelect(id)}>
              <Radiobutton
                isChecked={id === selectDescript ? true : false}
              ></Radiobutton>
            </RadioButtonWrapper>
          )}
        </DescriptionWrapper>
      ) : (
        <DescriptionWrapper isFault={status}>
          <ItemData isSettingOpen={isSettingOpen} isFault={status}>
            {data.description}
          </ItemData>
          <SettingButton
            isSettingOpen={isSettingOpen}
            setIsSettingOpen={setIsSettingOpen}
            displayHiddenMessage={displayHiddenMessage}
            setDisplayHiddenMessage={setDisplayHiddenMessage}
            // when ssr status is fault button will be disable
            isFault={status}
          />
        </DescriptionWrapper>
      )}
    </Wrapper>
  );
};
export default AdminDescription;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const DescriptionWrapper = styled.li`
  ${flexboxCenter}
  justify-content: space-between;
  width: ${(p) => (p.isSettingOpen ? '264px' : '286px')};
  height: 20px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;
  opacity: 1;
  padding: 0 0.1rem;

  ${(p) =>
    p.isFault &&
    css`
      ${DisableApplyButtonHole}
    `}
`;

const ItemDataWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flexboxCenter}
`;

const ItemData = styled.span`
  font-size: ${(p) => (p.isSettingOpen ? '6px' : '8px')};
  width: ${(p) => (p.isSettingOpen ? '180px' : 'none')};
  text-align: center;
  text-transform: uppercase;
  max-width: 93%;
  line-height: 0.98;
  color: ${(p) => p.isFault && '#808080'};
`;

const RadioButtonWrapper = styled.button`
  width: 16px;
  height: 16px;

  border: 1px solid #95ff45;
  opacity: 1;
  border-radius: 50%;
  ${flexboxCenter}
`;
const Radiobutton = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${(p) => (p.isChecked ? '#95ff45' : 'none')};
  border-radius: 50%;
`;
