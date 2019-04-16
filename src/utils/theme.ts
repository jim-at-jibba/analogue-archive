export const theme = {
  spacing: {
    margins: {
      xs: "5px",
      sm: "10px",
      md: "15px",
      lg: "25px",
      xl: "35px"
    },
    padding: {
      xs: "5px",
      sm: "10px",
      md: "15px",
      lg: "25px",
      xl: "35px"
    }
  },
  colors: {
    white: "#ffffff",
    primaryDark: "#3E4A5D",
    primaryLight: "#75839A",
    accentDark: "#6499FF",
    accentLight: "#D5E3FF",
    error: "#FF7285",
    warn: "#FFC06A",
    success: "#4AD991",
    lightestGrey: "#EAEDF0",
    lightGrey: "#D9DCE0",
    midGrey: "#3E4A5D",
    darkGrey: "#363B52",
    ziggurat: "#B8CFDD",
    ghost: "#C8CBD1"
  },
  fonts: {
    weights: {
      light: 100,
      normal: 300,
      bold: 700
    },
    colors: {
      primary: "#3E4A5D",
      accent: "#EAEDF0",
      secondary: "#8B9FAC",
      white: "#ffffff"
    },
    family: "Roboto",
    sizes: {
      sub: "10px",
      p: "13px",
      h1: "28px",
      h2: "20px",
      h3: "17px",
      h4: "15px",
      h5: "13px",
      h6: "10px"
    },
    spacing: {
      normal: "0",
      big: "1px"
    }
  },
  breakpoints: {
    xxs: "+10",
    xs: "+350",
    sm: "+600",
    md: "+800",
    lg: "+1000",
    xl: "+1200",
    xxl: "+1400"
  },
  borderRadius: "8px",
  transition: "all ease-in-out 0.3s"
};

export type FontWeights = typeof theme.fonts.weights;
export type FontColors = typeof theme.fonts.colors;
export type FontSizes = typeof theme.fonts.sizes;
export type FontSpacing = typeof theme.fonts.spacing;
export type Spacing = typeof theme.spacing;
export type Colors = typeof theme.colors;

export type ThemeType = typeof theme;
export type Breakpoints = typeof theme.breakpoints;
