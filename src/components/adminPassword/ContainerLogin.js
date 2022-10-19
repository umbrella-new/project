import { useState } from 'react';
import styled from 'styled-components';
import { flexboxCenter } from '../../styles/commonStyles';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminAccess, selectUserState } from '../../store/slices/userSlice';
import { useRef } from 'react';
import { useEffect } from 'react';
import InputKeyboard from '../keyboard/InputKeyboard';

function ContainerLogin() {
  // state
  const [passwordType, setPasswordType] = useState('password');
  const [passwordInput, setPasswordInput] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // redux
  const state = useSelector(selectUserState);
  const adminAccess = state.isAdministrator;
  const [openKeyboard, setOpenKeyboard] = useState(false);
  const { adminPassword } = state;
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };
  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === adminPassword) {
      dispatch(setAdminAccess(true));
      setShowErrorMessage(false);
    } else {
      setPasswordInput('');
      setShowErrorMessage(true);
    }
  };

  const handleKeyboardSubmit = () => {
    if (passwordInput === adminPassword) {
      dispatch(setAdminAccess(true));
      setShowErrorMessage(false);
    } else {
      setPasswordInput('');
      setShowErrorMessage(true);
    }
  };

  return (
    <LoginAndKeyboardWrapper>
      <Wrapper>
        <Wrapper1>
          <Wrapper2>
            <P>
              admin password <br />
              required
            </P>
            <Form onSubmit={handleSubmit}>
              <Label for='password'>password</Label>
              <ContainerInputButton>
                <InputWrap>
                  <Input
                    type={passwordType}
                    value={passwordInput}
                    ref={inputRef}
                    placeholder='Input admin password'
                    onChange={handlePasswordChange}
                    onClick={() => setOpenKeyboard(true)}
                  />
                  <Button onClick={togglePassword}>
                    {passwordType === 'password' ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </Button>
                </InputWrap>
              </ContainerInputButton>
              <Div>
                {showErrorMessage
                  ? adminAccess || (
                      <WarningMessage>
                        invalid password please try again
                      </WarningMessage>
                    )
                  : ''}
              </Div>

              <EnterButton type='submit'>
                <Wrap>
                  <Wrap1>
                    <Wrap2>
                      <P>enter</P>
                    </Wrap2>
                  </Wrap1>
                </Wrap>
              </EnterButton>
            </Form>
          </Wrapper2>
        </Wrapper1>
      </Wrapper>
      {openKeyboard && (
        <InputKeyboard
          input={passwordInput}
          setInput={setPasswordInput}
          handleSubmit={handleKeyboardSubmit}
        />
      )}
    </LoginAndKeyboardWrapper>
  );
}

export default ContainerLogin;

const LoginAndKeyboardWrapper = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 256px;
  height: auto;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #142033;
  border-radius: 28px;
  opacity: 1;
  ${flexboxCenter}
`;
const Wrapper1 = styled.div`
  width: 246px;
  /* height: 161px; */
  height: auto;
  margin: 5px 0 5px 0;

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
  height: auto;
  margin: 0.08rem 0;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #142033;
  border-radius: 22px;
  opacity: 1;
  display: flex;

  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const P = styled.p`
  margin-top: 4px;
  text-align: center;
  font-size: var(--space0);
  letter-spacing: 1.2px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  margin-top: 8px;

  text-align: center;
  font-size: var(--space0);
  letter-spacing: 1.2px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
`;

const ContainerInputButton = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

const InputWrap = styled.div`
  width: 236px;
  height: 40px;
  margin-top: 4px;

  font-size: 24px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 20px;
  opacity: 1;
  ${flexboxCenter}
  justify-content: space-between;
  padding: 0 0.5rem;
`;

const Input = styled.input`
  width: 90%;
  height: auto;
  font-size: 20px;
  background: #233a54 0% 0% no-repeat padding-box;
  border-radius: 19px;

  opacity: 1;
  &::placeholder {
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
  }
`;

const Button = styled.button`
  font-size: 24px;
  margin-top: 8px;
  opacity: 1;
`;

const WarningMessage = styled.p`
  width: 160px;
  height: 27px;
  margin: 4px 0 4px 0;

  text-align: center;
  font-size: var(--space0);
  letter-spacing: 1.2px;
  color: #ff0000;
  opacity: 1;
`;

const Div = styled.div`
  ${flexboxCenter}
`;

const EnterButton = styled.button`
  width: 236px;
  height: 40px;
  margin-bottom: 4px;
  margin-top: 4px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 20px;
  opacity: 1;
  ${flexboxCenter}
`;

const Wrap = styled.div`
  width: 234px;
  height: 38px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 19px;
  opacity: 1;
  ${flexboxCenter}
`;

const Wrap1 = styled.div`
  width: 228px;
  height: 32px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 16px;
  opacity: 0.8;
  ${flexboxCenter}
`;

const Wrap2 = styled.div`
  width: 226px;
  height: 30px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 15px;
  opacity: 1;
  ${flexboxCenter}
`;
