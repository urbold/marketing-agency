import React, { Component } from "react";
import Item from "./Item";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import SubHeader from "./SubHeader";
import Device from "react-responsive";
import Portal from "@material-ui/core/Portal";
import { NavigationPortalContext, NavigationContainers } from "../";
import { merge } from "lodash";
import classnames from "classnames";

const data = {
  company: "Malcolm Taylor"
};

class NavMenu extends Component {
  constructor(props) {
    super(props);
    let { theme } = props,
      { breakpoints } = theme;

    //Mobile and Tablets First
    let mobile = breakpoints.between("xs", "md").replace("@media ", "");
    this.screenDevice = window.matchMedia(mobile);
    this.screenDevice.onchange = this.onMediaChange.bind(this);

    this.state = {
      activeItem: null, //Reference to the current active menu item.
      history: [],
      currentLevel: 0,
      contextPortal: null,
      ...merge({}, props.initialState(), {
        portals: NavigationContainers
      })
    };

    this.setActiveItem = this.setActiveItem.bind(this);
    this.setSelectedItem = this.setSelectedItem.bind(this);
    this.clearSelectedItem = this.clearSelectedItem.bind(this);
  }
  clearHistory() {}
  setActiveItem(item) {
    let { props } = item,
      { hasItems } = props;

    this.setState(state => {
      let update = {};
      let { activeItem, history } = state;

      if (item === activeItem) {
        return;
      }
      update.activeItem = item;
      update.history = [...history].unshift(activeItem);
      update.currentLevel = item.level;

      if (hasItems) {
      }
    });
  }
  setSelectedItem(item) {
    this.setState(() => ({
      selectedItem: item
    }));
  }
  clearSelectedItem(item) {
    if (item === this.state.selectedItem) {
      this.setState(() => ({
        selectedItem: null
      }));
    }
  }
  componentDidMount() {
    this.setState({
      contextPortal: this.contextPortal.current
    });
  }
  onMediaChange(e) {
    let { matches } = e;
    console.log(this.props.getCurrentMediaTarget());
    this.setState(state => ({
      device: this.props.getCurrentMediaTarget(),
      isDesktop: !matches,
      isMobile: matches,
      isTablet:
        matches && this.props.getCurrentMediaTarget() === "tablet"
          ? true
          : false
    }));
  }
  onRendered(e) {}
  render() {
    let { props, onRendered, state } = this,
      { classes, items, theme, closeInterface, mobilePortalContainer } = props,
      { breakpoints } = theme,
      { values } = breakpoints,
      { lg } = values,
      { contextPortal, isMobile, isDesktop } = state;

    return (
      <NavigationPortalContext.Consumer>
        {context => {
          let { desktop } = context,
            { ref } = desktop;

          this.contextPortal = ref;

          let styles = classnames(
            classes.root,
            isDesktop ? classes.desktop : classes.mobile
          );

          return (
            <Portal
              onRendered={onRendered}
              disablePortal={isMobile}
              container={contextPortal}
            >
              <List id="main-site-navigation-container" className={styles}>
                <Device maxDeviceWidth={lg - 1}>
                  <SubHeader
                    color="primary"
                    company={data.company}
                    close={closeInterface}
                  />
                </Device>
                {items.map((item, i) => {
                  let { url } = item;
                  return (
                    <Item
                      onActive={this.setActiveItem}
                      onSelect={this.setSelectedItem}
                      onDeselect={this.clearSelectedItem}
                      portalContainer={mobilePortalContainer}
                      key={url}
                      {...item}
                    />
                  );
                })}
              </List>
            </Portal>
          );
        }}
      </NavigationPortalContext.Consumer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NavMenu);
