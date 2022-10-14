// APIs
import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSSRState } from '../../../store/slices/heaterStatusSlice';

// Styling
import styled from 'styled-components';
import { Context } from '../../../context/Context';
import { flexboxCenter } from '../../../styles/commonStyles';

// Components
import ApplyButton from '../controls/ApplyButton';
import SSRButton from './SSRButton';
import SSRDetail from './SSRDetail';
import ContainerLogin from '../../adminPassword/ContainerLogin';

const HeaterStatus = () => {
  const ssrState = useSelector(selectSSRState);

  const { dispatch, state } = useContext(Context);
  const [displayAdminLogin, setDisplayAdminLogin] = useState(true);

  const ssrStateArr = Object.values(ssrState);
  const statusArr = ssrStateArr.map((status) => status.buttonStatus);

  // Split the array into to for styling
  const ssrGroupOne = statusArr.slice(0, 4);
  const ssrGroupTwo = statusArr.slice(4);

  const onExpand = () => {
    dispatch({ type: 'expand' });
  };

  const handleClick = () => {
    setDisplayAdminLogin(false);
  };

  return (
    <Wrapper isExpanded={state.isExpanded} onClick={handleClick}>
      <Header>
        <TitleAndButtonWrapper>
          <Title>heater status</Title>
        </TitleAndButtonWrapper>
        <UnderLine />
      </Header>

      <StatusButtonsWrapper>
        <ButtonGroup>
          {ssrGroupOne.map((switchStatus, index) => (
            <SSRButton status={switchStatus} id={index + 1} key={index} />
          ))}
        </ButtonGroup>

        <ButtonGroup>
          {ssrGroupTwo.map((switchStatus, index) => (
            <SSRButton status={switchStatus} id={index + 5} key={index} />
          ))}
        </ButtonGroup>
      </StatusButtonsWrapper>
      {displayAdminLogin && (
        <LoginWrapper>
          <ContainerLogin />
        </LoginWrapper>
      )}
      {state.isExpanded && (
        <DetailWrapper>
          {ssrStateArr.map((data, index) => (
            // id is the ssr switch number
            <SSRDetail data={data} key={index} id={index + 1} />
          ))}
        </DetailWrapper>
      )}
      <ApplyButtonWrapper>
        <ApplyButton
          name={state.isExpanded ? 'close' : 'expand'}
          buttonHandler={onExpand}
          isEnable={true}
        />
      </ApplyButtonWrapper>
    </Wrapper>
  );
};

export default HeaterStatus;

const Wrapper = styled.div`
  /* Layout Properties */

  width: 895px;
  /* height: ${(p) => (p.isExpanded ? '632px' : '145px')}; */

  ${flexboxCenter}
  flex-direction: column;
  /* justify-content: space-evenly; */

  /* Layout Properties */

  /* UI Properties */
  background: transparent
    linear-gradient(90deg, var(--unnamed-color-233a54) 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 0px 2px var(--unnamed-color-000000);
  border: 1px solid var(--unnamed-color-ff0000);
  background: transparent linear-gradient(90deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 2px #000000;

  border-radius: 15px;
  opacity: 1;

  /* ****************************************************************** */
  /* Margin-top for fitting the bottom line of the SVG background image */
  margin-top: 0.6rem;
  padding: 0.3rem 0;
`;

const Header = styled.div`
  width: 887px;
  height: 22px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;

  padding: 0 var(--space2);
  ${flexboxCenter}
`;
const TitleAndButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #fff;
  /* border: 1px solid red; */
  margin-bottom: 0.4rem;
`;

const Title = styled.div`
  /* Layout Properties */

  height: 65%;
  /* UI Properties */
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font-size: 10px;
  text-transform: uppercase;
`;

const AdministratorButton = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 8px;
`;
const UnderLine = styled.div``;

const StatusButtonsWrapper = styled.div`
  /* Layout Properties */

  width: 887px;
  height: 71px;
  /* UI Properties */
  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 36px;
  opacity: 1;

  ${flexboxCenter}
  justify-content: space-between;
  padding: 0 1rem;

  margin: 0.3rem 0;
`;

const ButtonGroup = styled.div`
  width: 43%;
  ${flexboxCenter}
  justify-content: space-between;
`;

const DetailWrapper = styled.div`
  width: 100%;

  /* border: 1px solid red; */
`;

const ApplyButtonWrapper = styled.div`
  width: 129px;
  height: 32px;

  /* background: #233a54 0% 0% no-repeat padding-box;
  border: 0.25px solid #142033;
  
  opacity: 1; */

  border-radius: 17px;
  background: #233a54;
  border-color: #707070;
  box-shadow: inset 0 0 6px #000000;
  opacity: 1;
  padding: 0;

  ${flexboxCenter}
`;

const LoginWrapper = styled.div`
  position: absolute;
  top
`;
