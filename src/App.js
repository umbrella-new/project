import ContextProvider from './context/Context';

import GlobalStyle from './styles/GlobalStyles';
import styled from 'styled-components';
import MainPage from './MainPage';
import { flexboxCenter } from './styles/commonStyles';
import HeaterStatusProvider from './context/HeaterStatusContext';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Provider store={store}>
        <ContextProvider>
          <HeaterStatusProvider>
            <MainPage />
          </HeaterStatusProvider>
        </ContextProvider>
      </Provider>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  /* ${flexboxCenter} */
`;
