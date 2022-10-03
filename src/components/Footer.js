import styled from 'styled-components';
import { flexboxCenter, layer90Deg, layer1 } from '../styles/commonStyles';

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Title src={'/images/embrellaTitle.svg'} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 1002px;
  height: 50px;
  /* UI Properties */
  ${layer1}

  opacity: 1;

  border-radius: 13px 13px 33px 13px;

  ${flexboxCenter}
`;

const InnerWrapper = styled.div`
  width: 1000px;
  height: 48px;

  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 32px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  ${layer90Deg}

  ${flexboxCenter}
  border-radius: 12px 12px 32px 12px;
`;

const Title = styled.img``;
