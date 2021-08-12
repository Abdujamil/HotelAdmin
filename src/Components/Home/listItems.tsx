import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import BarChartIcon from '@material-ui/icons/BarChart';
import FaceIcon from '@material-ui/icons/Face';
import ReportIcon from '@material-ui/icons/Report';
import Link from "@material-ui/core/Link"

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PeopleOutlineIcon />
      </ListItemIcon>
      <Link href="./Users">
      <ListItemText primary="Users" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleAltIcon />
      </ListItemIcon>
      <ListItemText primary="Clients" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Guests" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FaceIcon />
      </ListItemIcon>
      <ListItemText primary="Staff" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MeetingRoomOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Room Category" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RoomServiceIcon />
      </ListItemIcon>
      <ListItemText primary="Survices" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VpnKeyIcon />
      </ListItemIcon>
      <ListItemText primary="Numbers" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Diagramm" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Report" />
    </ListItem>
  </div>
);
