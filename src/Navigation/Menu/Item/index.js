import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
//import ExpandLess from "@material-ui/icons/ExpandLess";
//import ExpandMore from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import styles from "./styles";
import SubMenu from "../SubMenu";
//import { ListItemIcon } from "@material-ui/core";
//import Device from "react-responsive";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      contextPortal: null
    };

    this.menu = React.createRef();
  }
  deselect(e) {
    let { onDeselect } = this.props;
    this.setState(() => ({
      selected: false
    }));
    onDeselect(this);
  }
  toggleActive() {
    let { onActive } = this.props;
    this.setState(state => ({
      active: !state.active
    }));
    onActive(this);
  }
  componentDidMount() {
    let { state, props } = this,
      { active, contextPortal } = state;

    if (active) {
    }
  }
  render() {
    let { state, props } = this,
      {
        position,
        id,
        hasItems,
        label,
        url,
        classes,
        topLevel,
        items,
        level
      } = props,
      { active, contextPortal } = state;

    return (
      <ListItem
        key={url}
        button={hasItems}
        alignItems="flex-start"
        component="li"
        divider={false}
        classes={{ root: classes.root }}
        className={classnames("item", classes.root, {
          active: active,
          "top-level": topLevel
        })}
        data-top-level={topLevel}
        data-url={url}
        data-label={label}
        data-position={position}
        data-has-items={hasItems}
        data-id={id}
      >
        {!hasItems ? (
          <Link
            to={url}
            component={RouterLink}
            className={classnames("navlink", classes.label)}
          >
            {label}
          </Link>
        ) : (
          label
        )}
        {hasItems ? (
          <SubMenu
            container={contextPortal}
            level={level}
            active={active}
            items={items}
            ref={this.menu}
          />
        ) : null}
      </ListItem>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Item);
