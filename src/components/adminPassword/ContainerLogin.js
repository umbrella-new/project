import styled from 'styled-components';
import { flexboxCenter } from '../../styles/commonStyles';

function ContainerLogin() {
  return (
    <Wrapper>
      <Wrapper1>
        <Wrapper2>
          <P>
            admin password <br />
            required
          </P>
          <Label for='password'>password</Label>
          <Input type='password' />
          <Img />
        </Wrapper2>
      </Wrapper1>
    </Wrapper>
  );
}

export default ContainerLogin;

const Wrapper = styled.div`
  width: 256px;
  height: 171px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #142033;
  border-radius: 28px;
  opacity: 1;
  ${flexboxCenter}
`;
const Wrapper1 = styled.div`
  width: 246px;
  height: 161px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border: 0.5px solid #142033;
  border-radius: 24px;
  opacity: 1;
  ${flexboxCenter}
`;
const Wrapper2 = styled.div`
  width: 242px;
  height: 157px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #142033;
  border-radius: 22px;
  opacity: 1;
  ${flexboxCenter}
  flex-direction: column;
`;

const P = styled.p`
  text-align: center;
  font-size: var(--space0);
  letter-spacing: 1.2px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
`;
const Label = styled.label`
  text-align: center;
  font-size: var(--space0);
  letter-spacing: 1.2px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
`;

const Input = styled.input`
  width: 236px;
  height: 40px;

  font-size: var(--space0);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 20px;
  opacity: 1;
`;

const Img = styled.img``;
