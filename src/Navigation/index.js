import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import styles from "./styles";
import Menu from "./Menu";
import Props from "./props";
import classnames from "classnames";
import { BackInterface } from "../Backdrop";

const DesktopNavigationContainerRef = React.createRef();
const DesktopNavigationContainer = (
  <div
    id="desktop-site-navigation-container"
    ref={DesktopNavigationContainerRef}
  />
);

const DesktopMegaMenuContainerRef = React.createRef();
const DesktopMegaMenuContainer = (
  <div
    id="desktop-site-navigation-container"
    ref={DesktopMegaMenuContainerRef}
  />
);

/* const MobileMegaMenuContainerRef = React.createRef();
const MobileMegaMenuContainer = (
  <div
    id="desktop-site-navigation-container"
    ref={MobileMegaMenuContainerRef}
  />
); */

export const NavigationContainers = {
  desktop: {
    ref: DesktopNavigationContainerRef,
    component: DesktopNavigationContainer
  },
  megaMenu: {
    ref: DesktopMegaMenuContainerRef,
    component: DesktopMegaMenuContainer
  },
  ...Props.initialState()
};

export const NavigationPortalContext = React.createContext(
  NavigationContainers
);

const Modal = {
  keepMounted: true,
  disableBackdropClick: true,
  disableEnforceFocus: true,
  disableAutoFocus: true,
  disablePortal: true,
  BackdropProps: {
    invisible: true,
    classes: {
      invisible: {}
    }
  }
};

const Paper = {
  component: "nav",
  elevation: 1,
  square: true
};

class SiteNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobilePortalContainer: null,
      active: true
    };
  }

  componentDidMount() {
    this.setState(state => {
      let update = {};

      update.mobilePortalContainer = this.mobilePortalContainer;

      return update;
    });
  }
  render() {
    let { state, props } = this,
      { classes, container } = props,
      { active } = state;

    Modal.container = container;
    return (
      <Drawer
        open={active}
        classes={{ paperAnchorLeft: classes.paper }}
        ModalProps={Modal}
        PaperProps={Paper}
        className={classnames(classes.root)}
      >
        <Menu {...props} />
      </Drawer>
    );
  }
}

let Styled = withStyles(styles, { withTheme: true })(SiteNavigation);
export default <Styled {...Props} />;
