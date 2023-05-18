import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      background: {
        primary: string
      }
      white: string
      green: {
        primary: string
        deep: string
      }
      red: {
        primary: string
      }
      yellow: {
        deep: string
      }
      gray: {
        primary: string
        sidebar: string
      }
    }
  }
}