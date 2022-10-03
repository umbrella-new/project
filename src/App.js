import ContextProvider from './context/Context';

import GlobalStyle from './styles/GlobalStyles';
import styled from 'styled-components';
import MainPage from './MainPage';
import { flexboxCenter } from './styles/commonStyles';
import HeaterStatusProvider from './context/HeaterStatusContext';

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <ContextProvider>
        <HeaterStatusProvider>
          <MainPage />
        </HeaterStatusProvider>
      </ContextProvider>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  /* ${flexboxCenter} */
`;
