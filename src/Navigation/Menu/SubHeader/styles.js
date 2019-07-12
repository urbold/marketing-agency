export default theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    ...theme.typography.h2
  },
  heading: {
    grow: 2,
    width: "100%",
    fontSize: "1.25rem",
    marginBottom: ".55rem"
  },
  icon: {}
});
