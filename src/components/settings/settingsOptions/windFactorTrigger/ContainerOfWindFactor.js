import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
import WindFactor from './WindFactor';

function ContainerOfWindFactor() {
  const content = [
    { title: 'low wind factor', wind: '15-24', temperature: '302' },
    { title: 'high wind factor', wind: '38-82', temperature: '392' },
    { title: 'med wind factor', wind: '25-37', temperature: '347' },
    { title: 'extreme wind factor', wind: '53-65', temperature: '437' },
  ];

  return (
    <Wrapper>
      <FlexWrapper>
        {content.map((value, index) => {
          return (
            <div key={index}>
              <WindFactor contents={value} index={index} />
            </div>
          );
        })}
      </FlexWrapper>
    </Wrapper>
  );
}

export default ContainerOfWindFactor;

const Wrapper = styled.div`
  width: 594px;
  height: 210px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 18px;
  opacity: 1;
  ${flexboxCenter};
`;

const FlexWrapper = styled.div`
  width: 594px;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
