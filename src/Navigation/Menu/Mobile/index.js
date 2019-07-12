import React, { Component } from "react";
import Device from "react-responsive";
import Portal from "@material-ui/core/Portal";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "./drawer";
import { makeStyles } from "@material-ui/styles";
import styles from "./styles";

class MobileNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false
    };

    this.close = this.close.bind(this);
    this.onRendered = this.onRendered.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }
  toggleOpen() {
    this.setState(state => ({
      opened: !state.opened
    }));
  }
  open() {
    this.setState(state => ({
      opened: true
    }));
  }
  onClose(e) {}
  onRendered() {}
  close(e) {
    this.setState(() => ({
      opened: false
    }));
    e.stopPropagation();
  }
  componentDidMount() {}
  render() {
    let { state, props } = this,
      { opened } = state,
      { button, children } = props;

    return (
      <Drawer open={opened} close={this.close} {...props}>
        {children}
      </Drawer>
    );
  }
}

export default MobileNavigation;
