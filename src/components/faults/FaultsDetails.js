import styled from 'styled-components';
import { flexboxCenter } from '../../styles/commonStyles';
import FaultsDetailButtonContainer from './FaultsDetailButtonContainer';

const FaultsDetails = ({ faultContents, column, handleButtonClick }) => {
  return (
    <Wrapper>
      <FaultsText>
        {faultContents
          ? faultContents
          : 'SSR2 FAULT - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/03/2022'}
      </FaultsText>
      <ButtonWrapper>
        <FaultsDetailButtonContainer
          handleButtonClick={handleButtonClick}
          column={column}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default FaultsDetails;

const Wrapper = styled.div`
  /* Layout Properties */

  width: 863px;
  height: 34px;
  /* UI Properties */

  border: 2px solid #ff0000;
  border-radius: 17px;
  margin-bottom: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.1rem;
  padding-left: 0.5rem;
`;

const FaultsText = styled.span`
  width: 80%;

  text-align: left;
  font-size: 7px;
  color: #ff0000;
`;

const ButtonWrapper = styled.div`
  /* width: 30%; */
  /* border: 1px solid green; */
`;
