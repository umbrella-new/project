import styled, { css } from 'styled-components';

const ControllerName = ({ name, imgSrc, isEnable }) => {
  return (
    <Wrapper isEnable={isEnable}>
      <Title>{name}</Title>
      <ImageWrapper>
        <Img src={imgSrc} />
      </ImageWrapper>
    </Wrapper>
  );
};

export default ControllerName;

const Wrapper = styled.div`
  width: 272px;
  height: 20px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 4px;

  ${(p) =>
    p.isEnable
      ? css`
          background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 6px var(--unnamed-color-000000);
          background: #233a54 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 6px #000000;

          opacity: 1;
        `
      : css`
          background: var(--unnamed-color-3b3b3b) 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 6px var(--unnamed-color-000000);
          background: #3b3b3b 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 6px #000000;
          border-radius: 16px;
          opacity: 1;
        `}
`;

const Title = styled.span`
  height: 12px;
  width: fit-content;
  font-size: 10px;
  text-transform: uppercase;
  color: #fff;
  display: inline-block;
`;
const ImageWrapper = styled.div`
  height: 18px;
  width: 18px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;
