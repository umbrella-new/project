import GlobalStyle from "./styles/GlobalStyles";

import styled from "styled-components";
import MainPage from "./MainPage";
import { flexboxCenter } from "./styles/commonStyles";

import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Provider store={store}>
        <MainPage />
      </Provider>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  /* ${flexboxCenter} */
`;
