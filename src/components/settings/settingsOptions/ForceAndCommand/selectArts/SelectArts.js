import { useState } from 'react';
import styled from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';
import { useSelector } from 'react-redux';
import { selectSettingsOfEss } from '../../../../../store/slices/settingsOfEssSlice';
import EditCancelApplyButtons from '../../EditCancelApplyButtons';
import SelectBox from './SelectBox';
import SubTitles from './SubTitles';

function SelectArts({ propIndex, essSwitch, essGpEbp, tesGpEbp, tgsGpEbp }) {
  const switchOnImage = './images/greenOnOffSwitch.png';
  const switchOffImage = './images/redOnOffSwitch.png';

  // states
  const [switchImage, setSwitchImage] = useState(switchOffImage);
  const [gpEbpPowering, setGpEbpPowering] = useState(null);

  // redux
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;

  // functions
  const handleImages = () => {
    if (switchImage === switchOffImage) {
      return setSwitchImage(switchOnImage);
    } else return setSwitchImage(switchOffImage);
  };

  const handleToggle = (index) => {
    if (index !== gpEbpPowering) return setGpEbpPowering(index);
  };

  return (
    <Wrapper>
      <Wrapper2>
        <TitleWrapper>
          <TitleWrapper2>
            <Title>select arts</Title>
            <GreenConnectionSignal src={'./images/ConnectionSignal.svg'} />
          </TitleWrapper2>
        </TitleWrapper>
        <SubTitleWrapper>
          <SubTitles essSwitch={essSwitch} propIndex={propIndex} />
        </SubTitleWrapper>
        <FlexSelections>
          <SelectBox
            mode={mode}
            handleToggle={handleToggle}
            gpEbpPowering={gpEbpPowering}
            tgsGpEbp={tgsGpEbp}
            tesGpEbp={tesGpEbp}
            essGpEbp={essGpEbp}
            propIndex={propIndex}
            essSwitch={essSwitch}
          />
        </FlexSelections>
        {/* <EditCancelApplyButtons /> */}
      </Wrapper2>
    </Wrapper>
  );
}

export default SelectArts;

const Wrapper = styled.div`
  width: 275px;
  height: auto;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter};
`;

const Wrapper2 = styled.div`
  width: 269px;
  height: auto;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  border: 0.5px solid #142033;
  border-radius: 9px;
  opacity: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width: 258px;
  height: 32px;
  margin-top: 6px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter};
`;

const TitleWrapper2 = styled.div`
  width: 252px;
  height: 26px;
  /* UI Properties */
  border: 1px solid #142033;
  border-radius: 13px;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  text-align: left;
  font-size: var(--space1);
  letter-spacing: 1px;
  color: #ffffff;
  opacity: 1;
  margin-left: 8px;
  text-transform: uppercase;
`;

const GreenConnectionSignal = styled.img`
  width: 30px;
  height: 20px;
  margin-right: 8px;
`;

const SubTitleWrapper = styled.div`
  margin-top: 6px;
`;

const FlexSelections = styled.div`
  width: auto;
  height: auto;
  margin-top: 2px;
  margin-bottom: 6px;

  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;
