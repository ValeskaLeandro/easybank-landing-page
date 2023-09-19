import "styled-components"
declare module "styled-components" {
  export interface DefaultTheme {
    font_family: string,
    font_size: string,
    colors: {
      // Primary colors
      dark_blue: string,
      lime_green: string,
      cyan: string,

      //  Neutral colors
      grayish_blue: string,
      light_grayish_blue: string,
      ligth_gray: string,
      white: string,

    }
  }
}