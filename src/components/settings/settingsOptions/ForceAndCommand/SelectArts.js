import { useState } from 'react';
import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';

function SelectArts({ activateOnOffSwitch }) {
  const switchOnImage = './images/greenOnOffSwitch.png';
  const switchOffImage = './images/redOnOffSwitch.png';
  const [switchImage, setSwitchImage] = useState(switchOffImage);

  const handleImages = () => {
    if (switchImage === switchOffImage) {
      return setSwitchImage(switchOnImage);
    } else return setSwitchImage(switchOffImage);
  };

  return (
    <Wrapper>
      <Wrapper2>
        <WrapperTitle>
          <Title>Select Arts</Title>
          <GreenConnectionSignal src={'./images/ConnectionSignal.svg'} />
        </WrapperTitle>
        <WrapperText>
          <P>when system is on & power goes out the system will not run</P>
        </WrapperText>
        {activateOnOffSwitch ? (
          <OnOffSwitch onClick={() => handleImages()}>
            <Img src={switchImage} />
          </OnOffSwitch>
        ) : (
          <OnOffSwitch>
            <Img src={switchOffImage} />
          </OnOffSwitch>
        )}
      </Wrapper2>
    </Wrapper>
  );
}

export default SelectArts;

const Wrapper = styled.div`
  width: 277px;
  height: 164px;
  margin-top: 2px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  /* border: 1px solid #142033; */
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter}
  position: absolute;
  left: 0.3%;
  top: 59%;
`;

const Wrapper2 = styled.div`
  width: 273px;
  height: 160px;

  background: transparent
    linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(35, 58, 84) 100%) 0% 0% no-repeat
    padding-box;
  box-shadow: inset 0px 0px 2px rgb(255, 255, 255, 0.1);
  border: 1px solid #142033;
  border-radius: 9px;
  opacity: 1;
  ${flexboxCenter}
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const WrapperTitle = styled.div`
  width: 262px;
  height: 36px;
  margin-top: 1px;

  background: #233a54;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 27px;
  opacity: 1;
  ${flexboxCenter}
  justify-content: space-between;
`;

const Title = styled.p`
  margin-left: 12px;
  font-size: var(--space1);
  text-transform: uppercase;
`;

const GreenConnectionSignal = styled.img`
  width: 30px;
  height: 20px;
  margin-right: 12px;
`;

const WrapperText = styled.div`
  width: 262px;
  height: 54px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 27px;
  opacity: 1;
  ${flexboxCenter}
`;

const P = styled.p`
  margin-right: 4px;
  margin-left: 4px;
  font-size: var(--space2);
  text-align: center;
  text-transform: uppercase;
`;

const OnOffSwitch = styled.div`
  width: 107px;
  height: 42px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
