export default theme => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 0,
    width: "100%",
    height: "100vh",
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
    overflowX: "hidden",
    overflowY: "auto",
    ...theme.typography.headline,
    color: theme.palette.common.white
  }
});
