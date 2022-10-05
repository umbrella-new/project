import { useContext } from 'react';
import styled from 'styled-components';
import { HeaterStatusContext } from '../../../context/HeaterStatusContext';
import { flexboxCenter } from '../../../styles/commonStyles';
import AdminDescription from './AdminDescription';
import AdminItem from './AdminItem';
import AdminItemCurrent from './AdminItemCurrent';
import SettingButton from './SettingButton';

const AdminSSRInfoDetailItems = ({
  data,
  isSettingOpen,
  setIsSettingOpen,
  selectDescript,
  onSelect,
  displayHiddenMessage,
  setDisplayHiddenMessage,
  descriptionNumber,
  id,
  isEnable,
  isFault,
  column,
}) => {
  // console.log(data);
  // console.log(isEnable);
  const { wattage, voltage, length, current } = data;
  const { options } = useContext(HeaterStatusContext);

  // // this two variables will be merged as one with 3 conditions
  // // isEnable is for styling  [false:color gray-deActivated color]
  // const isEnable =
  //   data.buttonStatus === 'flt' ? false : data.buttonStatus ? true : false;
  // // isEnable is for styling  [true:red border]
  // const isFault = data.buttonStatus === 'flt' ? true : false;

  return (
    <Wrapper isSettingOpen={isSettingOpen}>
      <AdminItemCurrent
        data={`${current ? current : '---'} a`}
        unit='A'
        options={options.current}
        isEnable={isEnable}
        isFault={isFault}
        id={id}
        column={column}
      />

      <AdminItem
        data={`${wattage ? wattage : '---'} w`}
        title='wattage'
        unit='W'
        options={options.wattage}
        isEnable={isEnable}
        isFault={isFault}
        id={id}
        column={column}
      />
      <AdminItem
        data={`${voltage ? voltage : '---'} v`}
        title='voltage'
        unit='V'
        options={options.voltage}
        isEnable={isEnable}
        isFault={isFault}
        id={id}
        column={column}
      />
      <AdminItem
        data={`${length ? length : '---'} m`}
        title='length'
        unit='M'
        options={options.length}
        isEnable={isEnable}
        isFault={isFault}
        id={id}
        column={column}
      />

      <AdminDescription
        data={data}
        isSettingOpen={isSettingOpen}
        setIsSettingOpen={setIsSettingOpen}
        selectDescript={selectDescript}
        onSelect={onSelect}
        descriptionNumber={descriptionNumber}
        displayHiddenMessage={displayHiddenMessage}
        setDisplayHiddenMessage={setDisplayHiddenMessage}
        isFault={isFault}
        isEnable={isEnable}
        column={column}
      />

      <SettingButton
        isSettingOpen={isSettingOpen}
        setIsSettingOpen={setIsSettingOpen}
        displayHiddenMessage={displayHiddenMessage}
        setDisplayHiddenMessage={setDisplayHiddenMessage}
        // when ssr status is fault button will be disable
        isFault={isFault}
        isEnable={isEnable}
        column={column}
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
  margin-right: ${(p) => (p.isSettingOpen ? '0.1rem' : '0.1rem')};
  height: ${(p) => (p.isSettingOpen ? 'none' : '24px')};

  position: relative;
`;
