import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';

import Switch from './components/switch/Switch';
import { Context } from './context/Context';

const MainPage = () => {
  const { state } = useContext(Context);
  const { isEssSwitch } = state;
  return (
    <Wrapper>
      <Header />
      <Title src={'/images/embrellaTitle-sm.svg'} />

      <BrowserRouter>
        <MainContentsWrapper>
          <Sidebar />

          <Routes>
            <Route path='/' element={<Switch />} />

            {!isEssSwitch && <Route path='/tes' element={<Switch />} />}

            <Route path='/alarm' element={<Switch />} />

            <Route path='/setting' element={<Switch />} />
          </Routes>
        </MainContentsWrapper>
      </BrowserRouter>

      <Footer />
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.section`
  box-sizing: border-box;

  width: 1024px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: transparent
    linear-gradient(90deg, var(--unnamed-color-233a54) 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  background: transparent linear-gradient(90deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff29, 0px 0px 2px #00000080;
  border: 0.5px solid #000000b0;
  opacity: 1;

  padding: var(--space2) var(--space1);

  position: relative;
`;

const Title = styled.img`
  margin-bottom: var(--space3);
`;

const MainContentsWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: var(--space3);
`;
