import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../components/Title';

// Generate Order Data
function createData(id, date, name, location, cameraNum, picTaken) {
  return { id, date, name, location, cameraNum, picTaken };
}

const rows = [
  createData(0, '31 Mar, 2019', 'RCNX0001.JPG', 'Todd east', '007', 960),
  createData(1, '31 Mar, 2019', 'RCNX0002.JPG', 'Todd east', '007', 959),
  createData(2, '31 Mar, 2019', 'RCNX0003.JPG', 'Todd east', '007', 958),
  createData(3, '31 Mar, 2019', 'RCNX0004.JPG', 'Todd east', '007', 957),
  createData(4, '31 Mar, 2019', 'RCNX0005.JPG', 'Todd east', '007', 956),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Uploads() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Recent Files</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Camera Number</TableCell>
            <TableCell align="right">Pictures Taken</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.cameraNum}</TableCell>
              <TableCell align="right">{row.picTaken}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more files
        </Link>
      </div>
    </React.Fragment>
  );
}