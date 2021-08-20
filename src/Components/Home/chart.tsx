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
import {useTheme} from '@material-ui/core/styles';

const Chart = (props: any) => {
  const theme = useTheme();

  const {accommodation} = props;

  const today = moment();
  const fiveDayAccomodation = accommodation.filter(row => today.diff(moment(row.arrival_date), 'days') < 5);

  let data = [];

  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  let sum4 = 0;
  let sum5 = 0;

  fiveDayAccomodation.forEach((row: any) => {
    let diff = today.diff(moment(row.arrival_date), 'days');
    let cost = Number(row.cost);
    switch (diff) {
      case 1:
        sum1 += cost;
        break;
      case 2:
        sum2 += cost;
        break;
      case 3:
        sum3 += cost;
        break;
      case 4:
        sum4 += cost;
        break;
      case 5:
        sum5 += cost;
        break;
    }
  });

  data.push(
    {date: moment().subtract(5, 'days').format('DD-MM-YYYY'), cost: sum5},
    {date: moment().subtract(4, 'days').format('DD-MM-YYYY'), cost: sum4},
    {date: moment().subtract(3, 'days').format('DD-MM-YYYY'), cost: sum3},
    {date: moment().subtract(2, 'days').format('DD-MM-YYYY'), cost: sum2},
    {date: moment().subtract(1, 'days').format('DD-MM-YYYY'), cost: sum1}
  );

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
          <XAxis dataKey="date" stroke={theme.palette.text.secondary}/>
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{textAnchor: 'middle', fill: theme.palette.text.primary}}
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
