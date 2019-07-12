export default theme => ({
  root: {},
  headline: {
    textAlign: "center",
    padding: [[4, 0]],
    ...theme.typography.subheading,
    color: theme.palette.primary.main,
    fontStyle: "italic"
  },
  headlineSlider: {
    position: "relative",
    boxShadow: [[0, 4, 4, -2, "rgba(0,0,0,0.25)"]],
    zIndex: 200
  },
  displaySlider: {
    padding: [[26, 0]]
  },
  billboard: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },

  display: {
    width: 320,
    height: 50,
    backgroundColor: theme.palette.secondary.main,
    textAlign: "center",
    ...theme.typography.headline,
    color: "#fff",
    margin: [[0, "auto"]]
  },
  textboard: {}
});
