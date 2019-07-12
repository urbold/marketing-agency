import theme from "../theme";

const links = [
  {
    url: "/services",
    label: "Services",
    hasItems: true,
    items: [],
    topLevel: true,
    position: 0,
    id: "iiahforb2039yuh03"
  },
  {
    url: "/products",
    label: "Products",
    hasItems: true,
    items: [],
    topLevel: true,
    position: 0,
    id: "iiahforb20349yuh3"
  },
  {
    url: "/blog",
    label: "Blog",
    hasItems: true,
    items: [],
    topLevel: true,
    position: 0,
    id: "iiahfor0349yuh03"
  },
  {
    url: "/contact-us",
    label: "Contact Us",
    hasItems: true,
    items: [],
    topLevel: true,
    position: 0,
    id: "iiahforb20349y03"
  }
];

class MainNavProps {
  constructor(data) {
    this.portals = {
      desktop: document.getElementById("desktop-site-navigation-container"),
      megaMenu: document.getElementById("mobile-site-navigation-menu-button")
    };

    this.items = links;

    this.getNavLinks = this.getNavLinks.bind(this);
    this.getCurrentMediaTarget = this.getCurrentMediaTarget.bind(this);
    this.initialState = this.initialState.bind(this);
  }

  getNavLinks() {
    let topLevel = Array.from(
      document.querySelectorAll(
        "#main-site-navigation-container > .top-level.item"
      )
    );

    function getData(item) {
      let data = { ...item.dataset };
      if (data.hasItems) {
        data.items = Array.from(item.querySelectorAll(".submenu > .item ")).map(
          getData
        );
      }
      return data;
    }

    function byPosition(i1, i2) {
      return i2.position - i1.position;
    }
    return topLevel.map(getData).sort(byPosition);
  }
  getCurrentMediaTarget() {
    let { breakpoints } = theme;

    if (
      window.matchMedia(breakpoints.up("md").replace("@media ", "")).matches
    ) {
      return "desktop";
    }
    if (
      window.matchMedia(breakpoints.between("sm", "md").replace("@media ", ""))
        .matches
    ) {
      return "tablet";
    }
    if (
      window.matchMedia(breakpoints.down("xs").replace("@media ", "")).matches
    ) {
      return "mobile";
    }
  }

  initialState() {
    let state = {};
    let { breakpoints } = theme;
    let media = window.matchMedia(
      breakpoints.between("xs", "md").replace("@media ", "")
    );

    let isMobile = (state.isMobile = media.matches);

    !isMobile ? (state.isDesktop = true) : (state.isDesktop = false);

    let device = (state.device = this.getCurrentMediaTarget());
    device === "tablet" ? (state.isTablet = true) : (state.isTablet = false);

    return state;
  }
}

export default new MainNavProps();
