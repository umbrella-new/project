import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import styled, { css } from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';
import Switch from './components/switch/Switch';
import Settings from './components/settings/Settings';
import Faults from './components/faults/Faults';
import { useSelector } from 'react-redux';
import { selectSettingsOfEss } from './store/slices/settingsOfEssSlice';

const MainPage = () => {
  // redux
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;
  return (
    <Wrapper interfaceMode={mode}>
      <Header />
      <Title
        src={
          mode ? '/images/blueUmbrellaName.svg' : '/images/embrellaTitle-sm.svg'
        }
      />

      <BrowserRouter>
        <MainContentsWrapper>
          <Sidebar />

          <Routes>
            <Route path='/' element={<Switch />} />
            <Route path='/tes' element={<Switch />} />
            <Route path='/alarm' element={<Faults />} />
            <Route path='/setting' element={<Settings />} />
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

  ${({ interfaceMode }) =>
    interfaceMode
      ? css`
          background: transparent
            linear-gradient(90deg, #ebebeb 0%, #bbbbbb 100%);
        `
      : css`
          background: transparent
            linear-gradient(90deg, #233a54 0%, #060d19 100%);
        `}

  box-shadow: inset 0px 1px 1px #ffffff29, 0px 0px 2px #00000080;
  border: 0.5px solid #000000b0;

  padding: var(--space2) var(--space0);

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
