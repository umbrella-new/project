import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarButton = ({ src, onClickHandler, id, link }) => {
  return (
    <Wrapper to={link} onClick={() => onClickHandler(id)}>
      <ButtonImage src={src} />
    </Wrapper>
  );
};

export default SidebarButton;

const Wrapper = styled(NavLink)`
  width: 50px;
  height: 50px;
  padding: 0;
  background: transparent;
  outline: 0;
  border: 0;
  position: relative;
  /* transition: all 100ms ease-in; */
  &:hover {
    transform: scale(102%);
    img:last-child {
      filter: invert(5%);
    }
  }
`;

const ButtonImage = styled.img`
  height: 100%;
  width: 100%;
`;
