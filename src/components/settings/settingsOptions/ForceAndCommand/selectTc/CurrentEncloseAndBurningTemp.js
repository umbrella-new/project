import styled, { css } from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';
import RadioBox from '../RadioBox';
import TcConfirmButton from '../TcConfirmButton';
import { useSelector } from 'react-redux';
import { selectSettingsOfEss } from '../../../../../store/slices/settingsOfEssSlice';

function CurrentEncloseAndBurningTemp({
  data,
  essSwitch,
  tesSwitch,
  handleChecked,
  onConfirmHandler,
  displayOptions,
  isClicked,
  select,
  checked,
  essEncloseTempName,
  essHeaterTempName,
  tgsHeaterTempName,
  tesHeaterTempName,
  tgsTesEncloseTempName,
  selectTcState,
}) {
  // redux
  const state = useSelector(selectSettingsOfEss);
  const editState = state.buttonsOfSettings.settingsEditButton;

  // redux state for radioBox Selection
  const tgsTesEncloseTemp = selectTcState.tgsTesEncloseTemp.select;
  const tgsTesOutsideTemp = selectTcState.tgsTesOutsideTemp.select;
  // const burningChamber = selectTcState.burningChamber.select;
  const tgsHeaterTemp = selectTcState.tgsHeaterTemp.select;
  const tesHeaterTemp = selectTcState.tesHeaterTemp.select;
  // const essOutsideTemp = selectTcState.essOutSideTemp.select;
  const essHeaterTemp = selectTcState.essHeaterTemp.select;
  const essEncloseTemp = selectTcState.essEncloseTemp.select;

  return (
    <FlexWrapper>
      {data.map((value, index) => {
        return (
          <SubTitleSelectionWrapper key={Math.floor(Math.random() * 1555555)}>
            <SubTitleWrapper
              tesSwitch={tesSwitch}
              essSwitch={essSwitch}
              index={index}
            >
              <SubTitleWrapper2
                tesSwitch={tesSwitch}
                essSwitch={essSwitch}
                index={index}
              >
                <SubTitle
                  essSwitch={essSwitch}
                  color={index}
                  tesSwitch={tesSwitch}
                >
                  {value.title}
                </SubTitle>
              </SubTitleWrapper2>
            </SubTitleWrapper>

            <SelectionShadowWrapper
              tesSwitch={tesSwitch}
              essSwitch={essSwitch}
              index={index}
            >
              <SelectionWrapper
                tesSwitch={tesSwitch}
                essSwitch={essSwitch}
                index={index}
              >
                <WrapperTitleAndImg>
                  <SelectionIndentWrapper
                    tesSwitch={tesSwitch}
                    essSwitch={essSwitch}
                    index={index}
                  >
                    <Selection
                      tesSwitch={tesSwitch}
                      essSwitch={essSwitch}
                      index={index}
                    >
                      {/* the subTitle of each tc element such as heater and enclosure */}
                      {essSwitch && index === 0
                        ? essHeaterTemp
                        : essSwitch && index === 1 && essEncloseTemp}
                      {!tesSwitch && !essSwitch && index === 0
                        ? tgsHeaterTemp
                        : !tesSwitch && index === 2 && tgsTesOutsideTemp}
                      {tesSwitch && index === 0
                        ? tgsHeaterTemp
                        : tesSwitch && index === 1
                        ? tesHeaterTemp
                        : tesSwitch && index === 2 && tgsTesEncloseTemp}
                    </Selection>
                  </SelectionIndentWrapper>
                  {/* white triangle. onClick it will display the dropdown for one of the heaters or enclose */}
                  {essSwitch ? (
                    <Img
                      src={'./images/whiteTriangle.svg'}
                      onClick={(e) =>
                        editState &&
                        (index === 0
                          ? displayOptions(essHeaterTempName, e)
                          : displayOptions(essEncloseTempName, e))
                      }
                    />
                  ) : !tesSwitch && index === 1 ? (
                    <Img src={'./images/greyTriangle.svg'} />
                  ) : (
                    <Img
                      src={'./images/whiteTriangle.svg'}
                      onClick={(e) =>
                        editState &&
                        (index === 0
                          ? displayOptions(tgsHeaterTempName, e)
                          : index === 1
                          ? displayOptions(tesHeaterTempName, e)
                          : index === 2 &&
                            displayOptions(tgsTesEncloseTempName, e))
                      }
                    />
                  )}
                </WrapperTitleAndImg>
                {(isClicked.essHeaterTemp && index === 0) ||
                (isClicked.tgsHeaterTemp && index === 0) ? (
                  <WrapperSelectAndConfirmButton>
                    <SelectWrapper>
                      {/* dropdown selections for either Ess heater or Tgs heater */}
                      {select.map((option) => (
                        <RadioBox
                          data={`${option}`}
                          checked={checked}
                          onHandler={handleChecked}
                          key={option}
                        />
                      ))}
                    </SelectWrapper>
                    <WrapperButton>
                      <TcConfirmButton
                        onConfirm={onConfirmHandler}
                        essHeaterTemp={essHeaterTempName}
                        tgsHeaterTemp={tgsHeaterTempName}
                      />
                    </WrapperButton>
                  </WrapperSelectAndConfirmButton>
                ) : (
                  ''
                )}
                {(isClicked.essEncloseTemp && index === 1) ||
                (isClicked.tesHeaterTemp && index === 1) ? (
                  <WrapperSelectAndConfirmButton>
                    {/* dropdown selections either for either Ess enclose temp or tes heater */}
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
                    <WrapperButton>
                      <TcConfirmButton
                        onConfirm={onConfirmHandler}
                        essEncloseTemp={essEncloseTempName}
                        tesHeaterTemp={tesHeaterTempName}
                      />
                    </WrapperButton>
                  </WrapperSelectAndConfirmButton>
                ) : (
                  ''
                )}
                {isClicked.tgsTesEncloseTemp && index === 2 && (
                  <WrapperSelectAndConfirmButton>
                    {/* dropdown selections for Tgs and Tes Heater or Tgs Heater*/}
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
                    <WrapperButton>
                      {/* onClick, it will close the dropdown */}
                      <TcConfirmButton
                        onConfirm={onConfirmHandler}
                        tgsTesEncloseTemp={tgsTesEncloseTempName}
                      />
                    </WrapperButton>
                  </WrapperSelectAndConfirmButton>
                )}
              </SelectionWrapper>
            </SelectionShadowWrapper>
          </SubTitleSelectionWrapper>
        );
      })}
    </FlexWrapper>
  );
}

