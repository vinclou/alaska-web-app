import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ImageIcon from '@material-ui/icons/Image';
import WavesIcon from '@material-ui/icons/Waves';
import InfoIcon from '@material-ui/icons/Info';
import LinkIcon from '@material-ui/icons/Link';
import ExploreIcon from '@material-ui/icons/Explore';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {NavLink} from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button
              key="Dashboard"
              component= {NavLink} to="/dash/:id">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button
              key="images"
              component= {NavLink} to="/images">
      <ListItemIcon>
        <ImageIcon />
      </ListItemIcon>
      <ListItemText primary="Images" />
    </ListItem>

    <ListItem button
              key="sounds"
              component= {NavLink} to="/sounds">
      <ListItemIcon>
        <WavesIcon />
      </ListItemIcon>
      <ListItemText primary="Sounds" />
    </ListItem>

    <ListItem button
              key="map"
              component= {NavLink} to="/create">
      <ListItemIcon>
        <ExploreIcon />
      </ListItemIcon>
      <ListItemText primary="Map" />
    </ListItem>

    <ListItem button
              key="links"
              component= {NavLink} to="/links">
      <ListItemIcon>
        <LinkIcon />
      </ListItemIcon>
      <ListItemText primary="Links" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end" />
    </ListItem>
  </div>
);