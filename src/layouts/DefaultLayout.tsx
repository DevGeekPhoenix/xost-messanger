import { FC } from "react";
import type { DefaultLayoutProps } from "./index.d";
import {
  Container,
  LayoutContainer,
  LayoutContent,
} from "./DefaultLayout.styles";

const DefaultLayout: FC<DefaultLayoutProps> = ({ children, config }) => {
  const showHeader = config?.header ?? true;
  const showFooter = config?.footer ?? true;
  const hasContainer = config?.container ?? false;
  const isInAuth = config?.isInAuth ?? false;
  return (
    <LayoutContainer>
      {/* {showHeader && <DefaultHeader isInAuth={isInAuth} />} */}
      <LayoutContent>
        {hasContainer ? <Container> {children}</Container> : <>{children}</>}
      </LayoutContent>
      {/* {showFooter && <DefaultFooter />} */}
    </LayoutContainer>
  );
};

export default DefaultLayout;
