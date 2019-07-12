import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Device from "react-responsive";
import styles from "./styles";

class MenuButton extends Component {
  constructor(props) {
    super(props);

    this.button = React.createRef();
    this.menu = props.menu;

    this.state = {
      focused: false,
      active: false,
      disabled: false
    };
  }

  displayMenu() {}
  onClick(e) {
    this.setState(state => ({
      active: !state.active
    }));
  }
  onFocus(e) {
    this.setState(state => ({
      focused: !state.focused
    }));
  }
  render() {
    let { classes, theme } = this.props,
      { breakpoints } = theme;
    return (
      <Device maxDeviceWidth={breakpoints.values.lg}>
        <IconButton
          ref={this.button}
          onClick={this.onClick.bind(this)}
          onFocus={this.onFocus.bind(this)}
          className={classes.root}
        >
          <MenuIcon />
        </IconButton>
      </Device>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MenuButton);
