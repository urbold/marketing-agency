import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Modal = {
  keepMounted: false,
  container: null,
  closeAfterTransition: true,
  disableAutoFocus: true,
  disableBackdropClick: true,
  disableEscapeKeyDown: true,
  disablePortal: true
};

class MegaMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      disablePortal: true,
      container: props.container
    };
  }
  componentDidMount() {}
  onClose() {}
  render() {
    let { state, props } = this,
      { active, container, disablePortal } = state,
      { classes } = props;

    Modal.container = container;
    Modal.disabePortal = disablePortal;

    return (
      <Drawer open={active} className={classes.root} ModalProps={Modal}>
        <div />
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MegaMenu);
