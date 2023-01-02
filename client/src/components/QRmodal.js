import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./Styles";
import { QRCodeCanvas } from "qrcode.react";

export default function QRmodal({
  prod,
  open,
  handleClose,
  handleReceiveButton,
  aText,
}) {
  const [rdata, setRdata] = React.useState({
    long: "",
    lat: "",
  });


  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <QRCodeCanvas
              id="qrCode"
              value={`http://localhost:3000/Customer/Timeline/${prod?.[0]?.[0]}`}
              size={400}
              bgColor={"#fff"}
              level={"H"}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
