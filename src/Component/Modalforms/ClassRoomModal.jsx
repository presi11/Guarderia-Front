import React /* {useState, useEffect} */ from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Control from "../Control/Control";
import CloseIcon from "@mui/icons-material/Close";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const useStyles = makeStyles((theme) => ({
  dialogWraper: {
    padding: theme.spacing,
    position: "absolute",
    width: "600px",
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing,
    },
  },
  dialogTitle: {
    paddingRigth: "0px",
  },
}));


const rows = [
  {id: 1, name: 'Batman', owner: 'DC'},
  {id: 2, name: 'Spiderman', owner: 'Marvel'},
  {id: 3, name: 'Superman', owner: 'DC'},
  {id: 4, name: 'Flash', owner: 'DC'},
  {id: 5, name: 'Wolverine', owner: 'Marvel'},
  {id: 6, name: 'Hulk', owner: 'Marvel'},
];

const ClassRoomModal = (props) => {
  const { title, open, setOpen } = props;
  const styles = useStyles();

  return (
    <Dialog
      open={open}
      sx={{ width: "100%" }}
      classes={{ paper: styles.dialogWraper }}
    >
      <DialogTitle className={styles.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>

          <Control.ActionButton
            color="secondary"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon />
          </Control.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>Identificacion</TableCell>
            <TableCell align="left">Macotas</TableCell>
            <TableCell align="left">Dueño</TableCell>
            <TableCell align="left">Carbs&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.owner}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


      </DialogContent>
    </Dialog>
  );
};

export default ClassRoomModal;
