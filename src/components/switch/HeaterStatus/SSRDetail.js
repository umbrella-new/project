import { useSelector } from "react-redux";
import { selectUserState } from "../../../store/slices/userSlice";

import styled from "styled-components";

import ToggleSWitch from "./ToggleSwitch";
import Select from "./Select";
import SSRInfoContainer from "./SSRInfoContainer";
import AdminSSRInfoContainer from "./AdminSSRInfoContainer";

const SSRDetail = ({ data, id }) => {
  const userState = useSelector(selectUserState);
  const { isAdministrator } = userState;

  return (
    <Wrapper>
      <Select data={data.select} id={id} />
      <ToggleSWitchContainer>
        <ToggleSWitch data={data.buttonStatus} id={id} />
      </ToggleSWitchContainer>
      {isAdministrator ? (
        <AdminSSRInfoContainer data={data} id={id} />
      ) : (
        <SSRInfoContainer data={data} />
      )}
    </Wrapper>
  );
};

export default SSRDetail;

const Wrapper = styled.div`
  /* height: 60px; */
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;

  margin-bottom: 0.3rem;
  transition: all 200ms ease-in-out;
`;

const ToggleSWitchContainer = styled.div``;
