import React from 'react';
import moment from 'moment';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const RecentAccommodation = (props: any) => {
  const { rooms, accommodation } = props;

  const roomsObject = rooms.reduce(function (acc: any, cur: any) {
    acc[cur.id] = cur.number;

    return acc;
  }, {});

  return (
    <>
      <h1>Latest accommodation</h1>
      <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Room</TableCell>
          <TableCell>Arrival date</TableCell>
          <TableCell>Departure date</TableCell>
          <TableCell>Cost</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {accommodation.slice(0, 7).map((row: any) => (
          <TableRow key={row.room_id}>
            <TableCell>{roomsObject[row.room_id]}</TableCell>
            <TableCell>
              {moment(row.arrival_date).format('DD-MM-YYYY')}
            </TableCell>
            <TableCell>
              {moment(row.departure_date).format('DD-MM-YYYY')}
            </TableCell>
            <TableCell>{row.cost}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  );
};

export default RecentAccommodation;
