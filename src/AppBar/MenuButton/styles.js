export default theme => {
  let { palette } = theme,
    { primary } = palette,
    { main } = primary;

  return {
    root: {
      marginLeft: -12,
      marginRight: 12,
      padding: 6,
      "&:hover": {
        backgroundColor: main
      }
    },

    "main-site-navigation-menu-button-icon": {
      "&-appear": {},
      "&-enter": {
        opacity: 1,
        "&-active": {
          opacity: 0,
          transition: "opacity 300ms"
        },
        "&-done": {
          opacity: 1
        }
      },
      "&-exit": {
        "&-active": {},
        "&-done": {}
      }
    }
  };
};
