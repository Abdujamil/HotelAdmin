import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
  MeetingRoomOutlined,
  RoomService,
  VpnKey,
  Face,
  Dashboard,
} from '@material-ui/icons';

export const mainListItems = (
  <div>
    <Link to="./home">
      <ListItem button>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="./accommodation">
      <ListItem button>
        <ListItemIcon>
          <VpnKey />
        </ListItemIcon>
        <ListItemText primary="Accommodation" />
      </ListItem>
    </Link>
    <Link to="./staff">
      <ListItem button>
        <ListItemIcon>
          <Face />
        </ListItemIcon>
        <ListItemText primary="Staff" />
      </ListItem>
    </Link>
    <Link to="./room-categories">
      <ListItem button>
        <ListItemIcon>
          <MeetingRoomOutlined />
        </ListItemIcon>
        <ListItemText primary="Room Category" />
      </ListItem>
    </Link>
    <Link to="./rooms">
      <ListItem button>
        <ListItemIcon>
          <VpnKey />
        </ListItemIcon>
        <ListItemText primary="Rooms" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <RoomService />
      </ListItemIcon>
      <ListItemText primary="Services" />
    </ListItem>
  </div>
);
