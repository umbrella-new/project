import styled from 'styled-components';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';
import { flexboxCenter } from '../../../styles/commonStyles';

const Chart = () => {
  const data = [
    {
      name: '1',
      HT: -50,
      ET: 400,
      OT: 200,
    },
    {
      name: '2',
      HT: 300,
      ET: 398,
      OT: 210,
    },
    {
      name: '3',
      HT: 100,
      ET: 400,
      OT: 290,
    },
    {
      name: '4',
      HT: 270,
      ET: 398,
      OT: 200,
    },
    {
      name: '5',
      HT: 180,
      ET: 480,
      OT: 181,
    },
    {
      name: '6',
      HT: 390,
      ET: 380,
      OT: 250,
    },
    {
      name: '7',
      HT: 340,
      ET: 400,
      OT: 210,
    },
    {
      name: '8',
      HT: -50,
      ET: 400,
      OT: 200,
    },
    {
      name: '9',
      HT: 300,
      ET: 398,
      OT: 210,
    },
    {
      name: '10',
      HT: 100,
      ET: 400,
      OT: 290,
    },
    {
      name: '11',
      HT: 270,
      ET: 398,
      OT: 200,
    },
    {
      name: '12',
      HT: 180,
      ET: 700,
      OT: 181,
    },
    {
      name: '13',
      HT: 390,
      ET: 380,
      OT: 250,
    },
    {
      name: '14',
      HT: 340,
      ET: 700,
      OT: 210,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      const payloadName1st = `WE-COVE-O2 #10 S.T.ESS: ${payload[0].value} °C`;
      const payloadName2nd = `WE-COVE-O2 #10 S.T.ESS: ${payload[1].value} °C`;
      const payloadName3rd = `WE-COVE-O2 #10 S.T.ESS: ${payload[2].value}  °C`;
      return (
        <PayloadWrapper className='custom-tooltip'>
          <PayloadItem className='label'>{payloadName2nd}</PayloadItem>
          <PayloadItem className='label'>{payloadName3rd}</PayloadItem>
          <PayloadItem className='label'>{payloadName1st}</PayloadItem>
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
            unit='°C'
            label={{
              fill: '#ffff',
              value: 'HEATER TEMPERATURE (°C)',
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

const LegendCss = styled.div`
  position: absolute;
`;

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
