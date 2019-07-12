import { createMuiTheme } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import navy from "@material-ui/core/colors/blueGrey";

export default createMuiTheme({
  palette: {
    primary: {
      main: navy[900]
    },
    secondary: {
      main: orange[900]
    },
    type: "dark"
  },
  typography: {
    useNextVariants: true
  },
  mixins: {
    toolbar: {
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 42
      }
    }
  }
});
