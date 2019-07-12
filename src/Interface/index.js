import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { Transition } from "react-transition-group";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import classnames from "classnames";
import AppBar from "../AppBar";
import MegaMenu from "../Navigation/Menu/MegaMenu";

class Interface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true,
      transition: {
        direction: "left"
      },
      interface: {
        active: {
          name: null,
          route: null,
          Component: null
        },
        previous: {
          name: null,
          route: null,
          Component: null
        },
        history: []
      }
    };

    this.interfaces = props.interfaces.map(ui => ui);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.close = this.close.bind(this);
  }

  open(direction) {
    this.setState(state => {
      let update = {};
      let { active, transition } = state;
      let { direction: currentDirection } = transition;

      if (active) {
        update.active = false;
      }

      if (currentDirection !== direction) {
        update.transition = { direction: direction };
      }
      return update;
    });
  }
  fetchInterface(route) {
    let UI = this.interfaces.filter(ui => {
      return ui.route === route;
    });

    this.setState(state => {
      let update = { interface: {} };

      let { interface: ui } = state,
        { active, previous } = ui;

      update.interface.previous = active;
      update.interface.active = UI;
      update.interface.history.unshift(previous);

      return update;
    });
  }

  toggleOpen(direction) {
    this.setState(state => {
      let { active } = state;

      if (active) {
        this.open(direction);
      } else {
        this.close(direction);
      }
    });
  }
  close(direction) {
    this.setState(state => {
      let update = {};
      let { active, transition } = state;
      let { direction: currentDirection } = transition;

      if (!active) {
        update.active = true;
      }

      if (currentDirection !== direction) {
        update.transition = { direction: direction };
      }
      return update;
    });
  }
  componentDidMount() {
    this.props.setMainInterface(this);
  }
  render() {
    let { state, props } = this,
      { children, classes } = props,
      { root } = classes,
      { active, transition } = state,
      { direction } = transition;

    let displayStatus = active ? "active" : "inactive";

    if (!active) {
      var transitionStyle =
        classes[`app-main-interface-transition-${direction}`];
    }

    let menu = {
      button: {
        toggleOpen: () => this.toggleOpen("left")
      }
    };

    let initTransition = {
      transition: `${direction} 200ms ease-in`,
      [direction]: 0
    };

    let transitionStates = {
      entering: {
        [direction]: "89%"
      },
      entered: {
        [direction]: "89%"
      },
      exiting: {
        [direction]: "0%"
      },
      exited: {
        [direction]: "0%"
      }
    };

    return (
      <Transition
        in={!active}
        timeout={300}
        classNames={`app-main-interface-transition-${direction}`}
      >
        {state => (
          <Paper
            square
            className={classnames(
              root,
              displayStatus,
              transitionStyle,
              `app-main-interface-transition-${direction}`
            )}
            elevation={6}
            id="app-main-interface"
            classes={{ elevation6: classes.elevation }}
            ref={node => (this.self = node)}
            style={{ ...initTransition, ...transitionStates[state] }}
          >
            {/* <MessageBoard ref={node => (this.MessageBoard = node)} /> */}
            <AppBar ref={node => (this.AppBar = node)} MenuProps={menu} />
            <div id="mobile-navigation-product-preview">
              <MegaMenu />
            </div>
            {children}
          </Paper>
        )}
      </Transition>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Interface);
