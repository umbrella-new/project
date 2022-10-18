import styled from 'styled-components';

function SubTitles({ essSwitch, propIndex }) {
  return (
    <div>
      {' '}
      {essSwitch ? (
        <div>
          <SubTitle>ess</SubTitle>
          <SubTitleDescription>electric switch system</SubTitleDescription>
        </div>
      ) : propIndex === 0 ? (
        <div>
          <SubTitle>tgs</SubTitle>
          <SubTitleDescription>typhoon gas system</SubTitleDescription>
        </div>
      ) : (
        <div>
          <SubTitle>tes</SubTitle>
          <SubTitleDescription>typhoon electric system</SubTitleDescription>
        </div>
      )}
      <GpEbpWrapper>
        <Span1>gp</Span1>
        <BigGreenConnectionSignal
          src={'./images/bigGreenConnectionSignal.svg'}
        />
        <Span2>ebp</Span2>
      </GpEbpWrapper>
      {!essSwitch && propIndex === 1 && (
        <div>
          <SubTitle>tgs</SubTitle>
          <SubTitleDescription>typhoon gas system</SubTitleDescription>
        </div>
      )}
    </div>
  );
}

export default SubTitles;

const SubTitle = styled.p`
  font-size: var(--space0);
  text-align: center;
  letter-spacing: NaNpx;
  color: #ff7800;
  text-transform: uppercase;
  opacity: 1;
`;

const SubTitleDescription = styled.p`
  font-size: var(--space2);
  text-align: center;

  color: #ff7800;
  text-transform: uppercase;
  opacity: 1;
`;
const Span1 = styled.span`
  font-size: 22px;
  margin-left: 24px;
  margin-right: 2px;
  font-size: 22px;
  letter-spacing: 2.2px;
  color: #95ff45;
  opacity: 1;
  text-transform: uppercase;
`;

const GpEbpWrapper = styled.div`
  margin-top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BigGreenConnectionSignal = styled.img``;

const Span2 = styled.span`
  text-align: left;
  font-size: 22px;
  margin-left: 2px;
  letter-spacing: 2.2px;
  color: #ff7800;
  opacity: 1;
  text-transform: uppercase;
`;
