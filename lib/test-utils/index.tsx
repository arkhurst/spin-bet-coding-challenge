import { RenderOptions, render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { GlobalStyle } from "../GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

interface CustomRenderOptions extends RenderOptions {}

function AllTheProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export const customRender = (
  ui: React.ReactElement,
  options?: CustomRenderOptions
) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

export * from "@testing-library/react";
