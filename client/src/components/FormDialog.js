import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import UserForm from "./UserForm";
import { makeStyles } from '@material-ui/core/styles';
import {Card, Container } from '@material-ui/core';
import { CssBaseline } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({

  contact: {
    display: 'flex',
    float: 'left',
    flexDirection: 'column',
  },
  btn: {
    marginTop: 20,
  }

}));

export default function FormDialog() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <React.Fragment>

      <Button className="btn" variant="outlined" color="primary" onClick={handleClickOpen}>
        Contact
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Contact Information</DialogTitle>
        <DialogContent>
          <UserForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

    </React.Fragment>
  );
}
