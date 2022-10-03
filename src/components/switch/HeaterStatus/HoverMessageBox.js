import styled from 'styled-components';
import { flexboxCenter } from '../../../styles/commonStyles';

const HoverMessageBox = () => {
  const message = '';
  return (
    <Wrapper>
      <Message>shlc-switch heating load configuration</Message>
    </Wrapper>
  );
};

export default HoverMessageBox;

const Wrapper = styled.div`
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  opacity: 1;
  padding: 0.2rem;
  width: fit-content;
  ${flexboxCenter}
`;
const Message = styled.div`
  /* Layout Properties */

  width: 126px;

  /* UI Properties */
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font-size: 8px;
  letter-spacing: 0.8px;
  color: #ffffff;
  opacity: 1;
  line-height: 90%;

  text-transform: uppercase;
`;
