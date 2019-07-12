import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Backdrop from "./Backdrop";
import Interface from "./Interface";
import { withStyles } from "@material-ui/core/styles";
import { NavigationContainers, NavigationPortalContext } from "./Navigation";

const styles = theme => ({
  root: {
    position: "relative"
    //display: "flex"
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeInterface: "main",
      main: { activeInterface: null, ref: null },
      backdrop: { activeInterface: null, ref: null }
    };

    this.interfaces = {
      main: {
        component: null,
        interfaces: []
      },
      backdrop: {
        component: null,
        interfaces: []
      }
    };

    this.setMainInterfaceRef = this.setMainInterfaceRef.bind(this);
  }
  setMainInterfaceRef(component) {
    console.log("Main Inteface Mounted");
    this.setState(state => {
      let update = {};

      update.main = {
        ref: component
      };

      return update;
    });
  }
  componentDidMount() {
    console.log("App Mounted");
  }
  render() {
    let { setMainInterfaceRef, state } = this,
      { main } = state,
      { ref } = main;

    return (
      <Router>
        <div id="app-interfaces-container" className={root}>
          <NavigationPortalContext.Provider value={NavigationContainers}>
            <Interface
              ref={node => (this.interfaces.main.component = node)}
              interfaces={[]}
              setMainInterface={setMainInterfaceRef}
            />
            <Backdrop
              ref={node => (this.interfaces.backdrop.component = node)}
              interfaces={[]}
              MainInterface={ref}
            />
          </NavigationPortalContext.Provider>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
