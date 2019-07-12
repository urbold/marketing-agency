import React from "react";
import { makeStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import styles from "./styles";

const modal = {
  keepMounted: true,
  BackdropProps: {
    invisible: true
  }
};

const paper = {
  component: "nav",
  id: "mobile-site-nav-modal"
};

export default function MobileNav(props) {
  let { open, children, close } = props;

  let classes = makeStyles(styles, { withTheme: true })();
  modal.onBackdropClick = close;
  return (
    <Drawer
      open={open}
      classes={{ paper: classes.paper }}
      ModalProps={modal}
      PaperProps={paper}
      id="mobile-site-navigation-container"
      variant="persistent"
      elevation={2}
    >
      {children}
    </Drawer>
  );
}
