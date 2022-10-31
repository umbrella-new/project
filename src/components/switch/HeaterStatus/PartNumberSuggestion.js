import styled from 'styled-components';
import { flexboxCenter, ItemBackground } from '../../../styles/commonStyles';

const PartNumberSuggestion = ({
  matchedSuggestion,
  isSelected,
  handleSelect,
  column,
  handleClose,
}) => {
  // let index = matchedSuggestion;

  // console.log(matchedSuggestion);

  const handleOnClick = () => {
    handleSelect(column, matchedSuggestion);
    handleClose();
  };

  return (
    <Wrapper isSelected={isSelected} onClick={handleOnClick}>
      <Prediction>{matchedSuggestion}</Prediction>
    </Wrapper>
  );
};

export default PartNumberSuggestion;

const Wrapper = styled.li`
  width: 90px;
  height: m;

  ${ItemBackground};
  background-color: ${(p) => p.isSelected && `hsla(50deg, 100%, 80%,0.25)`};
  &:hover {
    background-color: hsla(50deg, 100%, 80%, 0.25);
  }
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
`;
const Prediction = styled.div`
  height: 15px;
  width: 85px;
  font-size: 6px;
  letter-spacing: 0.01px;
  text-align: left;
  ${flexboxCenter}
`;
