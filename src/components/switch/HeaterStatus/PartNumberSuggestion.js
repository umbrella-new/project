import styled from 'styled-components';
import { ItemBackground } from '../../../styles/commonStyles';

const PartNumberSuggestion = ({
  matchedSuggestion,
  isSelected,
  handleSelect,
}) => {
  // let index = matchedSuggestion;

  // console.log(matchedSuggestion);

  const handleOnClick = (event) => {
    console.log(event.target);
    handleSelect(matchedSuggestion);
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
const Prediction = styled.span`
  width: 85px;
  font-size: 7px;
  letter-spacing: 0.1px;
  text-align: left;
`;
