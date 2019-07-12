export default theme => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 100,
    width: "100%",
    height: "100vh",
    overflowX: "hidden",
    overflowY: "auto",
    //padding: theme.spacing.unit,
    backgroundColor: theme.palette.common.white,
    ...theme.typography.headline,
    color: theme.palette.primary.main
  },
  elevation: {
    boxShadow: [[-2, 0, 8, "rgba(0,0,0,1)"], [-8, 0, 26, "rgba(0,0,0,0.3)"]]
  },
  "app-main-interface-transition-left": {
    "&-appear": {
      top: 0,
      left: 0,
      "&-active": {
        left: "85%",
        transition: "left 300ms ease-in"
      },
      "&-done": {
        left: "85%"
      }
    },
    "&-enter": {
      top: 0,
      left: 0,
      "&-active": {
        left: "85%",
        transition: "left 300ms ease-in"
      },
      "&-done": {
        left: "85%"
      }
    },
    "&-exit": {
      left: "85%",
      "&-active": {
        left: 0,
        transition: "left 300ms ease-in"
      },
      "&-done": {
        left: "85%"
      }
    }
  },
  "app-main-interface-transition-right": {
    "&-appear": {
      "&-active": {},
      "&-done": {}
    },
    "&-enter": {
      "&-active": {},
      "&-done": {}
    },
    "&-exit": {
      "&-active": {},
      "&-done": {}
    }
  },
  "app-main-interface-transition-down": {
    "&-appear": {
      "&-active": {},
      "&-done": {}
    },
    "&-enter": {
      "&-active": {},
      "&-done": {}
    },
    "&-exit": {
      "&-active": {},
      "&-done": {}
    }
  }
});
