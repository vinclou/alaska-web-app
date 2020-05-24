import { lighten } from "@material-ui/core/styles/colorManipulator";

const getColor = (theme, type, opacity) => {
  const color =
    theme.palette[type][theme.palette.type === "light" ? "main" : "dark"];

  if (!opacity) {
    return color;
  }

  return lighten(color, opacity);
};

const getGreyColor = (theme, opacity) => {
  const greyColor = theme.palette.grey["500"];

  if (!opacity) {
    return greyColor;
  }

  return lighten(greyColor, opacity);
};

export default theme => ({
  "player-grid-container": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "background-color": getColor(theme, "primary"),
    margin: "0px",
    padding: "4px",
    width: "304px",
    height: "40px",
    background: "linear-gradient(90deg, rgba(43,43,56,1) 2%, rgba(48,48,48,1) 100%);",
    "border-radius": "3px 3px 3px 3px"
  },
  "player-centered-grid-item": {
    "text-align": "center"
  },
  "player-default-icon": {
    padding: "0px",
    margin: "0px",
    width: "25px",
    height: "25px",
    //fill: "#fff!important"
    //fill: `${getColor(theme, "primary")} !important`,
    /*color: `${getColor(theme, "primary")} !important`,
    "&:hover": {
      fill: `${getColor(theme, "primary", 0.25)} !important`,
      color: `${getColor(theme, "primary", 0.25)} !important`
    }*/
  },
  "player-play-icon": {
    width: "25px",
    height: "25px",
    background: getColor(theme, "primary"),
    transform: "matrix(0, -1, -1, 0, 0, 0)"
  },
  "player-icon-disabled": {
    flex: 1,
    padding: "0px",
    margin: "0px",
    width: "27px",
    height: "27px",
    fill: "#999",
    color: getGreyColor(theme),
    "&:hover": {
      fill: getGreyColor(theme, 0.25),
      color: getGreyColor(theme, 0.25)
    }
  },
  "player-main-icon": {
    flex: 1,
    width: "25px",
    height: "25px",
    /*  fill: `${getColor(theme, "secondary")} !important`,*/
    color: `${getColor(theme, "secondary")} !important`,
    "&:hover": {
      fill: `${getColor(theme, "secondary", 0.25)} !important`,
      color: `${getColor(theme, "secondary", 0.25)} !important`
    },
    fill: "#ff"
  },
  "player-slider-container": {
    //width: "auto !important",
    //"border-radius": "4px",
    "margin-top": "6px",
    flex: 3
    // height: "9px"
  },
  "player-slider-track": {
    "background-color": getColor(theme, "primary"),
  },
  "player-slider-rail": {
    left: 0,
    "background-color": "#fff"
  },
  "player-slider-thumb": {
    "background-color": "#fff" //getColor(theme, "secondary")
  },
  "player-text-timer": {
    //color: theme.palette.getContrastText(theme.palette.background.default),
    "margin-top": "8px",
    fontSize: 14,
    color: "#fff",
    flex: 3
  }
});