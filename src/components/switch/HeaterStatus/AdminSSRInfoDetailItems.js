import { useContext } from 'react';
import styled from 'styled-components';
import { HeaterStatusContext } from '../../../context/HeaterStatusContext';
import { flexboxCenter } from '../../../styles/commonStyles';
import AdminDescription from './AdminDescription';
import AdminItem from './AdminItem';
import AdminItemCurrent from './AdminItemCurrent';

const AdminSSRInfoDetailItems = ({
  data,
  isSettingOpen,
  setIsSettingOpen,
  selectDescript,
  onSelect,
  displayHiddenMessage,
  setDisplayHiddenMessage,
  id,
}) => {
  const { wattage, voltage, length, current } = data;
  const { options } = useContext(HeaterStatusContext);

  // this two variables will be merged as one with 3 conditions
  const isEnable = data.buttonStatus;
  console.log(isEnable);
  const isFault = data.buttonStatus === 'flt' ? true : false;

  return (
    <Wrapper isSettingOpen={isSettingOpen}>
      <AdminItemCurrent
        data={`${current} a`}
        unit='A'
        options={options.current}
        isEnable={isEnable}
        isFault={isFault}
      />

      <AdminItem
        data={`${wattage} w`}
        title='wattage'
        unit='W'
        options={options.wattage}
        isEnable={isEnable}
        isFault={isFault}
      />
      <AdminItem
        data={`${voltage} v`}
        title='voltage'
        unit='V'
        options={options.voltage}
        isEnable={isEnable}
        isFault={isFault}
      />
      <AdminItem
        data={`${length} m`}
        title='length'
        unit='M'
        options={options.length}
        isEnable={isEnable}
        isFault={isFault}
      />

      <AdminDescription
        data={data}
        isSettingOpen={isSettingOpen}
        setIsSettingOpen={setIsSettingOpen}
        selectDescript={selectDescript}
        onSelect={onSelect}
        id={id}
        displayHiddenMessage={displayHiddenMessage}
        setDisplayHiddenMessage={setDisplayHiddenMessage}
        isFault={isFault}
        isEnable={isEnable}
      />
    </Wrapper>
  );
};

export default AdminSSRInfoDetailItems;

const Wrapper = styled.ul`
  width: 100%;
  /* height: 24px; */

  ${flexboxCenter}
  justify-content: space-between;

  padding: 0 0.1rem;

  padding-bottom: ${(p) => (p.isSettingOpen ? '0.1rem' : '0')};
  padding-top: ${(p) => (p.isSettingOpen ? '0.1rem' : '0')};
  margin-right: ${(p) => (p.isSettingOpen ? '0.1rem' : '0')};
  height: ${(p) => (p.isSettingOpen ? 'none' : '24px')};

  position: relative;
`;
