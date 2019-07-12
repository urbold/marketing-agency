import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grow from "@material-ui/core/Grow";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
//import TextField from "@material-ui/core/TextField";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuButton from "./MenuButton";
import Device from "react-responsive";
import classnames from "classnames";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { NavigationPortalContext } from "../Navigation";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  shrink: {
    flexGrow: 0
  },
  appbar: {
    backgroundColor: theme.palette.primary.dark
  },
  toolbar: {
    paddingTop: 6,
    paddingBottom: 6
  },
  title: {
    [theme.breakpoints.up("xs")]: {
      display: "block"
    },
    "&.hidden": {
      display: "none"
    }
  },
  iconButton: {
    padding: 6
  },
  search: {
    position: "relative",
    display: "flex",
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    },
    "&.expand": {
      flexGrow: 1
    }
  },
  searchLabel: {
    display: "none",
    position: "absolute",
    left: 8,
    top: 4,
    alignSelf: "center",
    zIndex: 50,
    ...theme.typography.subheading,
    color: "#999",
    fontSize: "1.2rem",
    transition: ["top 0.5s", "font-size 0.5s"],
    "&:focus": {},
    "&.active": {
      display: "block"
    }
  },
  inputRoot: {
    color: "inherit",
    borderRadius: [[theme.shape.borderRadius, 0, 0, theme.shape.borderRadius]],
    width: 0,
    overflow: "hidden",
    order: 1,
    [theme.breakpoints.up("sm")]: {
      width: "100%"
    },
    "&.expand": {
      width: "100%"
    }
  },
  inputInput: {
    padding: theme.spacing.unit,
    paddingBottom: theme.spacing.unit + 1,
    transition: theme.transitions.create("width"),
    width: 0,
    [theme.breakpoints.up("sm")]: {
      width: 200
    },
    "&.expand": {
      width: "100%"
    },
    "&:focus ~ .label": {
      fontSize: ".75rem",
      top: -8
    }
  },
  searchIcon: {
    position: "relative",
    cursor: "pointer",
    borderRadius: [[0, theme.shape.borderRadius, theme.shape.borderRadius, 0]],
    backgroundColor: theme.palette.primary.dark,
    order: 2,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.primary.main
    },
    "&.expand": {
      position: "absolute",
      right: 0,
      backgroundColor: theme.palette.primary.main
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    marginRight: -12,
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  popupMenu: {
    //position: "relative",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 0,
    top: 15
  }
});

class PrimarySearchAppBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      search: {
        active: false,
        value: null
      },
      navigation: {
        active: false
      }
    };

    this.formControls = {
      search: React.createRef(),
      searchButton: React.createRef(),
      searchInput: React.createRef()
    };

    this.navigation = {};
  }
  expandSearch() {
    this.setState(() => {
      return {
        search: {
          active: true
        }
      };
    });
  }
  closeSearch() {
    this.setState(() => {
      return {
        search: {
          active: false
        }
      };
    });
  }
  focusSearchInput(e) {
    let { target } = e,
      { state } = this,
      { search } = state,
      { active } = search;

    e.stopPropagation();
    active ? target.focus() : target.blur();
  }
  toggleNavigation() {
    this.setState(state => ({
      navigation: {
        active: !state.navigation.active
      }
    }));
  }
  componentDidMount() {}
  handleSearchChange() {}
  handleSearchSubmit() {
    alert("Search Form  Submitted!");
  }
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl, search } = this.state;
    const { classes, theme, MenuProps } = this.props;
    const { breakpoints } = theme;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        //anchorReference="anchorPosition"
        open={isMenuOpen}
        onClose={this.handleMenuClose}
        classes={{ paper: classes.popupMenu }}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
        classes={{ paper: classes.popupMenu }}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="sticky" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            {/*Navigation Button*/}
            <MenuButton toggleOpen={MenuProps.button.toggleOpen} />
            {/*Company Branding*/}
            <Device minDeviceWidth={breakpoints.values.xs}>
              <Grow in={!search.active}>
                <Typography
                  className={classnames(classes.title, {
                    hidden: search.active
                  })}
                  variant="h6"
                  color="inherit"
                  noWrap
                >
                  Reach Bold
                </Typography>
              </Grow>
            </Device>
            <div className={search.active ? classes.shrink : classes.grow} />
            <NavigationPortalContext.Consumer>
              {context => context.desktop.component}
            </NavigationPortalContext.Consumer>

            {/*Site Search*/}
            <ClickAwayListener onClickAway={this.closeSearch.bind(this)}>
              <div
                className={classnames(classes.search, {
                  expand: search.active
                })}
                onClick={this.expandSearch.bind(this)}
                id="site-search"
              >
                <InputBase
                  placeholder="Search"
                  classes={{
                    root: classnames(
                      classes.inputRoot,
                      "search-input-container",
                      { expand: search.active }
                    ),
                    input: classnames(classes.inputInput, "search-input", {
                      expand: search.active
                    })
                  }}
                  inputProps={{
                    onTransitionEnd: this.focusSearchInput.bind(this)
                  }}
                  ref={this.formControls.search}
                  inputRef={this.formControls.searchInput}
                />

                <IconButton
                  className={classnames(classes.searchIcon, "search-icon", {
                    expand: search.active
                  })}
                  classes={{ root: classes.iconButton }}
                  id="site-search-button"
                  ref={this.formControls.searchButton}
                  onClick={
                    search.active ? this.handleSearchSubmit.bind(this) : null
                  }
                >
                  <SearchIcon />
                </IconButton>
              </div>
            </ClickAwayListener>

            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>

            <Device maxDeviceWidth={breakpoints.values.md}>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-haspopup="true"
                  onClick={this.handleMobileMenuOpen}
                  color="inherit"
                  classes={{ root: classes.iconButton }}
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Device>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PrimarySearchAppBar);
