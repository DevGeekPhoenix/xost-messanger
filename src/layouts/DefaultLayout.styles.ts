import { styled } from "theme";

export const LayoutContainer = styled("div")(
  ({ theme: { palette } }) => `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  // background-color: ${
    palette.mode === "light" ? palette.neutral[50] : palette.neutral[100]
  }; 
`
);

export const LayoutContent = styled("main")(
  ({}) => `
  display: flex;
  flex-direction: column;
  flex: 1;
`
);
export const Container = styled("div")(
  ({ theme: { breakpoints } }) => `

`
);
