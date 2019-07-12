import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { CSSTransition } from "react-transition-group";
import Device from "react-responsive";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class MenuButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      transition: false,
      icon: MenuIcon
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }
  toggleOpen() {
    this.setState(
      state => ({ active: !state.active }),
      () => this.props.toggleOpen()
    );
  }
  render() {
    let { toggleOpen, state, props } = this,
      { active, transition, icon: Icon } = state,
      { theme, classes } = props,
      { breakpoints } = theme,
      { values } = breakpoints,
      { lg } = values,
      { root, icon } = classes;

    return (
      <Device maxDeviceWidth={lg - 1}>
        <IconButton
          onClick={toggleOpen}
          className={classnames("main-site-navigation-menu-button", root, {
            active: active
          })}
        >
          <CSSTransition
            in={transition}
            timeout={300}
            classNames="main-site-navigation-menu-button-icon"
          >
            <Icon
              className={classnames(
                "main-site-navigation-menu-button-icon",
                icon
              )}
            />
          </CSSTransition>
        </IconButton>
      </Device>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MenuButton);
