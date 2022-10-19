import styled from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';

function ValveSettings() {
  const data = [
    { title: 'start position:', number: '30' },
    { title: 'min position:', number: '05' },
    { title: 'max position:', number: '100' },
  ];

  return (
    <WrapperTitleAndSettings>
      <WrapperTitleAndSettings2>
        <WrapperTitle>
          <Title>valve settings</Title>
        </WrapperTitle>
        <WrapperMachineNameData>
          <WrapperMachineName>
            <MachineName>we-cove-03-04-05 #10 s.t.tgs</MachineName>
          </WrapperMachineName>
          <WrapperData>
            <WrapperData2>
              <WrapperData3>
                <SmallTitle>gas value position</SmallTitle>
                <WrapperIndent>
                  {data.map((value) => {
                    return (
                      <MapDiv>
                        <DataSubtitle>{value.title}</DataSubtitle>
                        <DataContainer>
                          <DataIndent>
                            <DataNumber>{value.number}</DataNumber>
                          </DataIndent>
                          <PercentageSign>%</PercentageSign>
                        </DataContainer>
                      </MapDiv>
                    );
                  })}
                </WrapperIndent>
                <button></button>
              </WrapperData3>
            </WrapperData2>
          </WrapperData>
        </WrapperMachineNameData>
      </WrapperTitleAndSettings2>
    </WrapperTitleAndSettings>
  );
}

export default ValveSettings;

const WrapperTitleAndSettings = styled.div`
  width: 548px;
  height: 135px;
  /* UI Properties */
  background: var(--unnamed-color-1b2b44) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px var(--unnamed-color-000000);
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter}
`;
const WrapperTitleAndSettings2 = styled.div`
  width: 542px;
  height: 129px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  border: 0.5px solid #142033;
  border-radius: 9px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const WrapperTitle = styled.div`
  width: 535px;
  height: 32px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 24px;
  opacity: 1;
  ${flexboxCenter}
`;

const Title = styled.p`
  text-align: center;
  font-size: var(--space0);
  letter-spacing: 1.2px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
`;

const WrapperMachineNameData = styled.div`
  width: 535px;
  height: 77px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 6px 6px 26px 26px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapperMachineName = styled.div`
  width: 311px;
  height: 22px;

  background: transparent linear-gradient(179deg, #233a54 0%, #233a54 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff29, 0px 3px 6px #00000029;
  border: 0.5px solid #000000;
  border-radius: 10px 0 0 0;
  opacity: 1;
  ${flexboxCenter}
`;

const MachineName = styled.p`
  font-size: var(--space0);
  letter-spacing: 1.2px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
`;

const WrapperData = styled.div`
  width: 530px;
  height: 50px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #00000029;
  border: 0.5px solid #000000;
  border-radius: 0px 25px 25px 25px;
  opacity: 1;
  ${flexboxCenter}
`;
const WrapperData2 = styled.div`
  width: 519px;
  height: 40px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 24px;
  opacity: 1;
  ${flexboxCenter}
`;
const WrapperData3 = styled.div`
  width: 515px;
  height: 36px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 33px;
  opacity: 1;
  ${flexboxCenter}
`;

const SmallTitle = styled.p`
  font-size: var(--space2);
  letter-spacing: 0.8px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
`;

const WrapperIndent = styled.div`
  width: 358px;
  height: 30px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 24px;
  opacity: 1;
  ${flexboxCenter}
`;

const MapDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DataSubtitle = styled.p`
  text-align: center;
  font-size: var(--space2);
  letter-spacing: 0.8px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
`;

const DataContainer = styled.div`
  width: 60px;
  height: 28px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 15px;
  opacity: 1;
  ${flexboxCenter}
`;

const DataIndent = styled.div`
  width: 33px;
  height: 20px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 18px 6px 6px 18px;
  opacity: 1;
  ${flexboxCenter}
`;

const DataNumber = styled.p`
  font-size: var(--space1);
  letter-spacing: 1px;
  color: #ffffff;
  opacity: 1;
`;

const PercentageSign = styled.p`
  margin-left: 2px;
  font-size: var(--space2);
`;
