import React from 'react';
import moment from 'moment';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts';
import { useTheme } from '@material-ui/core/styles';

const Chart = (props: any) => {
  const theme = useTheme();

  const { accommodation } = props;

  const today = moment();
  const fiveDayAccomodation = accommodation.filter(row => today.diff(moment(row.arrival_date), 'days') < 4);

  /*let data = [

  ];*/

  const data = accommodation.map((row: any) => {
    return { date: moment(row.arrival_date).format('DD-MM-YYYY'), cost: row.cost };
  });

  console.log('fiveDayAccomodation', fiveDayAccomodation);

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="date" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="cost"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default Chart;
