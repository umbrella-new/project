import styled from 'styled-components';
import { flexboxCenter } from '../../styles/commonStyles';

const DisplayBox = ({ currData, label }) => {
  const receivedArr = currData && currData.split(' ');

  const displayData =
    receivedArr && receivedArr.length > 1 ? receivedArr : null;

  const labelArry = label.split(' ');
  const displayLabel1 = labelArry[0];
  const displayLabel2 =
    labelArry.length > 2 ? `${labelArry[1]} ${labelArry[2]}` : labelArry[1];

  return (
    <Wrapper>
      <InnerLayer>
        {displayData !== null ? (
          <DisplayDataWrapper>
            <DisplayData>{displayData[0]}</DisplayData>
            <DisplayUnit>{displayData[1]}</DisplayUnit>
          </DisplayDataWrapper>
        ) : (
          <DisplayDataWrapper>
            <DisplayData>{currData}</DisplayData>
            <DisplayUnit>&deg;C</DisplayUnit>
          </DisplayDataWrapper>
        )}

        <LabelWrapper>
          <DisplayLabel>
            {displayLabel1} <br></br>
            {displayLabel2}
          </DisplayLabel>
        </LabelWrapper>
      </InnerLayer>
    </Wrapper>
  );
};

export default DisplayBox;

const Wrapper = styled.div`
  width: 132px;
  height: 40px;
  box-shadow: 0px 0px 2px var(--unnamed-color-000000);
  background: transparent
    linear-gradient(180deg, #d9d24b 0%, #aea951 61%, #67665c 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  border-radius: 4px;
  opacity: 1;

  ${flexboxCenter}
  position: relative;
`;
const InnerLayer = styled.div`
  width: 124px;
  height: 33px;
  background: transparent linear-gradient(180deg, #2e2e1e 0%, #fef100 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #ffe600;
  border-radius: 3px;
  opacity: 1;
`;
const DisplayDataWrapper = styled.div`
  position: absolute;
  top: 0.3rem;
  left: 0.5rem;
`;
const DisplayData = styled.span`
  width: 100%;
  height: 22px;
  color: var(--unnamed-color-1b2b44);
  text-align: left;
  font-size: 14px;
  letter-spacing: 1px;
  color: #1b2b44;
`;
const DisplayUnit = styled.span`
  color: var(--unnamed-color-1b2b44);
  font-size: 10px;
  vertical-align: text-top;
  color: #1b2b44;
`;

const LabelWrapper = styled.div`
  position: absolute;
  top: 1.3rem;
  right: 0.4rem;

  ${flexboxCenter}
  flex-direction: column;
  align-items: flex-end;
`;

const DisplayLabel = styled.span`
  line-height: 10px;
  color: var(--unnamed-color-1b2b44);
  text-align: right;
  font-size: 8px;
  letter-spacing: 0.8px;
  color: #1b2b44;
  opacity: 1;
  text-transform: uppercase;
  line-height: 0.9;
`;
