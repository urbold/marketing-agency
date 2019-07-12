import React, { Component } from "react";
import Portal from "@material-ui/core/Portal";
import List from "@material-ui/core/List";
import Item from "../Item";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { IconButton, Drawer, ListSubheader, Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import BackIcon from "@material-ui/icons/ArrowBack";

const Modal = {
  disableBackdropClick: true,
  disablePortal: true,
  keepMounted: true
};

class SubMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      container: null
    };
  }
  open() {
    this.setState(() => ({ active: true }));
  }
  close() {
    this.setState(() => ({ active: false }));
  }

  render() {
    let { state, props, close } = this,
      { classes, items, active, level } = props,
      { container } = state;

    let zIndex = { zIndex: level };
    Modal.container = container;
    return (
      <Drawer
        anchor="right"
        open={active}
        className={classes.root}
        style={zIndex}
        ModalProps={Modal}
      >
        <List className={classes.menu}>
          <ListSubheader onClick={close}>
            <IconButton>
              <BackIcon />
            </IconButton>
            <Typography>Back</Typography>
          </ListSubheader>
          {items.map(item => {
            return <Item {...item} />;
          })}
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(SubMenu);
