import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import Slick from "react-slick";
import styles from "./styles";
//import classnames from "classnames";

class MessageBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headine: null,
      display: null,
      expand: false,
      paused: false
    };

    this.sliders = {
      headline: React.createRef(),
      display: React.createRef()
    };
  }

  componentDidMount() {
    this.setState({
      headline: this.sliders.headline,
      display: this.sliders.display
    });
  }

  toggleDisplayAd() {
    this.setState(state => {
      if (state.paused) {
        this.sliders.headline.slickPlay();
        this.sliders.display.slickPlay();
      } else {
        this.sliders.headline.slickPause();
        this.sliders.display.slickPause();
      }

      return {
        expand: !state.expand,
        paused: !state.paused
      };
    });
  }

  render() {
    let { state, props } = this,
      { classes } = props,
      { expand, paused, headline, display } = state;

    return (
      <div
        className={classes.textboard}
        onClick={this.toggleDisplayAd.bind(this)}
      >
        <div className={classes.headlineSlider}>
          <Slick
            arrows={false}
            dots={false}
            autoplay={paused ? false : true}
            easing="easeIn"
            autoplaySpeed={10000}
            asNavFor={display}
            ref={node => {
              this.sliders.headline = node;
            }}
          >
            <div className={classes.headline}>
              <span>
                <a>
                  <span>Buy Two Get One Free!</span>
                </a>
              </span>
            </div>
            <div className={classes.headline}>
              <span>
                <a>
                  <span>Free Shipping For Purchases Over $99</span>
                </a>
              </span>
            </div>
            <div className={classes.headline}>
              <span>
                <a>
                  <span>Become a Prime Memeber and Save!</span>
                </a>
              </span>
            </div>
            <div className={classes.headline}>
              <span>
                <a>
                  <span>10% Discount On Premium Men Suits</span>
                </a>
              </span>
            </div>
          </Slick>
        </div>

        <div className={classes.billboard}>
          <Collapse in={expand}>
            <Slick
              arrows={false}
              dots={true}
              fade={true}
              autoplay={paused ? false : true}
              easing="easeIn"
              autoplaySpeed={10000}
              asNavFor={headline}
              ref={node => [(this.sliders.display = node)]}
              className={classes.displaySlider}
            >
              <div>
                <div className={classes.display}>Display Ad 1</div>
              </div>

              <div>
                <div className={classes.display}>Display Ad 2</div>
              </div>
              <div>
                <div className={classes.display}>Display Ad 3</div>
              </div>
              <div>
                <div className={classes.display}>Display Ad 4</div>
              </div>
            </Slick>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MessageBoard);
