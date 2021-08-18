import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { getAccommodation, getRooms } from '../../selectors';
import Title from '@material-ui/core';



const RecentAccommodation = (props: any) => {
  const { accommodation, rooms } = props;

  const roomsObject = rooms.reduce(function (acc: any, cur: any) {
    acc[cur.id] = cur.number;

    return acc;
  }, {});

  return (
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
            <TableCell>{moment(row.arrival_date).format("YYYY-MM-DD")}</TableCell>
            <TableCell>{moment(row.departure_date).format("YYYY-MM-DD")}</TableCell>
            <TableCell>{row.cost}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const mapStateToProps = (state: any) => {
  return {
    accommodation: getAccommodation(state),
    rooms: getRooms(state),
  };
};

export default connect(mapStateToProps, {})(RecentAccommodation);