export default CurrentEncloseAndBurningTemp;

const FlexWrapper = styled.div`
  /* width: 562px;
  height: 238px; */
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const SubTitleSelectionWrapper = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const SubTitleWrapper = styled.div`
  width: 252px;
  height: 32px;

  background: ${({ tesSwitch, index }) =>
    !tesSwitch && index === 1 ? '#3B3B3B' : '#233a54'};
  background: ${({ essSwitch }) => essSwitch && '#233a54'};
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter}
`;

const SubTitleWrapper2 = styled.div`
  width: 246px;
  height: 26px;

  border-radius: 13px;
  opacity: 1;

  ${flexboxCenter}
`;

const SubTitle = styled.div`
  font-size: var(--space2);
  text-transform: uppercase;
  color: ${({ color, essSwitch, tesSwitch }) =>
    !essSwitch
      ? color === 0
        ? '#FF7800'
        : !tesSwitch && color === 1
        ? '#fff'
        : color === 1
        ? '#95FF45'
        : '#fff'
      : color === 0
      ? '#83ffff'
      : '#ffff'};
  letter-spacing: 1px;
`;

const WrapperTitleAndImg = styled.div`
  display: flex;
  flex-direction: row;
`;

const SelectionShadowWrapper = styled.div`
  width: 252px;
  height: 51px;
  margin-top: 4px;

  background: #142033;

  border-radius: 31px;
  opacity: 1;
  ${flexboxCenter}
`;

const SelectionWrapper = styled.div`
  width: 248px;
  height: auto;
  padding-top: 4px;
  padding-bottom: 4px;

  background: ${({ tesSwitch, index }) =>
    tesSwitch
      ? 'transparent linear-gradient(180deg, #233a54 0%, #060d19 100%)'
      : index === 1
      ? 'transparent linear-gradient(180deg, #565656 0%, #1D1D1D 100%)'
      : 'transparent linear-gradient(180deg, #233a54 0%, #060d19 100%)'};
  background: ${({ essSwitch }) =>
    essSwitch &&
    'transparent linear-gradient(180deg, #233a54 0%, #060d19 100%)'};
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 33px;
  opacity: 1;

  ${flexboxCenter}
  justify-content: space-around;
  flex-direction: column;
  z-index: 2;
`;
const SelectionIndentWrapper = styled.div`
  width: 195px;
  height: 38px;
  margin-right: 10px;

  background: ${({ tesSwitch, index }) =>
    tesSwitch ? '#233a54' : index === 1 && '#3B3B3B'};
  background: ${({ essSwitch }) => essSwitch && '#233a54'};
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 22px;
  opacity: 1;
  ${flexboxCenter}/* z-index: 20; */
`;

const Selection = styled.p`
  font-size: var(--space1);
  text-transform: uppercase;
  color: ${({ tesSwitch, index }) =>
    tesSwitch ? '#fff' : index === 1 && '#808080'};
  color: ${({ essSwitch }) => essSwitch && '#fff'};
`;

const Img = styled.img`
  margin-top: 6px;
  margin-right: 4px;
`;

const WrapperSelectAndConfirmButton = styled.div`
  margin-top: 2px;
`;

const SelectWrapper = styled.div`
  width: 239px;

  background: #1b2b44;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 11px;
  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;
  /* space between options and button */
  margin-bottom: 0.2rem;
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;
