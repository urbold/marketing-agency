import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Navigation from "../Navigation";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import classnames from "classnames";

export const MainInterface = React.createContext();
export const BackdropInterface = React.createContext();

class Backdrop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      Interface: Navigation,
      self: null
    };
  }

  componentDidMount() {
    this.setState(state => ({
      self: this.interface
    }));
  }
  render() {
    let { state, props } = this,
      { children, classes, MainInterface: MI } = props,
      { root } = classes,
      { active, Interface, self } = state;

    return (
      <MainInterface.Provider value={MI}>
        <Paper
          square
          className={classnames(root, { active: active })}
          elevation={0}
          id="app-backdrop-interface"
          ref={node => (this.interface = node)}
        >
          <BackdropInterface.Provider value={self}>
            {Interface}
            {children}
          </BackdropInterface.Provider>
        </Paper>
      </MainInterface.Provider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Backdrop);
