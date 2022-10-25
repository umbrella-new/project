import styled from 'styled-components';
import FaultsDetailButton from './FaultsDetailButton';

const FaultsDetailButtonContainer = ({ handleButtonClick, column }) => {
  const buttonNames = ['view', 'comment', 'attent'];

  return (
    <Wrapper>
      {buttonNames.map((name) => (
        <FaultsDetailButton
          name={name}
          handleButtonClick={handleButtonClick}
          column={column}
        />
      ))}
    </Wrapper>
  );
};

export default FaultsDetailButtonContainer;

const Wrapper = styled.div`
  display: flex;
`;
