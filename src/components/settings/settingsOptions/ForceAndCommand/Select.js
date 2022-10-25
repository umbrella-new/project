import { useState } from 'react';
import styled from 'styled-components';
import { flexboxCenter } from '../../../styles/commonStyles';
import SelectButton from './SelectButton';
import RadioBox from './RadioBox';
import { useContext } from 'react';
import { HeaterStatusContext } from '../../../context/HeaterStatusContext';
import { useDispatch } from 'react-redux';
import { selector } from '../../../store/slices/heaterStatusSlice';
import ConfirmButton from './ConfirmButton';

const Select = ({ data, id }) => {
  const dispatch = useDispatch();
  const { options } = useContext(HeaterStatusContext);
  const { select } = options && options;

  const [isClicked, setIsClicked] = useState(false);
  const [checked, setChecked] = useState(select[0]);

  const handleChecked = (elem) => {
    setChecked(elem);
  };
  const displayOptions = () => {
    setIsClicked(!isClicked);
  };

  const onConfirmHandler = () => {
    dispatch(selector({ id: `ssr${id}`, data: checked }));

    displayOptions();
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>select</Title>
      </TitleWrapper>

      <SelectorWrapper isClicked={isClicked}>
        <SelectedOneAndArrowWrapper>
          <SelectedOne>
            <SelectedSwitch>{data}</SelectedSwitch>
          </SelectedOne>
          <ArrowWrapper onClick={displayOptions}>
            <Arrow src={'/images/selector.svg'} />
          </ArrowWrapper>
        </SelectedOneAndArrowWrapper>

        {isClicked && (
          <>
            <SelectWrapper>
              {select.map((option) => (
                <RadioBox
                  data={`${option}`}
                  checked={checked}
                  onHandler={handleChecked}
                  key={option}
                />
              ))}
            </SelectWrapper>
            <ConfirmButton onConfirm={onConfirmHandler} />
          </>
        )}
      </SelectorWrapper>
    </Wrapper>
  );
};

export default Select;

const Wrapper = styled.div`
  margin-top: 0.7rem;
  width: 86px;
`;
const TitleWrapper = styled.div`
  ${flexboxCenter}
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const Title = styled.span`
  font-size: 8px;
  text-transform: uppercase;
`;

const SelectorWrapper = styled.div`
  /* UI Properties */
  width: 86px;
  background: transparent
    linear-gradient(
      ${(p) => (p.isClicked ? '90' : '180')}deg,
      #233a54 0%,
      #060d19 100%
    )
    0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 12px;
  opacity: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* position absolute => When select box unfolded  */
  padding-bottom: ${(p) => (p.isClicked ? '0.1rem' : '0')};
  height: ${(p) => (p.isClicked ? 'none' : '24px')};
  position: ${(p) => (p.isClicked ? 'absolute' : 'none')};
  z-index: 10;
`;

const SelectedOneAndArrowWrapper = styled.div`
  width: 100%;
  ${flexboxCenter}
  justify-content: space-between;

  padding: 0.09rem 0.1rem;
  padding-right: 0.25rem;

  align-items: center;
`;

const ArrowWrapper = styled.button`
  cursor: pointer;
  width: 13px;
  height: 12px;
  padding-top: 0.05rem;
`;
const Arrow = styled.img``;

const SelectedOne = styled.div`
  width: 64px;
  height: 20px;
  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;
  opacity: 1;

  ${flexboxCenter}
`;

const SelectWrapper = styled.div`
  width: 82px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 11px;
  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;
  /* space between options and button */
  margin-bottom: 0.2rem;
`;

const SelectedSwitch = styled.span`
  font-size: 8px;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
`;
