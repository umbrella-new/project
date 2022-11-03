import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectFaults } from '../../store/slices/faultsSlice';
import FaultsDetailButton from './FaultsDetailButton';

const FaultsDetailButtonContainer = ({
  handleButtonClick,
  column,
  name,
  faultContents,
}) => {
  const buttonNames =
    name === 'tgs' ? ['reset', 'attend'] : ['force', 'reset', 'attend'];
  const faultsState = useSelector(selectFaults);
  const { faultsTypes } = name === 'tgs' ? faultsState.tgs : faultsState.ess;

  // logic for detecting faults type
  // console.log(faultContents.split(' - ')[0]);
  // console.log(faultsTypes.indexOf(faultContents.split(' - ')[0]));

  const faultsNumber = faultsTypes.indexOf(faultContents.split(' - ')[0]);

  return (
    <Wrapper>
      {buttonNames.map((title, index) => (
        <FaultsDetailButton
          name={name}
          title={title}
          faultsNumber={faultsNumber}
          handleButtonClick={handleButtonClick}
          column={column}
          key={index}
          buttonNum={index}
        />
      ))}
    </Wrapper>
  );
};

export default FaultsDetailButtonContainer;

const Wrapper = styled.div`
  display: flex;
`;
