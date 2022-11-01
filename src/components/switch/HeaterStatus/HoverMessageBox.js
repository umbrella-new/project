import styled from 'styled-components';
import { flexboxCenter } from '../../../styles/commonStyles';

const HoverMessageBox = ({ message }) => {
  return (
    <Wrapper>
      <Message>{message}</Message>
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
const Message = styled.span`
  /* Layout Properties */

  width: 150px;
  text-align: center;
  /* UI Properties */
  font-size: 8px;
  color: #ffffff;
  line-height: 90%;
`;
