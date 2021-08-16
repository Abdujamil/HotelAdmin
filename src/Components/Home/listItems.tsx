import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
  People,
  PeopleOutline,
  PeopleAlt,
  MeetingRoomOutlined,
  RoomService,
  VpnKey,
  Face,
  Dashboard,
} from '@material-ui/icons';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleOutline />
      </ListItemIcon>
      <Link to="./Users">
        <ListItemText primary="Users" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleAlt />
      </ListItemIcon>
      <ListItemText primary="Clients" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <People />
      </ListItemIcon>
      <ListItemText primary="Guests" />
    </ListItem>
    <Link to="./staff">
      <ListItem button>
        <ListItemIcon>
          <Face />
        </ListItemIcon>
        <ListItemText primary="Staff" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <MeetingRoomOutlined />
      </ListItemIcon>
      <ListItemText primary="Room Category" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RoomService />
      </ListItemIcon>
      <ListItemText primary="Survices" />
    </ListItem>
    <Link to="./rooms">
      <ListItem button>
        <ListItemIcon>
          <VpnKey />
        </ListItemIcon>
        <ListItemText primary="Rooms" />
      </ListItem>
    </Link>
  </div>
);
