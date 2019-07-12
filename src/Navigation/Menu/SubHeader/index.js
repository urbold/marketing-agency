import React, { Fragment } from "react";
import { ListSubheader } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import { MainInterface } from "../../../Backdrop";

function MobileNavHeader({ company, classes }) {
  let { root, heading, icon, divider } = classes;

  return (
    <Fragment>
      <ListSubheader
        color="primary"
        className={classnames("mobile-site-navigation-sub-header", root)}
      >
        <Typography className={heading}>{company}</Typography>
        {/* <MainInterface.Consumer>
          {context => {
            console.log(context);
            return (
              <IconButton
                id="mobile-site-navigation-close-button"
                onClick={() => context.toggleOpen("left")}
                className={icon}
              >
                <Close />
              </IconButton>
            );
          }}
        </MainInterface.Consumer> */}
      </ListSubheader>
      <Divider className={divider} />
    </Fragment>
  );
}

export default withStyles(styles)(MobileNavHeader);
