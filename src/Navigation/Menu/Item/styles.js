export default theme => ({
  root: {
    width: "auto",
    fontSize: "1.2rem"
  },
  label: {
    display: "inline-block",
    flexGrow: 2,
    color: "#fff",
    fontFamily: "Roboto",
    textDecoration: "none",
    "&:active,&:hover,&:visited": {
      textDecoration: "none"
    }
    //...theme.typography.subheading
  },
  desktop: {},
  selected: {},
  active: {},
  icon: {},
  expandIcon: {}
});
