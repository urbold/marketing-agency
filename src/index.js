import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";

process.env.NODE_ENV = "production";

/* function onMediaChange({ matches }) {
  console.log(matches);
}
let media = window.matchMedia("(max-width: 320px)");
media.onchange = onMediaChange; */

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Demo />
  </MuiThemeProvider>,
  document.querySelector("#root")
);
