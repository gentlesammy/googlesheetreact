import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  table: {
    minWidth: 700,
  },
}));

export default function InfoModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button    
                variant="contained"
                color="secondary"
                 type="button" 
                 onClick={handleOpen}
                 className="info-btn"
                 >
        Google Sheet Data
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      <div className="modal-container">
            <p className="modal-close" onClick={handleClose}>X</p>
            <div className="modal-text-box">
               <h2  className="modal-header-text">Data From GoogleSheet</h2>
                <p className="" >Data below are pulled from the google sheet which serve as the database for the application</p>
            </div>
            <iframe 
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS7eqS7ExtsyfY5VSBmRpzfe4Ev78tYmmFqyH6FO46052lSjzg1bmLLjtQETS1gP77o6JtOTFqYPYK9/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
      
            >
            </iframe>
      </div>


       
      </Modal>
    </div>
  );
}
