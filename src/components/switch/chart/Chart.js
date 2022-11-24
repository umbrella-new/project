import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';

import moment from 'moment';

import { flexboxCenter } from '../../../styles/commonStyles';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectSystemIdentification } from '../../../store/slices/settingSystemIdentificationSlice';
import { selectSettingsOfTgsTes } from '../../../store/slices/settingsOfTgsTesSlice';
import { selectSettingsOfEss } from '../../../store/slices/settingsOfEssSlice';

const Chart = () => {
  const unitsState = useSelector(selectSettingsOfEss);
  const { unitsMeasurement } = unitsState.buttonsOfSettings;
  const settingState = useSelector(selectSettingsOfTgsTes);
  const { thermocouple } = settingState;

  const sysState = useSelector(selectSystemIdentification);

  const { sysIdentification } = sysState;

  const unitValue = unitsMeasurement
    ? 'HEATER TEMPERATURE (°F)'
    : 'HEATER TEMPERATURE (°C)';

  const data = [
    {
      name: '1',
      HT: thermocouple || -50,
      ET: 400,
      OT: 200,
      date: 13,
    },
    {
      name: '2',
      HT: thermocouple || 300,
      ET: 398,
      OT: 210,
      date: 12,
    },
    {
      name: '3',
      HT: thermocouple || 100,
      ET: 400,
      OT: 290,
      date: 11,
    },
    {
      name: '4',
      HT: thermocouple || 270,
      ET: 398,
      OT: 200,
      date: 10,
    },
    {
      name: '5',
      HT: thermocouple || 180,
      ET: 480,
      OT: 181,
      date: 9,
    },
    {
      name: '6',
      HT: thermocouple || 390,
      ET: 380,
      OT: 250,
      date: 8,
    },
    {
      name: '7',
      HT: thermocouple || 340,
      ET: 400,
      OT: 210,
      date: 7,
    },
    {
      name: '8',
      HT: thermocouple || -50,
      ET: 400,
      OT: 200,
      date: 6,
    },
    {
      name: '9',
      HT: thermocouple || 300,
      ET: 398,
      OT: 210,
      date: 5,
    },
    {
      name: '10',
      HT: thermocouple || 100,
      ET: 400,
      OT: 290,
      date: 4,
    },
    {
      name: '11',
      HT: thermocouple || 270,
      ET: 398,
      OT: 200,
      date: 3,
    },
    {
      name: '12',
      HT: thermocouple || 180,
      ET: 700,
      OT: 181,
      date: 2,
    },
    {
      name: '13',
      HT: thermocouple || 390,
      ET: 380,
      OT: 250,
      date: 1,
    },
    {
      name: '14',
      HT: thermocouple || 340,
      ET: 700,
      OT: 210,
      date: 0,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    const switchName =
      sysIdentification.switchName.length < 1
        ? 'switch information'
        : sysIdentification.locationName +
          '-' +
          sysIdentification.switchName +
          '-' +
          sysIdentification.switchSize +
          ' ' +
          sysIdentification.application +
          '-' +
          sysIdentification.heatingSystem.split(' - ')[0];

    // console.log(moment().subtract(1, 'days').format('MMMM dddd DD, YYYY'));

    if (active) {
      const unit = unitsMeasurement ? '°F' : '°C';
      const payloadName1st = switchName;
      const payloadName2nd = `( H.T- ${
        thermocouple ? 'xxx' : payload[0].value
      } ${unit}, E.T- ${payload[1].value} ${unit}, O.T- ${
        payload[2].value
      } ${unit} )`;
      const payloadName3rd = `${moment()
        .subtract(payload[0].payload.date, 'days')
        .format('MMMM dddd DD, YYYY')}`;

      return (
        <PayloadWrapper className='custom-tooltip'>
          <PayloadItem className='label'>{payloadName1st}</PayloadItem>
          <PayloadItem className='label'>{payloadName2nd}</PayloadItem>
          <PayloadItem className='label'>{payloadName3rd}</PayloadItem>
        </PayloadWrapper>
      );
    }
    return null;
  };

  return (
    <>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={100}
          height={100}
          data={data}
          margin={{
            top: 28,
            right: 10,
            left: 50,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray=' 1 solid' />
          <XAxis
            tick={{ fontSize: 8 }}
            stroke='#FFFFFF'
            dataKey='name'
            label={{
              value: 'TIME (DAY)',
              position: 'BottomRight',
              fill: '#ffff',
              dx: 220,
              dy: 10,
              fontSize: 8,
            }}
            // scale="band"
          />
          <YAxis
            interval={0}
            stroke='#FFFFFF'
            type='number'
            tick={{ fontSize: 8 }}
            tickCount={7}
            ticks={[-100, 0, 150, 300, 450, 600, 700]}
            domain={['dataMin', 700]}
            unit={unitsMeasurement ? '°F' : '°C'}
            label={{
              fill: '#ffff',
              value: unitValue,
              position: 'outsideLeft',
              angle: -90,
              dx: -45,
              dy: 0,

              fontSize: 8,
            }}
            width={20}
          />

          <Tooltip
            wrapperStyle={{
              // color: "#9bbcd1",
              backgroundColor: '#233a54',
              outline: '1px solid #1B2B44',

              // border: "1px solid #394e5a",
            }}
            content={<CustomTooltip />}
          />

          <Line
            type='monotone'
            dataKey='HT'
            stroke='#FF7800'
            // activeDot={{ r: 6 }}
            dot={false}
          />
          <Line type='monotone' dataKey='ET' stroke='#4BAF00' dot={false} />
          <Line type='monotone' dataKey='OT' stroke='#2B6FC1' dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;

const PayloadWrapper = styled.div`
  ${flexboxCenter}
  justify-content: flex-start;
  flex-direction: column;
  padding: 0.3rem;
`;
const PayloadItem = styled.span`
  font-size: 8px;
  tex
`;
